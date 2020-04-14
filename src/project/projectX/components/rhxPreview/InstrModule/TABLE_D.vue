<template>
	<div class='module-content'>
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="moduleTitle">
				<div class="titletype1">{{dataItem.iconTitle}}</div>
			</div>
			<div class="mI-titele1" v-if='dataItem.dataList[0].title || dataItem.dataList[0].content'>
				<div class="mI-t-y-line"></div>
				<div class="mI-t-text" v-if='dataItem.title'>{{dataItem.title}}</div>
				<div class="mI-t-textare" v-if='dataItem.content'>{{dataItem.content}}</div>
			</div>
			<div class="tableText">
				<div class="tT-items" v-for="items in dataItem.dataList" :key="items">
					<div class="tT-title left">{{items.key}}</div>
					<div class="tT-text left">{{items.value}}</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: [
		'disabled',
		'basicData',
		'scrollTop',
		'defaultImg',
		'dataItems',
		'indexNum',
		'tabYItemsIndexs'
	],
	data () {
		return {
			dataItem: this.dataItems
		};
	},
	created () {},
	watch: {
	},
	methods: {
	}
};
</script>

<style scoped>
	.module-content{
		margin: 20px 15px;
	}
	.tableText{
		position: relative;
		width: 660px;
	}
	.tT-items{
		position: relative;
		width: 100%;
	}
	.tT-title{
		position: relative;
		width: 7%;
		font-family: PingFangSC-Semibold;
		font-size: 14px;
		color: #303133;
		letter-spacing: 0;
		line-height: 12px;
		margin: 10px 0;
		font-weight: bold;
	}
	.tT-text{
		position: relative;
		width: 60%;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 12px;
		margin:10px 0;
	}
</style>
