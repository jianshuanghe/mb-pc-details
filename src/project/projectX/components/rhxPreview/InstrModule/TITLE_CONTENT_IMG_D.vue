<template>
	<div class='module-content'>
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="mI-right left">
				<div class="mI-image" v-if='dataItem.dataList[0].imgUrl'>
					<img :src="dataItem.dataList[0].imgUrl" alt="" class="img">
				</div>
			</div>
			<div class="mI-left left">
				<div class="mI-titele1">
					<div class="mI-t-y-line"></div>
					<div class="mI-t-text" v-if='dataItem.dataList[0].title'>{{dataItem.dataList[0].title}}</div>
					<div class="mI-t-textare" v-if='dataItem.dataList[0].content'>{{dataItem.dataList[0].content}}</div>
				</div>
			</div>
			<div class="clear"></div>
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

<style scoped="">
	.mI-left{
		position: relative;
		width: 50%;
	}
	.mI-right{
		position: relative;
		width: 50%;
	}
</style>
