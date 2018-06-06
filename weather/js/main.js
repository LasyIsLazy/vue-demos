const CITIES = {
    provinces: [
        {
            name: '河北',

            cities: [
                { name: '石家庄', },
                { name: '沧州', },
            ]
        },
        {
            name: '北京',

            cities: [
                { name: '北京', },
            ]
        },
        {
            name: '江西',

            cities: [
                { name: '南昌', },
            ]
        },
        {
            name: '浙江',

            cities: [
                { name: '杭州', },
            ]
        },
    ]
};
Vue.component('weather-item', {
    props: ['left', 'right'],
    template: `
            <div class="weather-item">
                <div>{{left}}</div>
                <div><slot></slot></div>
                <div>{{right}}</div>
            </div>
            `
});
Vue.component('windmill', {
    props: ['mystyle'],
    template: `
    <div class="windmill" :style="mystyle">
    <div class="winmill-base"></div>
    <div class="winmill-axis"></div>
    <div class="winmill-blade rotate-0"></div>
    <div class="winmill-blade rotate-120"></div>
    <div class="winmill-blade rotate-240"></div>
</div>
    `
})
const app = new Vue({
    el: 'main',
    data: {
        cities: CITIES,
        selectedProvince: '北京',
        selectedCity: { name: '北京', },
        showCities: [{ name: '北京', }],
        weather: {
            location: '北京',
            temperature: 37,
            text: '晴',
        },
        weathers: [{}, {}, {}],
        acquired: false,
        updating: false,
        temperatureStatus: 'cool',
        setting: false,
    },
    computed: {
        test: function () {
            return this.cities[0].cities;
        }
    },
    methods: {
        updateShowCities: function () {
            this.cities.provinces.forEach(element => {
                if (element.name == this.selectedProvince) {
                    this.showCities = element.cities;
                    this.selectedCity = element.cities[0];
                }
            });
        },
        updateWeather: function () {
            const city = this.selectedCity.name;
            this.updating = true;
            return new Promise(resolve => {
                getWeather(city, weather => {
                    resolve(weather);
                });
            }).then((weather) => {
                // console.log(weather);
                this.weather = weather;
                this.updateTemperatureStatus();
            }).then(() => {
                return new Promise(resolve => {
                    getAllWeather(city, weathers => {
                        resolve(weathers);
                    });
                });
            }).then((weathers) => {
                // console.log(weathers);
                this.weathers = weathers;
            }).then(() => {
                this.updating = false;
                this.acquired = true;
            });
        },
        updateTemperatureStatus: function () {
            const tem = this.weather.now.temperature;
            this.temperatureStatus = (function () {
                if (tem >= 30) {
                    return 'hot';
                } else if (tem >= 20) {
                    return 'warm';
                } else if (tem >= 10) {
                    return 'cool';
                } else {
                    return 'cold';
                }
            })();

        }
    },
});
app.updateWeather();