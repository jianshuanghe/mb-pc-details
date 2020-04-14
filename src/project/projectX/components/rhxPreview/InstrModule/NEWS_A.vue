<template>
	<div class="module-content">
		<div class="mI-cont" v-if="dataItem.dataList.length > 0">
			<div class="moduleTitle">
				<div class="titletype2">{{ dataItem.iconTitle }}</div>
			</div>
			<div class="newsText">
				<div class="iN-items" v-for="items in dataItem.dataList" :key="items">
					<div class="mN-titele2" v-if="items.title">{{ items.title }}</div>
					<div class="mN-content2" v-if="items.content">{{ items.content }}</div>
					<div class="mN-img" v-if="items.imgUrl"><img :src="items.imgUrl" alt="" class="img" /></div>
					<div class="mN-instBanner" v-if="items.instBanner"><img :src="items.instBanner" alt="" class="instBanner" /></div>
					<div class="mN-instName" v-if="items.instName">{{ items.instName }}</div>
					<div class="mN-temp" v-if="items.instId" @click="goDeitle(items)">查看链接</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: ['disabled', 'basicData', 'scrollTop', 'defaultImg', 'dataItems', 'indexNum', 'tabYItemsIndexs'],
	data () {
		return {
			dataItem: this.dataItems
		};
	},
	created () {},
	watch: {},
	methods: {
		goDeitle (e) {
			console.log(e);
			let lookUserId = null;
			if (localStorage.getItem('userId')) {
				lookUserId = localStorage.getItem('userId');
			} else {
				lookUserId = localStorage.getItem('UUID');
			}
			let urlParams = {
				isFlow: 0, // 平台来源
				orderType: 0, // 订单类型
				sourceTemp: 5, // 说明书来源
				aiListTemp: 0, // 是否展示ai
				id: e.tempId, // 模板id
				isMenu: e.isMenu, // 横向导航
				instrucId: e.instId, // 说明书id
				lookUserId: lookUserId, // 浏览者
				instrucCustType: e.instrucCustType, // 模板类型
				creatorId: e.creatorId, // 说明书创建者
				instrucState: e.instrucState // 说明书状态
			};
			this.postMessage(['咨询跳转', urlParams]);
		}
	}
};
</script>

<style scoped>
.module-content {
	position: relative;
	width: 660px;
}
.newsText {
	position: relative;
	width: 100%;
	padding: 20px 15px;
}
.iN-items {
	position: relative;
	width: 100%;
}
.mN-titele2 {
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #02c2a2;
	letter-spacing: 0;
	line-height: 18px;
	margin: 20px 0;
}
.mN-content2 {
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: justify;
	line-height: 28px;
	margin: 20px 0;
}
.mN-img {
	position: relative;
	width: 100%;
	max-width: 100%;
	margin: 20px auto;
}
.mN-instBanner {
	position: relative;
	width: 100%;
	margin: auto;
	display: inline-block;
	text-align: center;
}
.mN-instName {
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 20px;
}
.mN-temp {
	position: relative;
	width: 182px;
	height: 34px;
	background: #2e2e30;
	margin: 20px auto;
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 34px;
}
</style>
