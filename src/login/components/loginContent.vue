<template>
    <div class="loginContent">
      <div class="loginImg-mb left">
        <img :src="loginMb" alt="">
      </div>
      <div class="loginCont-mb right">
        <register v-if="false"></register>
        <signIn></signIn>
      </div>
      <div class="clear"></div>
    </div>
</template>

<script>
    import loginMb from '../img/login-mb.jpg';
    import register from './loginCont/register';
    import signIn from './loginCont/signIn';
    export default {
        name: 'loginContent',
        data () {
            return {
                loginMb: loginMb
            };
        },
        components: {
            register,
            signIn
        }
    };
</script>

<style scoped>
  .loginContent{
    position: relative;
    width: 1200px;
    margin: auto;
    padding: 90px 90px;
  }
  .loginImg-mb{
    position: relative;
    width: 540px;
    height: 538px;
  }
  .loginImg-mb>img{
    position: relative;
    margin-left: 2px;
    width: 538px;
    height: 538px;
  }
  .loginCont-mb{
    position: relative;
    width: 380px;
    height: 520px;
    border-left: 2px solid #F5F5F5;
  }
</style>
