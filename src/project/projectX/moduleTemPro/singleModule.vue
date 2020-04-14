<template>
	<div class="moreModule">
		<div class="moduleItems">
			<INFOB
			v-if="dataLists.type === 'INFO_B'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></INFOB>
			<TABLEC
			v-if="dataLists.type === 'TABLE_C'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TABLEC>
			<IMGB
			v-if="dataLists.type === 'IMG_B'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></IMGB>
			<MONEYA
			v-if="dataLists.type === 'MONEY_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></MONEYA>
			<TABLEA
			v-if="dataLists.type === 'TABLE_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TABLEA>
			<SELECTB
			v-if="dataLists.type === 'SELECT_B'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></SELECTB>
			<SELECTA
			v-if="dataLists.type === 'SELECT_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></SELECTA>
			<TEXTA
			v-if="dataLists.type === 'TEXT_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TEXTA>
			<TABLED
			v-if="dataLists.type === 'TITLE_D'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TABLED>
			<TABLEE
			v-if="dataLists.type === 'TITLE_E'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TABLEE>
			<TITLEA
			v-if="dataLists.type === 'TITLE_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></TITLEA>
			<CONTENTA
			v-if="dataLists.type === 'CONTENT_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></CONTENTA>
			<NEWSA
			v-if="dataLists.type === 'NEWS_A'"
			:basicData='basicDatas'
			:scrollTop='scrollTops'
			:disabled='disableds'
			:defaultImg='defaultAddImg'
			:dataItems='dataLists'
			:indexNum='indexNums'
			:tabYItemsIndexs='tabYItemsIndexs'
			@tap-ChangeTitle='tapChangeTitle'
			@tap-INFOB='tapINFOB'
			></NEWSA>
		</div>
	</div>
</template>

<script>
    // import moreModule from './moreModule';
    // import singleModule from './singleModule';
    import INFOB from './../components/rhxPreview/InstrModule/INFO_B';
	import TABLEC from './../components/rhxPreview/InstrModule/TABLE_C';
	import IMGB from './../components/rhxPreview/InstrModule/IMG_B';
	import MONEYA from './../components/rhxPreview/InstrModule/MONEY_A';
	import TABLEA from './../components/rhxPreview/InstrModule/TABLE_A';
	import SELECTB from './../components/rhxPreview/InstrModule/SELECT_B';
	import SELECTA from './../components/rhxPreview/InstrModule/SELECT_A';
	import TEXTA from './../components/rhxPreview/InstrModule/TEXT_A';
	import TABLED from './../components/rhxPreview/InstrModule/TABLE_D';
	import TABLEE from './../components/rhxPreview/InstrModule/TABLE_E';
	import TITLEA from './../components/rhxPreview/InstrModule/TITLE_A';
	import CONTENTA from './../components/rhxPreview/InstrModule/CONTENT_A';
	import NEWSA from './../components/rhxPreview/InstrModule/NEWS_A';
    export default {
        name: 'singleModule',
		props: [
			'basicData',
			'scrollTop',
			'moduleTitleStyle',
			'disabled',
			'defaultImg',
			'dataList',
			'indexNum',
			'tabYItemsIndex'
		],
        components: {
			INFOB,
			TABLEC,
			IMGB,
			MONEYA,
			TABLEA,
			SELECTB,
			SELECTA,
			TEXTA,
			TABLED,
			TABLEE,
			TITLEA,
			CONTENTA,
			NEWSA
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
				defaultAddImg: this.Static + 'publish/createBusiness/defaultAdd.png',
				defaultAddLink: this.Static + 'publish/createBusiness/defaultAddLink.png',
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				manageType: 0 // 0展示管理 和 复制； 1只展示复制
			};
		},
        created () {
			this.dataListTemp = this.moduleDateList;
        }
    };
</script>

<style scoped>

</style>
