<template>
	<div class="moduleTemPro-content">
		<div class="conTSr" v-if="dataListTemp !== null">
			<div class="moduleItem"
			v-for="(items, index) in dataListTemp.content.context.tempCon.modules" 
			:key="index"  
			:id='items.id'
			v-if='items.showModule === true'
			>
				<div class="moreModule-content">
					<moreModule
					v-if="items.mType === 'moreModule'"
					:basicData='dataListTemp.content.context.tempCon.modules'
					:scrollTop='fixedScroll.scrollTop'
					:moduleTitleStyle='dataListTemp.content.context.tempCon.moduleTitleStyle'
					:disabled='statusPreviewEditor'
					:defaultImg='defaultAddImg'
					:dataList='items'
					:moduleTempList='moduleTemp'
					:indexNum='index'
					:tabYItemsIndex='tabYItemsIndex'
					@set-FixedShow='setFixedShowTemp'
					@tap-ChangeTitle='tapChangeTitle'
					></moreModule>
				</div>
				<div class="singleModule-content">
					<singleModule
					v-if="items.mType === 'singleModule'"
					:basicData='dataListTemp.content.context.tempCon.modules'
					:scrollTop='fixedScroll.scrollTop'
					:moduleTitleStyle='dataListTemp.content.context.tempCon.moduleTitleStyle'
					:disabled='statusPreviewEditor'
					:defaultImg='defaultAddImg'
					:dataList='items'
					:indexNum='index'
					@set-FixedShow='setFixedShowTemp'
					:tabYItemsIndex='tabYItemsIndex'
					@tap-ChangeTitle='tapChangeTitle'
					></singleModule>
				</div>
			</div>
			<div class="mesages">
				<!-- 组件 -->
				<MESA
				v-if="dataListTemp.content.context.tempCon.mesModules"
				:routeParam='routeParam'
				:basicData='dataListTemp.content.context.tempCon.mesModules'
				:scrollTop='fixedScroll.scrollTop'
				:disabled='statusPreviewEditor'
				defaultImg=''
				dataList=''
				indexNum=''
				tabYItemsIndex=''
				@tap-ChangeTitle='tapChangeTitle'
				@tap-MESA='tapMESA'></MESA>
			</div>
			<div class="count">
				<COUNTMODULE
				:routeParam='routeParam'
				:basicData='dataListTemp.content'
				:scrollTop='fixedScroll.scrollTop'
				:disabled='statusPreviewEditor'
				defaultImg=''
				:dataList='dataListTemp.content'
				indexNum=''
				tabYItemsIndex=''
				countType='2'
				></COUNTMODULE>
			</div>
		</div>
	</div>
</template>

<script>
	import moreModule from './moreModule';
	import singleModule from './singleModule';
	import MESA from './../components/rhxPreview/InstrModule/MES_A';
	import COUNTMODULE from './../components/rhxPreview/InstrModule/COUNT_MODULE';
	export default {
	    name: 'moduleTemPro',
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
	        moreModule,
			singleModule,
			MESA,
			COUNTMODULE
	    },
		data () {
			return {
				tempRefresh: true, // 是否要刷新当前页面
				tempCustRefresh: true,
				titleH: 0, // title高度
				scrollFixedShow: false, // 判断代替横向模块的部分是否展示
				fixedScroll: { // 需要固定定位的东西
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
				dataListTemp: null, // 模板数据
				moduleTemp: null, // 可添加模板的数据
				modeCustModule: { // 定制中特殊模块
					imgSelect: [], // 图片选择
					styleSelect: [] // 样式选择
				},
				content: {}
			};
		},
		watch: {
			moduleDateList: {
				handler (a, b) {
					console.log(a, b, '--------1111----------moduleDateList-----------------');
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
	    }
	};
</script>

<style>
</style>
