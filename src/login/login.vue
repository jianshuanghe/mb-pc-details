<template>
  <div class="login-content">
    <div class="loginBar">
      <loginBar></loginBar>
    </div>
    <div class="loginContent">
      <loginContent></loginContent>
    </div>
  </div>

</template>

<script>
    import loginBar from './components/loginBar';
    import loginContent from './components/loginContent';
    export default {
        name: 'login',
        components: {
            loginBar,
            loginContent
        },
        created () {
            this.$emit('footer', false);
        }
    };
</script>

<style scoped>

</style>
