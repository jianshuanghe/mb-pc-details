<template>
	<div class='module-content'>
		<div class="mI-cont" v-if="dataItem.dataList.length>0">
			<div class="mIC-image-text">
				<div class="mIC-img left">
					<img :src="dataItem.dataList[0].imgUrl" alt="" class="img">
				</div>
				<div class="mIC-text-box left">
					<div class="mIC-t-cont">
						<div class="mIC-title">{{dataItem.dataList[0].content}}</div>
						<div class="mIC-text">{{dataItem.dataList[0].content2}}</div>
					</div>
				</div>
				<div class="clear"></div>
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
	.mIC-image-text{
		position: relative;
		margin: 20px 15px;
	}
	.mIC-img{
		position: relative;
		width: 60%;
	}
	.mIC-img>img{
		position: relative;
		width: 100%;
	}
	.mIC-text-box{
		position: relative;
		width: 30%;
	}
	.mIC-t-cont{
		position: relative;
		width: 130px;
		height: 80px;
		margin: 0px 0 0 20px;
		background: #fb871d;
	}
	.mIC-title{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: #f5f7fa;
		letter-spacing: 0;
		text-align: justify;
		line-height: 50px;
		text-align: center;
	}
	.mIC-text{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #f5f7fa;
		letter-spacing: 0;
		text-align: justify;
		line-height: 15px;
		text-align: center;
	}
</style>
