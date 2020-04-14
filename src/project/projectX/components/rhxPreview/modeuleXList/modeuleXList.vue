<template>
	<div class="module-content">
		<div class="modeuleXList-content left">
			<div class="modeuleXList left" v-for="(item, index) in dataListTemp" :key="index"   @click="tapXlist(index, item.id)"  v-if="index < 5">
				<div class="activeItem" v-if='index === tapIndex'  @click="tapSelectList(index, item.id)">
					<div class="xLine"></div>
					<div class="moduleItem">{{item.iconTitle}}</div>
				</div>
				<div class="noActiveItem"  v-if='index !== tapIndex'  @click="tapSelectList(index, item.id)">
					<div class="moduleItem">{{item.iconTitle}}</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<div class="moduleSelect-content right">
			<div class="moduleSelect" v-if="dataListTemp.length > 5">
				<el-dropdown>
				  <span class="el-dropdown-link">
				    {{moreModule}}<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item  
					v-for="(item, index) in dataListTemp" 
					v-if='index > 4'
					:key='index'
					@click.native="tapSelectList(index, item.id)">
					{{item.iconTitle}}
					</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
// import COUNTMODULE from './../InstrModule/COUNT_MODULE';
// import swiper from '../../../common/swiper';
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
	},
	data () {
		return {
			tapIndex: 0, // 默认显示
			moreModule: '更多',
			dataListTemp: [], // 模板数据
			moduleDateLists: null
		};
	},
	watch: {
		moduleDateList: {
			handler (a, b) {
				console.log(a, b, '------------------moduleDateList-----------------');
				this.dataListTemp = a.content.context.tempCon.modules;
				this.moduleDateLists = a;
			},
			deep: true
		}
	},
	created () {
		this.moduleDateLists = this.moduleDateList;
	},
	methods: {
		tapXlist (e) {
			this.tapIndex = e;
			this.moreModule = '更多';
		},
		tapSelectList (e, id) {
			this.tapIndex = e;
			if (this.tapIndex > 5) {
				this.moreModule = this.dataListTemp[e].iconTitle;
			};
			let data = this.showModule(this.dataListTemp, this.tapIndex);
			let dataModule = JSON.parse(JSON.stringify(this.moduleDateLists));
			dataModule.content.context.tempCon.modules = data;
			this.$emit('tap-ModuleTemPro', dataModule);
			this.postMessage('计算iframe高度');
		}
	}
};
</script>

<style scoped>
	.module-content{
		position: relative;
		width: 660px;
	}
	.modeuleXList-content{
		position: relative;
		width: 550px;
		background: #F5F5F5;
	}
	.modeuleXList{
		position: relative;
		width: 110px;
	}
	.activeItem{
		position: relative;
		width: 100%;
	}
	.moduleItem{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 50px;
		text-align: center;
		font-weight: bold;
	}
	.xLine{
		position: absolute;
		top: 0;
		left: 1px;
		width: 109px;
		height: 3px;
		background: #02C2A2;
		z-index: 99;
	}
	.activeItem .moduleItem{
		position: relative;
		width: 100%;
		background: #FFFFFF;
		color: #02C2A2;
	}
	.moduleSelect-content{
		position: relative;
		width: 110px;
		background: #F5F5F5;
		height: 50px;
	}
	.moduleSelect{
		position: relative;
		width: 100%;
	}
	.el-dropdown {
	   display: inline-block;
	   position: relative;
	   color: #02C2A2;
	   font-size: 16px;
	   line-height: 50px;
	   text-align: center;
	   margin: 0 20px;
	   margin: auto; 
	   float: right;
	   font-weight: bold;
	   padding-right: 17px;
	}
	.el-dropdown-link{
		font-weight: bold;
	}
</style>
