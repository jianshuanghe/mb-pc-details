<template>
	<div class="moreModule">
		<div class="moduleTitle">
			<div class="titletype1" v-if="moduleTitleStyle === '0'">{{dataLists.iconTitle}}</div>
			<div class="titletype2" v-if="moduleTitleStyle === '1'">{{dataLists.iconTitle}}</div>
		</div>
		<div class="moduleItems">
			<div class="mode-items" v-for="(items, index) in dataLists.dataList" :key="index">
				<TITLECONTENTIMGB
				v-if="items.type === 'TITLE_CONTENT_IMG_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLECONTENTIMGB>
				<TITLECONTENTIMGC
				v-if="items.type === 'TITLE_CONTENT_IMG_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLECONTENTIMGC>
				<TITLECONTENTIMGD
				v-if="items.type === 'TITLE_CONTENT_IMG_D'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLECONTENTIMGD>
				<TITLEIMGA
				v-if="items.type === 'TITLE_IMG_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLEIMGA>
				<CONTENTB
				v-if="items.type === 'CONTENT_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></CONTENTB>
				<IMGA
				v-if="items.type === 'IMG_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></IMGA>
				<IMGCONTENTA
				v-if="items.type === 'IMG_CONTENT_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></IMGCONTENTA>
				<IMGCONTENTC
				v-if="items.type === 'IMG_CONTENT_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></IMGCONTENTC>
				<TITLECONTENTVIDEOA
				v-if="items.type === 'TITLE_CONTENT_VIDEO_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLECONTENTVIDEOA>
				<TITLECONTENTIMGE
				v-if="items.type === 'TITLE_CONTENT_IMG_E'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataItems='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'
				></TITLECONTENTIMGE>
			</div>
		</div>
	</div>
</template>

<script>
    // import moreModule from './moreModule';
    import TITLECONTENTIMGB from './../components/rhxPreview/InstrModule/TITLE_CONTENT_IMG_B';
    import TITLECONTENTIMGC from './../components/rhxPreview/InstrModule/TITLE_CONTENT_IMG_C';
	import TITLECONTENTIMGD from './../components/rhxPreview/InstrModule/TITLE_CONTENT_IMG_D';
	import TITLEIMGA from './../components/rhxPreview/InstrModule/TITLE_IMG_A';
	import CONTENTB from './../components/rhxPreview/InstrModule/CONTENT_B';
	import IMGA from './../components/rhxPreview/InstrModule/IMG_A';
	import IMGCONTENTA from './../components/rhxPreview/InstrModule/IMG_CONTENT_A';
	import IMGCONTENTC from './../components/rhxPreview/InstrModule/IMG_CONTENT_C';
	import TITLECONTENTVIDEOA from './../components/rhxPreview/InstrModule/TITLE_CONTENT_VIDEO_A';
	import TITLECONTENTIMGE from './../components/rhxPreview/InstrModule/TITLE_CONTENT_IMG_E';
	export default {
        name: 'moreModule',
        components: {
			TITLECONTENTIMGB,
			TITLECONTENTIMGC,
			TITLECONTENTIMGD,
			TITLEIMGA,
			CONTENTB,
			IMGA,
			IMGCONTENTA,
			IMGCONTENTC,
			TITLECONTENTVIDEOA,
			TITLECONTENTIMGE
        },
		data () {
			return {
				basicDatas: this.basicData,
				scrollTops: this.scrollTop,
				disableds: this.disabled,
				defaultImgs: this.defaultImg,
				dataLists: this.dataList,
				indexNums: this.indexNum,
				tabYItemsIndexs: this.tabYItemsIndex,
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				moduleTemp: this.moduleTempList,
				defaultAddLink: this.Static + 'publish/createBusiness/defaultAddLink.png',
				manageType: 0 // 0展示管理 和 复制； 1只展示复制
			};
		},
		props: [
			'basicData',
			'scrollTop',
			'moduleTitleStyle',
			'disabled',
			'defaultImg',
			'dataList',
			'moduleTempList',
			'indexNum',
			'tabYItemsIndex'
		],
        created () {
			this.dataListTemp = this.moduleDateList;
        }
    };
</script>

<style scoped>
	.moreModule{
		position: relative;
		width: 660px;
	}
	
</style>
