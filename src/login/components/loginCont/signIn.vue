<template>
  <div class="signIn">
    <div class="register-mb right">
      <div class="top-mb"></div>
      <div class="cont-mb">
        <codeSign v-if="false"></codeSign>
        <passWordSign v-if="false"></passWordSign>
        <scanSign></scanSign>
      </div>
    </div>
  </div>
</template>

<script>
    import codeSign from './signType/codeSign';
    import passWordSign from './signType/passWordSign';
    import scanSign from './signType/scanSign';
    export default {
        name: 'signIn',
        data () {
            return {
            };
        },
        components: {
            codeSign,
            passWordSign,
            scanSign
        }
    };
</script>

<style scoped>
  .register-mb{
    position: relative;
    width: 280px;
  }
  .top-mb{
    position: relative;
    width: 100%;
  }
</style>
