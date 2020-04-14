<template>
	<div class="rSwiper-contnet">
		<el-carousel :interval="5000" arrow="always">
			<el-carousel-item v-for="item in banner" :key="item"><img :src="item.picUrl" alt="" class="swiperimg" /></el-carousel-item>
		</el-carousel>
		<div class="horizontal-cont">
			<div class="hz-icon left" v-for="item in banner" :key="item"><img :src="item.picUrl" alt="" class="icon-swiper" /></div>
			<div class="clear"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'templatePro',
	components: {},
	props: [
		'dataItems',
		'basicData'
	],
	data () {
		return {
			banner: this.dataItems
		};
	},
	created () {
		this.banner = this.dataItems;
	},
	watch: {},
	methods: {}
};
</script>
<style>
.el-carousel--horizontal {
	height: 207px !important;
}
.el-carousel__indicators--horizontal {
	position: relative !important;
	width: 90% !important;
	top: 0px !important;
}
.el-carousel__button {
	position: relative !important;
	width: 40px !important;
	height: 40px !important;
}
.el-carousel__arrow--left {
	left: 0px !important;
	top: 123% !important;
	background: none !important;
	text-align: left !important;
}
.el-carousel__arrow--right {
	right: 0px !important;
	top: 124% !important;
	background: none !important;
	text-align: right !important;
}
.el-carousel__arrow {
	border: none !important;
	outline: 0 !important;
	padding: 0 !important;
	margin: 0 !important;
	width: 20px !important;
	cursor: pointer !important;
	-webkit-transition: 0.3s !important;
	transition: 0.3s !important;
	border-radius: 0% !important;
	color: #2e2e30 !important;
	position: absolute !important;
	z-index: 10 !important;
	-webkit-transform: translateY(-50%) !important;
	transform: translateY(-50%) !important;
	font-size: 12px !important;
}
.el-carousel__container {
	height: 140px !important;
}
.el-carousel__item h3 {
	color: #475669 !important;
	font-size: 18px !important;
	opacity: 0.75 !important;
	line-height: 140px !important;
	margin: 0 !important;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf !important;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6 !important;
}
.swiperimg {
	position: relative !important;
	width: 276px !important;
	height: 140px !important;
}
.is-active .el-carousel__button {
	background-color: #ffffff0a !important;
	border: 1px solid #02c2a2 !important;
}
.horizontal-cont {
	position: absolute !important;
	width: 90% !important;
	z-index: -1 !important;
	left: 5% !important;
	bottom: 0px !important;
}
.hz-icon {
	position: relative !important;
	display: inline-block !important;
	padding: 12px 4px !important;
}
.icon-swiper {
	position: relative !important;
	width: 40px !important;
	height: 40px !important;
}
</style>
