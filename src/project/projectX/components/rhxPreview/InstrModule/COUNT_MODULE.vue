<template>
	<div class="module-content">
		<div class="mI-cont">
			<div class="count1" v-if="countType === '1'">
				<div class="likeShare-content1">
					<div class="icon-cont left" @click="zanCont(dataItemsT)">
						<img src="https://style.iambuyer.com/mbc/my/zan.png" alt="" class="icon" v-if="Number(dataItemsT.isLike) === 0" />
						<img src="https://style.iambuyer.com/mbc/my/zanss.png" alt="" class="icon" v-if="Number(dataItemsT.isLike) === 1" />
						<span class="text">点赞</span>
					</div>
					<div class="icon-cont left" @click="shouCont(dataItemsT)">
						<img src="https://style.iambuyer.com/mbc/my/shou.png" alt="" class="icon" v-if="Number(dataItemsT.isFollow) === 0" />
						<img src="https://style.iambuyer.com/mbc/my/shous.png" alt="" class="icon" v-if="Number(dataItemsT.isFollow) === 1" />
						<span class="text">收藏</span>
					</div>
					<div class="icon-cont left" @click="zhuanCont(dataItemsT)">
						<img src="https://style.iambuyer.com/mbc/my/fen.png" alt="" class="icon" v-if="Number(dataItemsT.isShare) === 0" />
						<img src="https://style.iambuyer.com/mbc/my/fens.png" alt="" class="icon" v-if="Number(dataItemsT.isShare) === 1" />
						<span class="text">转发</span>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="count2" v-if="countType === '2'">
				<div class="count2-left left">
					<p class="p">阅读 {{ dataItemsT.pv }}</p>
				</div>
				<div class="count2-right left">
					<div class="likeShare-content2">
						<div class="icon-cont left" @click="zanCont(dataItemsT)">
							<img src="https://style.iambuyer.com/mbc/my/zan.png" alt="" class="icon" v-if="Number(dataItemsT.isLike) === 0" />
							<img src="https://style.iambuyer.com/mbc/my/zanss.png" alt="" class="icon" v-if="Number(dataItemsT.isLike) === 1" />
							<span class="text">{{ dataItemsT.likeCn }}</span>
						</div>
						<div class="icon-cont left" @click="shouCont(dataItemsT)">
							<img src="https://style.iambuyer.com/mbc/my/shou.png" alt="" class="icon" v-if="Number(dataItemsT.isFollow) === 0" />
							<img src="https://style.iambuyer.com/mbc/my/shous.png" alt="" class="icon" v-if="Number(dataItemsT.isFollow) === 1" />
							<span class="text">{{ dataItemsT.followCount }}</span>
						</div>
						<div class="icon-cont left"  @click="zhuanCont(dataItemsT)">
							<img src="https://style.iambuyer.com/mbc/my/fen.png" alt="" class="icon" v-if="Number(dataItemsT.isShare) === 0" />
							<img src="https://style.iambuyer.com/mbc/my/fens.png" alt="" class="icon" v-if="Number(dataItemsT.isShare) === 1" />
							<span class="text">{{ dataItemsT.shareCnt }}</span>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
// import { Toast } from 'mint-ui';
export default {
	components: {},
	props: [
		'routeParam',
		'disabled',
		'basicData',
		'scrollTop',
		'defaultImg',
		'dataList',
		'indexNum',
		'tabYItemsIndexs',
		'countType'
	],
	data () {
		return {
			dataItemsT: null,
			mode: '-1' // 类型
		};
	},
	created () {
		this.dataItemsT = this.dataList;
		console.log(this.dataItemsT.instrucCustType, 'this.dataItemsT');
		if (Number(this.dataItemsT.instrucCustType) === 2) { // 供应
			this.mode = '0';
		} else if (Number(this.dataItemsT.instrucCustType) === 1) { // 定制
			this.mode = '0';
		} else if (Number(this.dataItemsT.instrucCustType) === 3) { // 咨询
			this.mode = '2';
		} else if (Number(this.dataItemsT.instrucCustType) === 0) { // FAQ 售后
			this.mode = '0';
		}
	},
	watch: {},
	methods: {
		zanCont (e) {
			console.log(e);
			if (e.isLike === '0') { // 点赞
				axios.get(this.api2 + '/rest-rp/like/submit?userId=' + this.routeParam.lookUserId + '&modelId=' + e.instrucId + '&type=' + this.mode)
					.then(response => {
						console.log(response);
						if (response.data.ret === '200') {
							console.log(response.data);
							this.dataItemsT.isLike = '1';
							this.dataItemsT.likeCn = this.dataItemsT.likeCn + 1;
						} else if (response.data.ret === '202') {
							console.log('202登录');
							this.postMessage('202登录');
						} else if (response.data.ret === '400') {
						} else {
						}
					})
					.catch(error => {
						console.log(error, '网络繁忙，请稍后');
				});
			} else if (e.isLike === '1') { // 取消点赞
				axios.get(this.api2 + '/rest-rp/like/cancel?userId=' + this.routeParam.lookUserId + '&modelId=' + e.instrucId + '&type=' + this.mode)
					.then(response => {
						console.log(response);
						if (response.data.ret === '200') {
							console.log(response.data);
							this.dataItemsT.isLike = '0';
							this.dataItemsT.likeCn = this.dataItemsT.likeCn - 1;
						} else if (response.data.ret === '202') {
							console.log('202登录');
							this.postMessage('202登录');
						} else if (response.data.ret === '400') {
						} else {
						}
					})
					.catch(error => {
						console.log(error, '网络繁忙，请稍后');
				});
			}
		},
		shouCont (e) {
			console.log(e);
			if (e.isFollow === '0') {
				axios.get(this.api2 + '/rest-rp/follow/user?userId=' + this.routeParam.lookUserId + '&modelId=' + e.instrucId + '&type=' + this.mode)
					.then(response => {
						console.log(response);
						if (response.data.ret === '200') {
							console.log(response.data);
							this.dataItemsT.isFollow = '1';
							this.dataItemsT.followCount = this.dataItemsT.followCount + 1;
						} else if (response.data.ret === '202') {
							console.log('202登录');
							this.postMessage('202登录');
						} else if (response.data.ret === '400') {
						} else {
						}
					})
					.catch(error => {
						console.log(error, '网络繁忙，请稍后');
				});
			} else if (e.isFollow === '1') {
				axios.get(this.api2 + '/rest-rp/follow/cancelUser?userId=' + this.routeParam.lookUserId + '&modelId=' + e.instrucId + '&type=' + this.mode)
					.then(response => {
						console.log(response);
						if (response.data.ret === '200') {
							console.log(response.data);
							this.dataItemsT.isFollow = '0';
							this.dataItemsT.followCount = this.dataItemsT.followCount - 1;
						} else if (response.data.ret === '202') {
							console.log('202登录');
							this.postMessage('202登录');
						} else if (response.data.ret === '400') {
						} else {
						}
					})
					.catch(error => {
						console.log(error, '网络繁忙，请稍后');
				});
			}
		},
		zhuanCont (e) {
			console.log(e);
			this.postMessage('转发');
		}
	}
};
</script>

<style scoped>
.module-content {
	position: relative;
	width: 660px;
}
.count1 {
	position: relative;
	width: 100%;
	height: 40px;
}
.count2 {
	position: relative;
	width: 100%;
	height: 40px;
	background: #f9f9f9;
}
.count2-left {
	position: relative;
	width: 30%;
}
.count2-left > p {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 40px;
	padding-left: 15px;
}
.count2-right {
	position: relative;
	width: 70%;
}
.likeShare-content1 {
	position: relative;
	width: 100%;
}
.likeShare-content2 {
	position: relative;
	float: right;
}
.icon-cont {
	position: relative;
	width: 50px;
	margin-right: 30px;
}
.icon-cont > img {
	position: relative;
	width: 12px;
	height: 12px;
}
.text {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #2e2e30;
	text-align: center;
	line-height: 40px;
}
</style>
