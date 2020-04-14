const EVN = require('../config/evn');

var api1 = '/api1';
var api2 = '/api2';
var api3 = '/api3';
var api4 = window.location.host;
var apiProd2 = 'https://zhaojie0001.mynatapp.cc'; // 生产环境使用

if (EVN !== 'localTest') {
  api1 = '';
  api2 = '';
  api3 = '';
}
export {api1, api2, api3, api4, apiProd2};
