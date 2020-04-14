<template>
    <div class="loginBar-content">
      <div class="loginBar-mb">
        <div class="logo left">
          <img :src="logo" alt="">
        </div>
        <div class="text left">
          <p class="login-p">| 立即登录</p>
        </div>
        <div class="clear"></div>
      </div>
    </div>
</template>

<script>
    import logo from '../img/logo.jpg';
    export default {
        name: 'loginBar',
        data () {
            return {
                logo: logo
            };
        }
    };
</script>

<style scoped>
  .loginBar-content{
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border-bottom: 1px solid #EFEFEF;
  }
  .loginBar-mb{
    position: relative;
    width: 1200px;
    margin: auto;
  }
  .logo {
    position: relative;
    width: 62px;
    height: 36.3px;
    margin-top: 16px;
  }
  .logo>img{
    width: 62px;
    height: 36.3px;
  }
  .text{
    position: relative;
    margin-left: 5px;
  }
  .login-p{
    position: relative;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #2E2E30;
    letter-spacing: 0;
    line-height: 69px;
  }
</style>
