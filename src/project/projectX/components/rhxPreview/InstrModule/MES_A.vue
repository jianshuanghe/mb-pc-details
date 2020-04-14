<template>
	<div class="module-content">
		<div class="mI-cont">
			<div class="moduleTitle">
				<div class="titletype2">{{ title }}</div>
			</div>
			<div class="moduleContent-ms">{{ content }}</div>
		</div>
		<div class="mS-cont">
			<div class="datalist">
				<div class="mS-title">姓名</div>
				<div class="mS-input"><el-input v-model="dataList[0].userName"></el-input></div>
				<div class="line"></div>
			</div>
			<div class="datalist">
				<div class="mS-title">电话</div>
				<div class="mS-input"><el-input v-model="dataList[1].mobile"></el-input></div>
				<div class="line"></div>
			</div>
			<div class="datalist">
				<div class="mS-title">留言</div>
				<div class="mS-input"><el-input v-model="dataList[2].msgContent"></el-input></div>
				<div class="line"></div>
			</div>
		</div>
		<div class="submit" @click="postLeaveMassage">提交留言</div>
	</div>
</template>

<script>
import axios from 'axios';
var querystring = require('querystring');
export default {
	components: {},
	props: ['disabled', 'routeParam', 'basicData', 'scrollTop', 'defaultImg', 'dataItems', 'indexNum', 'tabYItemsIndexs'],
	data () {
		return {
			dataItem: this.dataItems,
			icon: {
				notSelected: 'https://style.iambuyer.com/img/icon/fenzu_0.png',
				selected: 'https://style.iambuyer.com/img/icon/fenzu_1.png',
				catalog_white: 'https://style.iambuyer.com/img/icon/fenzu_2.png'
			},
			iconTitle: '留言板',
			moduleImg: 'http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-01.jpg',
			type: 'MES_A',
			title: '直接留言',
			content: '如您有任何疑问或者想咨询业务相关，请在下方留言，我们会尽快给您反馈哦～',
			dataList: [
				{
					title: '姓名',
					userName: ''
				},
				{
					title: '电话',
					mobile: ''
				},
				{
					title: '留言',
					msgContent: ''
				}
			]
		};
	},
	created () {},
	watch: {
		scrollTop: {
			handler (a, b) {},
			deep: true
		}
	},
	mounted () {
		console.log(this.routeParam, '留言模块基数据链接参数');
		console.log(localStorage.getItem('landRegist'), '-----------localStorage.getItem-----------');
		if (this.routeParam.sourceTemp !== 0) {
			if (localStorage.getItem('landRegist')) {
				if (localStorage.getItem('UserData')) {
					let UserData = JSON.parse(localStorage.getItem('UserData'));
					console.log(JSON.parse(UserData.data), '-----------UserData------------');
					this.dataList[1].mobile = JSON.parse(UserData.data).userPhone;
					this.dataList[0].userName = JSON.parse(UserData.data).nickname;
				}
			}
		}
	},
	methods: {
		tapIndex (e) {},
		// 带点击标题返回
		tapTitleContent (e) {},
		postMassage () {
			if (this.dataList[0].userName === '') {
				this.$message({
					message: '姓名不能为空!',
					center: true,
					offset: 300
				});
				return false;
			}
			if (this.dataList[1].mobile === '') {
				this.$message('联系电话不能为空！');
				return false;
			}
			if (!/^1[345789]\d{9}$/.test(this.dataList[1].mobile)) {
				// 联系电话不能为空
				this.$message('联系电话格式有误');
				return false;
			}
			if (this.dataList[2].msgContent === '') {
				this.$message('留言内容不能为空！');
				return false;
			}
			let params = {
				instrucId: this.routeParam.instrucId, // id
				mobile: this.dataList[1].mobile, // 电话
				userName: this.dataList[0].userName, // 姓名
				msgContent: this.dataList[2].msgContent, // 留言内容
				userId: this.routeParam.lookUserId
			};
			axios
				.post(this.api2 + '/rest-rp/msg/add', querystring.stringify(params))
				.then(response => {
					console.log(response);
					if (response.data === 'success') {
						this.$message('留言成功！');
					} else {
						this.$message('网络繁忙，请稍后');
					}
				}).catch(error => {
					console.log(error);
					this.$message('网络繁忙，请稍后');
				});
		},
		postLeaveMassage () {
			if (this.routeParam.sourceTemp === 0) {
				this.$message('模板不支持直接留言哦，快去创建您的产品说明书吧');
				return false;
			} else {
				if (this.routeParam.creatorId === this.routeParam.lookUserId) {
					this.$message({
						message: '本人创建，不能留言！',
						center: true,
						offset: 300
					});
					return false;
				} else {
					if (this.routeParam.instrucState !== '1') {
						this.$message('当前说明书未发布，不能留言！');
						return false;
					} else {
						this.postMassage();
					}
				}
			}
		}
	}
};
</script>

<style scoped>
.module-content {
	position: relative;
	width: 660px;
}
.moduleContent-ms {
	position: relative;
	margin: 0 15px;
	font-family: PingFangSC-Regular;
	font-size: 13px;
	color: #9b9b9b;
	letter-spacing: 0;
	text-align: justify;
	line-height: 18px;
}
.mS-cont {
	position: relative;
	width: 100%;
	padding: 20px 15px;
}
.datalist {
	position: relative;
	width: 100%;
}
.mS-title {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 14px;
	margin: 20px 0 0;
	font-weight: bold;
}
.mS-input {
	position: relative;
	width: 100%;
}
.el-input__inner {
	border: 0px solid #15d49f !important;
}
.submit {
	position: relative;
	background: #2e2e30;
	position: relative;
	width: 140px;
	height: 45px;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 45px;
	margin: 15px;
}
</style>
