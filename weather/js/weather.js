let _callback;
let jsonpCallback = function (data) {
    let weather = data.results[0];
    _callback(weather);
};
function getWeather(city, callback) {
    _callback = callback;
    const UID = 'U28ACBEA76'; // 测试用 用户ID，请更换成您自己的用户ID
    const KEY = 'xwhd8ntsstsrwxoq'; // 测试用key，请更换成您自己的 Key
    const API = 'http://api.seniverse.com/v3/weather/now.json'; // 获取天气实况

    // 获取当前时间戳
    let ts = Math.floor((new Date()).getTime() / 1000);
    // 构造验证参数字符串
    let str = 'ts=' + ts + '&uid=' + UID;

    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    let sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
    sig = encodeURIComponent(sig);
    str = str + '&sig=' + sig;

    // 构造最终请求的 url
    let url = API + '?location=' + city + '&' + str + '&callback=jsonpCallback';
    // 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    let body = document.querySelector('body');
    body.appendChild(newScript);
    body.removeChild(newScript);
}
function getAllWeather(city, callback) {
    _callback = callback;
    const UID = 'U28ACBEA76'; // 测试用 用户ID，请更换成您自己的用户ID
    const KEY = 'xwhd8ntsstsrwxoq'; // 测试用key，请更换成您自己的 Key
    const API = 'http://api.seniverse.com/v3/weather/daily.json'; // 获取天气实况

    // 获取当前时间戳
    let ts = Math.floor((new Date()).getTime() / 1000);
    // 构造验证参数字符串
    let str = 'ts=' + ts + '&uid=' + UID;

    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    let sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
    sig = encodeURIComponent(sig);
    str = str + '&sig=' + sig;

    // 构造最终请求的 url
    let url = API + '?location=' + city + '&' + str + '&callback=jsonpCallback';
    // 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    let body = document.querySelector('body');
    body.appendChild(newScript);
    body.removeChild(newScript);
}