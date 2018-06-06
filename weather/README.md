# 天气

使用 Vue.js 结合 ES6 编写的获取天气预报的网页。

主要使用的技术：

- Vue相关：

  - Vue 组件
  - Vue transition

- ES6相关：
  
  - let const
  - 箭头函数
  - Promise

- 其他：

  - 使用JSONP跨域请求

不足之处：

- 未进行模块化编程
- 对API的请求应在后端进行
- 界面有待完善

说明：

- 天气预报 API 采用的是心知天气的免费 API
- 本示例需在服务器环境下运行（因为 API 请求需要进行域名验证）
- 请将 weather.js 中的 key 和 uid 替换为自己的
- 如需增加城市，请自行在 main.js 中的 CITIES 中增加（需心知天气支持的城市）