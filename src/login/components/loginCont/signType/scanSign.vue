<template>
  <div class="register-content">
    <div class="register-mb right">
      <div class="top-mb"></div>
      <div class="register">
        <div class="qrCode-mb">
          <div class="qrCode-border">
            <img :src="qrCode" alt="" class="">
          </div>
          <div class="qrCode-tips">
            <p class="tips-p">请打开陌拜小程序，点击“扫一扫“登录陌拜</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import qrCode from './../../../img/qrCode.jpg';
    export default {
        name: 'signIn',
        data () {
            return {
                qrCode: qrCode
            };
        }
    };
</script>

<style scoped>
  .register-content{
    position: relative;
    width: 100%;
    padding: 0 2px;
  }
  .register-mb{
    position: relative;
    width: 280px;
  }
  .top-mb{
    position: relative;
    width: 100%;
  }
  .register{
    position: relative;
    width: 100%;
  }
  .qrCode-mb{
    position: relative;
    width: 280px;
    height: 272px;
    background: #F9F9F9;
    padding: 39px 0 0 0;
  }
  .qrCode-border{
    background: #02C2A2;
    position: relative;
    width: 162px;
    height: 162px;
    margin: auto;
  }
  .qrCode-border>img{
    position: relative;
    width: 100%;
  }
  .qrCode-tips{
    position: relative;
    width: 100%;
    margin-top: 10px;
  }
  .tips-p{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #9B9B9B;
    text-align: center;
    line-height: 30px;
  }

</style>
