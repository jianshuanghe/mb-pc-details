<template>
  <div class="register-content">
    <div class="register-mb right">
      <div class="top-mb"></div>
      <div class="register">
        <div class="items-border">
          <div class="phone"></div>
        </div>
        <div class="items-border">
          <div class="slider"></div>
        </div>
        <div class="items-border">
          <div class="verification"></div>
        </div>
        <div class="items-border">
          <div class="passWord"></div>
        </div>
        <div class="loginSwitch">
          <p class="switch-p">
            已有账号，
            <span class="colour-p">立即登录</span>
          </p>
        </div>
        <div class="loginBtn">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'register'
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
  .items-border{
    position: relative;
    width: 100%;
    height: 38px;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    border-radius: 4px;
    margin-top: 14px;
  }
  .loginSwitch{
    position: relative;
    width: 100%;
  }
  .switch-p{
    position: relative;
    width: 100%;
    text-align: right;
    ont-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9B9B9B;
    line-height: 38px;
  }
  .colour-p{
    color: #02C2A2;
  }
  .loginBtn{
    position: relative;
    width: 100%;
    height: 38px;
    background: #02C2A2;
    border-radius: 4px;
    border-radius: 4px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    line-height: 38px;
    margin-top: 20px;
  }
</style>
