<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length > 0">
			<div class="mI-titele1" v-if='dataItem.dataList[0].title || dataItem.dataList[0].content'>
				<div class="mI-t-y-line"></div>
				<div class="mI-t-text" v-if="dataItem.dataList[0].title">{{ dataItem.dataList[0].title }}</div>
				<div class="mI-t-textare" v-if="dataItem.dataList[0].content">{{ dataItem.dataList[0].content }}</div>
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

<style></style>
