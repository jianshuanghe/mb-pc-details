<template>
	<div class="module-content"></div>
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
	created() {},
	watch: {
		scrollTop: {
			handler(a, b) {},
			deep: true
		}
	},
	methods: {
		tapIndex(e) {},
		// 带点击标题返回
		tapTitleContent(e) {}
	}
};
</script>

<style></style>
