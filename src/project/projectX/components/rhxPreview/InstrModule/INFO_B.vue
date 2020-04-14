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
			<div class="iconText">
				<div class="iT-items" v-for="items in dataItem.dataList" :key="items">
					<div class="iT-icon left"></div>
					<div class="iT-text left">
						<div class="iT-text-title">{{items.title}}</div>
						<div class="iT-text-cont">{{items.content}}</div>
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
	watch: {},
	methods: {}
};
</script>

<style scoped>
	.iconText{
		position: relative;
		width: 100%;
	}
	.iT-items{
		position: relative;
		/* width: 100%; */
		margin-left: 15px;
	}
	.iT-icon{
		position: relative;
		width: 40px;
		height: 40px;
		background: #02C2A2;
		margin: 10px 0px;
		border-radius: 50%;
	}
	.iT-text{
		position: relative;
		width: 500px;
		margin: 10px 10px;
	}
	.iT-text-title{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 24px;
	}
	.iT-text-cont{
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 12px;
	}
</style>
