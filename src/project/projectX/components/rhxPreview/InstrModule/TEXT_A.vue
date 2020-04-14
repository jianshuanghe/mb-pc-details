<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="moduleTitle">
				<div class="titletype2">{{dataItem.iconTitle}}</div>
			</div>
			<div class="address-cont">
				<div class="address">{{dataItem.dataList[0].cityStr}} {{dataItem.dataList[0].value}}</div>
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
	.address-cont{
		position: relative;
		width: 660px;
		margin: 20px 15px;
	}
	.address{
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 13px;
	}
</style>
