<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="newsText">
				<div class="iN-items" v-for="items in dataItem.dataList" :key="items">
					<div class="mN-titele2" v-if='items.title'>{{items.title}}</div>
					<div class="mN-content2" v-if='items.content'>{{items.content}}</div>
					<div class="mN-img" v-if='items.imgUrl'>
						<img :src="items.imgUrl" alt="" class="img">
					</div>
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
		scrollTop: {
		}
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
	.newsText{
		position: relative;
		width: 100%;
		padding: 20px 15px;
	}
	.iN-items{
		position: relative;
		width: 100%;
	}
	.mN-titele2{
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #02C2A2;
		letter-spacing: 0;
		line-height: 18px;
		margin: 20px 0;
	}
	.mN-content2{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: justify;
		line-height: 28px;
		margin: 20px 0;
	}
	.mN-img{
		position: relative;
		width: 100%;
		max-width: 100%;
		margin: 20px auto;
	}
	.mN-instBanner{
		position: relative;
		width: 100%;
		margin: auto;
		display: inline-block;
		text-align: center;
	}
	.mN-instName{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 20px;
	}
	.mN-temp{
		position: relative;
		width: 182px;
		height: 34px;
		background: #2E2E30;
		margin: 20px auto;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 34px;
	}
</style>
