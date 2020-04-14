<template>
	<div class='module-content'>
		<div class="mI-cont">
			<div class="moduleTitle">
				<div class="titletypeX">{{dataItem.content}}</div>
			</div>
			<div class="qrCode"></div>
			<div class="createTime">{{dataItem.createTime}}</div>
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
	.createTime{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 14px;
		padding: 0 15px;
	}
</style>
