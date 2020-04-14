<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length > 0">
			<!-- <div class="moduleTitle">
				<div class="titletype1">{{ dataItem.iconTitle }}</div>
			</div> -->
			<div class="mI-titele1" v-if="dataItem.iconTitle">
				<div class="mI-t-y-line"></div>
				<div class="mI-t-text" v-if="dataItem.iconTitle">{{ dataItem.iconTitle }}</div>
			</div>
			<div class="fromText">
				<div class="fT-items" v-for="items in dataItem.dataList" :key="items">
					<div class="fT-fromTitle left">
						{{ items.key }}
					</div>
					<div class="fT-fromText left">
						{{ items.value }}
					</div>
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
	.fromText{
		position: relative;
		margin: 20px 0 10px 15px;
		border-top: 1px solid #EFEFEF;
		border-left: 1px solid #EFEFEF;
		border-right: 1px solid #EFEFEF;
	}
	.fT-items{
		position: relative;
		width: 100%;
		border-bottom: 1px solid #EFEFEF;
	}
	.fT-fromTitle{
		position: relative;
		width: 99px;
		background: #F9F9F9;
		font-family: PingFangSC-Semibold;
		font-size: 12px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 35px;
		padding: 0 10px;
	}
	.fT-fromText{
		position: relative;
		width: 519px;
		border-left: 1px solid #EFEFEF;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 12px;
		padding: 10px;
	}
</style>
