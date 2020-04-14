import {
	api1,
	api2,
	api3
} from './../api';
console.log(api1, api2, api3);
// let api2Url = api2;
// let returnValue = {
// 	success: false, // 接口返回状态
// 	data: null, // 接口返回值
// 	type: null, // 调取的类型
// }
let sorce = null; // 来源，0 非流量平台 1 流量平台  2 采购
let countType = null; // 计费类型，
// -------------------------------非流量平台参数解读-------------------
// 浏览：0
// 分享：1
// 自定义按钮：6
// 拨打电话：8
// -------------------------------流量平台参数解读-------------------
// type 0 '点击次数'
// type 1 ''拨打电话次数''
// type 2 ''转化数''
// type 3 ''提交表单数''
// type 4 '进入关注我们页面'
// type 5 ''点击自定义按钮''
// type 6 ''停留时长''
// type 7 ‘询价’
// type 8 ‘订单’
// type 9 ‘聊天’
// type 10 ‘分享’
let params = null; // 接口参数
let routeParam = null; // 路由参数
function calculateCost (way, paramsUrl, paramsJSH, classify) {
	// way:方法，get post
	// paramsUrl: 接口地址
	// paramsJSH： 参数
	console.log(way, paramsUrl, paramsJSH);
	return new Promise (resolve => {
		// uni.showLoading({
		// 	// 展示loading
		// 	title: '加载中'
		// });
		// uni.request({
		// 	url: api2Url + paramsUrl, //接口地址。
		// 	data: paramsJSH,
		// 	method: way,
		// 	header: {
		// 		Authorization: 'Bearer ' //将token放到请求头中
		// 	},
		// 	success: response => {
		// 		console.log(response.data, '---------------response.data--------------')
		// 		uni.hideLoading(); // 隐藏 loading
		// 		returnValue.success = true;
		// 		returnValue.data = response.data;
		// 		returnValue.type = paramsJSH.type;
		// 		console.log(returnValue, '成功数据返回');
		// 		resolve(returnValue)
		// 	},
		// 	fail: error => {
		// 		uni.hideLoading(); // 隐藏 loading
		// 		uni.showToast({
		// 			title: '网络繁忙，请稍后',
		// 			icon: 'none',
		// 			duration: 1000
		// 		});
		// 		console.log(error, '网络繁忙，请稍后');
		// 		returnValue.success = false;
		// 		returnValue.data = 0;
		// 		returnValue.type = paramsJSH.type;
		// 		resolve(returnValue);
		// 	}
		// });
	})
}

async function platformAccount (CYDsorce, CYDcountType, CYDparams, CYDrouteParam) {
	sorce = CYDsorce; // 来源，0 流量平台 1 非流量平台  2 采购
	countType = CYDcountType; // 计费类型
	params = CYDparams; // 接口参数
	routeParam = CYDrouteParam; // 路由参数
	// let tempType = 0; // 模板类型 0说明书模板， 1采购模板
	if (routeParam.tempType && routeParam.tempType === 1) {
		return await calculateCost ('GET', '/rest-rp/purc/setPurcDate', params);
	} else {
		if (sorce === 0) {
			return await calculateCost ('GET', '/rest-rp/instruc/instrucDate', params);
		} else if (sorce === 1) {
			return await calculateCost ('GET', '/rest-rp/instruc/instrucDate', params);
			return await calculateCost ('POST', '/rest-rp/adve/setAdveData', params);
		}
	}
}
export {
	platformAccount
}

