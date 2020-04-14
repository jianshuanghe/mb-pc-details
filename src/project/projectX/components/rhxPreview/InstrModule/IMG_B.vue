<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="moduleTitle">
				<div class="titletype2">{{dataItem.iconTitle}}</div>
			</div>
			<div class="mI-titele1" v-if=' dataItem.content'>
				<div class="mI-t-textare" v-if='dataItem.content'>{{dataItem.content}}</div>
			</div>
			<div class="img-cont">
				<div class="iM-items" v-for="items in dataItem.dataList" :key="items">
					<img :src="items.imgUrl" alt="" class="img">
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
	.img-cont{
		position: relative;
		width: 100%;
	}
	.iM-items{
		position: relative;
		width: 100%;
	}
	.iM-items>img{
		position: relative;
		width: 100%;
	}
</style>
