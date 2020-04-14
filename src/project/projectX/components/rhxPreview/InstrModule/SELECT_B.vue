<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="moduleTitle">
				<div class="titletype2">{{dataItem.iconTitle}}</div>
			</div>
			<div class="checkbox-cont">
				<div class="cb-items-cont left" v-for="items in dataItem.dataList" :key="items">
					<div class="cb-items">{{items.value}}</div>
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
		position: relative;
		width: 660px;
	}
	.checkbox-cont{
		margin: 20px 0px 0 15px;
		min-height: 40px;
	}
	.cb-items-cont{
		position: relative;
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		border-radius: 2px;
		height: 40px;
		margin-right: 20px;
	}
	.cb-items{
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 40px;
		padding: 0 10px;
	}
</style>
