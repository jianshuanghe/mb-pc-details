<template>
	<div class="SwiperTitle">
		<div class="conSTR" v-if='dataListTemp !== null'>
			<div class="ST-left left">
				<div class="swiperCont">
					<!--          <img src="http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-01.jpg" alt="" class="img">-->
					<swiper
						:basicData='dataListTemp.content.context.tempCon.modules'
						:dataItems='dataListTemp.content.context.tempCon.banner'
					></swiper>
				</div>
			</div>
			<div class="ST-right right">
				<div class="title">{{dataListTemp.content.instrucTitle}}</div>
				<div class="moduleCost" v-if="String(routeParam.instrucCustType) !== '1'">
					<div class="classType">
						所属品类:
						<span class="typeName">{{dataListTemp.content.instrucCategoryStr}}</span>
					</div>
					<div class="priceSeek">
						<div class="pricetext">{{dataListTemp.content.moneyStr || '面议'}}</div>
						<div class="seektext" @click='xunjia()'>立即询价</div>
					</div>
				</div>
				<div class="moduleCost"  v-if="String(routeParam.instrucCustType) === '1'">
					<div class="tipsCost" v-for="(item, index) in dataListTemp.content.context.tempCon.modules" :key="index" v-if="item.type=== 'SELECT_B'">
						<span class="tips-p" v-for="(items, indexs) in item.dataList" :key="indexs">{{items.value}}</span>
					</div>
					<div class="priceSeek">
						<div class="pricetext">{{dataListTemp.content.moneyStr || '面议'}}</div>
						<div class="seektext1" @click='dingzhi()'>立即定制</div>
					</div>
				</div>
			</div>
			<div class="qrCode">
				<img src="./../../../img/erweima.png" alt="" class="img">
			</div>
			<div class="clear"></div>
			<div class="likeShare">
				<COUNTMODULE
					:routeParam="routeParam"
					:basicData="dataListTemp.content.context.tempCon.mesModules"
					:scrollTop="fixedScroll.scrollTop"
					:disabled="statusPreviewEditor"
					defaultImg=""
					:dataList="dataListTemp.content"
					indexNum=""
					tabYItemsIndex=""
					countType="1"
				></COUNTMODULE>
			</div>
		</div>
	</div>
</template>

<script>
import COUNTMODULE from './../InstrModule/COUNT_MODULE';
import swiper from '../../../common/swiper';
// import qrCode from './../../../img/erweima.png';
export default {
	name: 'SwiperTitle',
	props: [
		'isEditTemp',
		'isMenu',
		'pageStatus',
		'statusTemp',
		'sourceTemp',
		'routeParam',
		'moduleDateList',
		'moduleTempList',
		'moduleCustTempList',
		'moduleAIDateList',
		'setFixedShow'
	],
	components: {
		COUNTMODULE,
		swiper
	},
	data () {
		return {
			// qrCode: qrCode,
			tempRefresh: true, // 是否要刷新当前页面
			tempCustRefresh: true,
			titleH: 0, // title高度
			scrollFixedShow: false, // 判断代替横向模块的部分是否展示
			fixedScroll: {
				// 需要固定定位的东西
				scrollTop: 0,
				topFixedNum: 0
			},
			newsData: {
				setFixedShow: true, // 从父原则处理横向导航栏遮挡问题
				statusTemps: 1, // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
				sourceTemps: this.routeParam ? this.routeParam.sourceTemp : null, // 从哪里进来的：0代表：模板列表，1代表：，2代表，3代表：.....
				routeParams: {} // 路由参数
			},
			scrollInto: '', // 用户指定滚动的id位置
			custIndexShow: 0, // 定制模板中定制信息编辑状态展示子项index'
			defaultAddImg: this.Static + 'publish/createBusiness/defaultAdd.png', // 默认添加图片
			defaultAddLink: this.Static + 'publish/createBusiness/defaultAddLink.png', // 默认添加链接图片
			titleText: '', // title
			tabYItemsIndex: '', // 用户点击title子项，返回用户点击的index,与横向联动使用
			isrefresh: true, // 强制刷新
			statusPreviewEditor: this.isEditTemp, // 模板状态 默认true编辑状态， false预览状态
			dataListTemp: this.moduleDateList ? this.moduleDateList : null, // 模板数据
			moduleTemp: null, // 可添加模板的数据
			modeCustModule: {
				// 定制中特殊模块
				imgSelect: [], // 图片选择
				styleSelect: [] // 样式选择
			},
			content: {}
		};
	},
	watch: {
		moduleDateList: {
			handler (a, b) {
				console.log(a, b, '------------------moduleDateList-----------------');
				this.dataListTemp = a;
			},
			deep: true
		},
		moduleTempList: {
			handler (a, b) {
				// console.log(a, b, '---------------------moduleTempList---------------------');
				this.moduleTemp = a;
			},
			deep: true
		}
	},
	created () {
		this.dataListTemp = this.moduleDateList;
	},
	methods: {
		xunjia (e) {
			console.log('触发立即询价');
			this.postMessage('立即咨询');
		},
		qrCode () {
			this.postMessage('二维码');
		}
	}
};
</script>

<style scoped>
	.tipsCost{
		position: relative;
		width: 100%;
		margin: 10px 0;
	}
	.tips-p{
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FE9D08;
		letter-spacing: 0;
		line-height: 12px;
		background: #FFF7E5;
		border-radius: 2px;
		border-radius: 2px;
		transform: scale(0.9);
		padding:2px;
		margin-right: 4px;
	}
	.qrCode{
		position: absolute;
		top: -2px;
		right: 0;
		width: 30px;
		height: 30px;
	}
	.qrCode>img{
		width: 30px;
		height: 30px;
	}
.SwiperTitle {
	position: relative;
	width: 660px;
	padding: 20px;
}
.ST-left {
	position: relative;
	width: 276px;
}
.swiperCont {
	position: relative;
	width: 100%;
}
.swiperCont > img {
	position: relative;
	width: 100%;
}
.ST-right {
	position: relative;
	width: 334px;
	margin-left: 10px;
	height: 140px;
}
.title {
	font-family: PingFangSC-Semibold;
	font-size: 18px;
	color: #2e2e30;
	text-align: justify;
	line-height: 26px;
	font-weight: bold;
}
.classType {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 12px;
	margin: 10px 0;
}
.typeName {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 12px;
}
.priceSeek {
	position: absolute;
	width: 100%;
	bottom: 0;
}
.pricetext {
	float: left;
	font-family: MicrosoftYaHei-Bold;
	font-size: 20px;
	color: #fab100;
	line-height: 34px;
}
.seektext {
	background: #02c2a2;
	border-radius: 4px;
	border-radius: 4px;
	float: right;
	width: 96px;
	height: 34px;
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 34px;
	cursor: pointer;
}
.seektext1 {
	background: #2E2E30;
	border-radius: 4px;
	border-radius: 4px;
	float: right;
	width: 96px;
	height: 34px;
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 34px;
	cursor: pointer;
}
.likeShare {
	position: relative;
	width: 100%;
	margin: 10px 0;
}
</style>
