<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="moduleTitle">
				<div class="titletype2">{{dataItem.iconTitle}}</div>
			</div>
			<div class="money-cont">
				<div class="iMno-items-top">
					<div class="mon-im-t left">价格(元)</div>
					<div class="mon-im-t lineL left">起批量({{dataItem.unit}})</div>
					<div class="clear"></div>
				</div>
				<div class="iMno-items-bot" v-for="items in dataItem.dataList" :key="items">
					<div class="mon-im corL left">{{items.money}}</div>
					<div class="mon-im lineL left">{{items.minCount}}-{{items.maxCount}}</div>
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
	.money-cont{
		position: relative;
		width: 345px;
		border: 1px solid #D2D2D2;
		margin: 20px 15px;
	}
	.iMno-items-top{
		position: relative;
		width: 100%;
	}
	.mon-im-t,
	.mon-im{
		position: relative;
		width: 50%;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 14px;
		padding: 10px;
	}
	.lineL{
		border-left: 1px solid #D2D2D2;
	}
	.iMno-items-bot{
		position: relative;
		width: 100%;
		border-top: 1px solid #D2D2D2;
	}
	.corL{
		font-family: PingFangSC-Semibold;
		font-size: 14px;
		color: #02C2A2;
		letter-spacing: 0;
		line-height: 14px;
	}
</style>
