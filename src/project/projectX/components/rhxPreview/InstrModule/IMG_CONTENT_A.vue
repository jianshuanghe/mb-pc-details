<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length > 0">
			<div class="mI-titele1">
				<div class="mI-t-textare" v-if="dataItem.dataList[0].content">{{ dataItem.dataList[0].content }}</div>
			</div>
			<div class="mI-image" v-if="dataItem.dataList[0].imgUrl"><img :src="dataItem.dataList[0].imgUrl" alt="" class="img" /></div>
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

<style></style>
