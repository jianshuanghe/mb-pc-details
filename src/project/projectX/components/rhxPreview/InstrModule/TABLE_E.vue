<template>
	<div class='module-content'>
		<div class='mI-cont' v-if='dataItem.dataList.length > 0'>
			<div class='moduleTitle'>
				<div class='titletype2'>{{ dataItem.iconTitle }}</div>
			</div>
			<div class='money-cont'>
				<div class='iMno-items-bot' v-for='items in dataItem.dataList' :key='items'>
					<div class='mon-im chL left'>{{ items.key }}</div>
					<div class='mon-im chR chCor lineL left'>{{ items.value }}{{ items.unit }}</div>
					<div class='clear'></div>
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
	watch: {},
	methods: {}
};
</script>

<style scoped>
.money-cont {
	position: relative;
	width: 345px;
	border: 1px solid #d2d2d2;
	border-top: none;
	margin: 20px 15px;
}
.iMno-items-top {
	position: relative;
	width: 100%;
}
.mon-im-t,
.mon-im {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 14px;
	padding: 10px;
}
.chL {
	width: 40%;
}
.chR {
	width: 60%;
}
.lineL {
	border-left: 1px solid #d2d2d2;
}
.iMno-items-bot {
	position: relative;
	width: 100%;
	border-top: 1px solid #d2d2d2;
}
.corL {
	font-family: PingFangSC-Semibold;
	font-size: 14px;
	color: #02c2a2;
	letter-spacing: 0;
	line-height: 14px;
}
.chCor{
	color: #606266d6;
}
</style>
