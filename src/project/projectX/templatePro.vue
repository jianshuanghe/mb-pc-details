<template>
	<div class="templatePro">
		<SwiperTitle
			:isEditTemp="isEditTemp"
			:pageStatus="pageStatus"
			:statusTemp="statusTemp"
			:sourceTemp="sourceTemp"
			:routeParam="routeParam"
			:isMenu="isMenu"
			:moduleDateList="moduleDateList"
			:moduleTempList="moduleTempList"
			:moduleCustTempList="moduleCustTempList"
			:moduleAIDateList="moduleAIDateList"
			:setFixedShow="setFixedShow"
			v-if="String(routeParam.instrucCustType) !== '3'"
		></SwiperTitle>
		<div class="moduleX" v-if="String(routeParam.instrucCustType) !== '3'">
			<modeuleXList
			:isEditTemp="isEditTemp"
			:pageStatus="pageStatus"
			:statusTemp="statusTemp"
			:sourceTemp="sourceTemp"
			:routeParam="routeParam"
			:isMenu="isMenu"
			:moduleDateList="moduleDateList"
			:moduleTempList="moduleTempList"
			:moduleCustTempList="moduleCustTempList"
			:moduleAIDateList="moduleAIDateList"
			:setFixedShow="setFixedShow"
			@tap-ModuleTemPro='tapModuleTemPro'
			></modeuleXList>
		</div>
		<div class="templatePro">
			<moduleTemPro
				:isEditTemp="isEditTemp"
				:pageStatus="pageStatus"
				:statusTemp="statusTemp"
				:sourceTemp="sourceTemp"
				:routeParam="routeParam"
				:isMenu="isMenu"
				:moduleDateList="moduleDateList"
				:moduleTempList="moduleTempList"
				:moduleCustTempList="moduleCustTempList"
				:moduleAIDateList="moduleAIDateList"
				:setFixedShow="setFixedShow"
			></moduleTemPro>
		</div>
	</div>
</template>

<script>
// import { isData } from './../../../static/js/dataJson/putong.js';
// import {isData} from './../../../static/js/dataJson/dingzhi.js';
// import {isData} from './../../../static/js/dataJson/gongcheng.js';
// import {isData} from './../../../static/js/dataJson/huagong.js';
// import {isData} from './../../../static/js/dataJson/gangcai.js';
// import {isData} from './../../../static/js/dataJson/zixun.js';
// import {isData} from './../../../static/js/dataJson/shouhoufuwu.js';
// import {isData} from './../../../static/js/dataJson/FAQ.js';
import SwiperTitle from './components/rhxPreview/SwiperTitle/SwiperTitle';
import modeuleXList from './components/rhxPreview/modeuleXList/modeuleXList';
import moduleTemPro from './moduleTemPro/moduleTemPro';
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
	name: 'templatePro',
	components: {
		SwiperTitle,
		modeuleXList,
		moduleTemPro
	},
	data () {
		return {
			bottomLoca: '13vw', // 上层按钮的bottom值
			isNewsAShow: true,
			isMenu: null, // 是否展示中间横向导航
			pageStatus: true, // 页面加载时展示
			setFixedShow: true,
			isEditTemp: false, // 当前说明书是否可编辑, 默认可编辑，先去判断当前发布者id和说明书id一致性，再看发布状态
			idTemp: null, // 模板id， 45：普通模板，65：定制模板，68：工程机械模板， 69：化工模板， 71：资讯模板， 72：....
			aiListTemp: 1, // 是否展示AI列表，1展示， 0不展示
			statusTemp: 1, // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
			sourceTemp: 0, // 从哪里进来的：0代表：模板列表，1代表：AI推送列表，2代表:发现列表，3代表：流量承载页， 4代表：我的说明书列表， 5代表.....
			routeParam: null, // 路由参数；
			userStopTime: 0, // 记录用户再页面停留时间
			businessTemList: null, // 商机信息数据------真实接口数据
			moduleDateList: null, // 当前模板的数据---------此数据是真实接口返回的数据
			moduleTempList: null, // 当前添加模块的数据------此数据是真实接口返回的数据
			moduleCustTempList: null, // 特殊模板下拉去添加模块的数据----此数据真实接口返回
			moduleAIDateList: null, // AI列表数据
			loadEnd: false, // 判断是否加载完数据
			addConsultShow: false // 立即咨询组件
		};
	},
	created () {
		if (this.EVN === 'production') {
			axios.defaults.baseURL = this.apiProd2;
		}
		// this.moduleDateList = isData;
		// query说明：
		// id: 说明书id,
		// instrucCustType // 模板类型 1定制， 2普通、。。。3，咨询
		// isMenu: 是否存在中间的横向导航
		// isFlow: 是否来自流量平台 0否， 1是
		// aiListTemp： 是否展示AI列表，1展示， 0不展示
		// orderType: 0定制订单 1标品订单
		// lookUserId: 用户id 选填 谁在看这个说明书 用于用户交互行为
		// sourceTemp： 从哪里进来的：0代表：模板列表，1代表：AI推送列表，2代表:发现列表，3代表：流量承载页， 4代表：我的说明书列表， 5代表公共模式,  6代表采购列表
		// sourceScan: 1, // 1扫码进来，0或者不填写走原有逻辑
		// instrucId: 说明书id
		// lookUserId: 查看者id
		// creatorId: 说明书创建者
		// instrucState： 说明书状态
		let option = this.urlCrypto(this.$route.query.urlParams, 1);
		// this.resetURL('/modules/createBusiness/templatePro/templatePro', '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.$route.query.urlParams);
		this.routeParam = option; // 链接上所有参数；
		console.log(this.routeParam, '---------------------------------------this.routeParam----------------');
		this.isMenu = option.isMenu; // 是否展示中间横向导航
		this.sourceTemp = Number(option.sourceTemp); // 来源
		this.idTemp = option.id; // 模板id， 目前以此来判断底部按钮如何展示，后期底部按钮实现模板化，这个就不需要了
		if (this.sourceTemp === 0) {
			// 来源模板列表，此处获取模板详情
			// this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
			// this.getTempList(option.id); // 根据id拉去模板信息
			// if (Number(option.instrucCustType) === 1) { // 定制模板下需要拉去基本信息用户可添加的模块
			// 	this.getCustModuleTempList(option.id); // 根据id 拉去用户可添加的模块信息
			// };
			// this.shareEachPage(); // 分享
		} else if (this.sourceTemp === 1) {
			// 来源我的说明书列表，此处获取说明书详情
			this.getInstructionsList(this.routeParam);
			// this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
		} else if (this.sourceTemp === 2) {
			// 来源平台，此处获取说明书详情
			this.getInstructionsList(this.routeParam);
			// this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
			// if (this.routeParam.sourceScan === 1) { // 是否来源扫码
			// 	if (uni.getStorageSync('landRegist')) {
			// 		let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			// 		// console.log(landRegistLG.user.id);
			// 		this.routeParam.lookUserId = landRegistLG.user.id;
			// 	} else {
			// 		this.routeParam.lookUserId = uni.getStorageSync('UUID');
			// 	};
			// };
		} else if (this.sourceTemp === 4) {
			// 来源我的说明书列表，此处获取说明书详情
			// this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
			this.getInstructionsList(this.routeParam);
			// this.getTempList(option.id); // 根据id拉去模板信息
			// if (Number(option.instrucCustType) === 1) { // 定制模板下需要拉去基本信息用户可添加的模块
			// 	this.getCustModuleTempList(option.id); // 根据id 拉去用户可添加的模块信息
			// };
		} else if (this.sourceTemp === 5) {
			// 来源公共，此处获取说明书详情
			// this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
			// this.getInstructionsList(this.routeParam);
		}
	},
	mounted () {
		// this.moduleDateList = isData;
	},
	methods: {
		// 拉去说明书详情
		getInstructionsList (option) {
			// console.log(option, '链接上的参数')
			// let params = {}; // 请求总数居时 参数为空
			// uni.showLoading({
			// 	// 展示loading
			// 	title: '加载中'
			// });
			axios
				.get(this.api2 + '/rest-rp/instruc/' + option.instrucId + '?' + 'lookUserId=' + option.lookUserId)
				.then(response => {
					console.log(response);
					if (response.data.ret === '200') {
						console.log(response.data);
						// let _this = this;
						response.data.content.context.tempCon.modules = this.isShowModule(response.data.content.context.tempCon.modules);
						this.moduleDateList = response.data;
						console.log(this.moduleDateList, '0000000000this.moduleDateList0000000');
						setTimeout(() => {
							this.loadEnd = true; // 加载完成
						}, 150);
					} else if (response.data.ret === '202') {
					} else if (response.data.ret === '400') {
					} else {
					}
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
			});
		},
		isShowModule (e) {
			e.map((item, index) => {
				console.log(index);
				item.showModule = true;
			});
			return e;
		},
		tapModuleTemPro (e) {
			this.moduleDateList = e;
		}
	}
};
</script>

<style scoped></style>
