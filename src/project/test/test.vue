<template>
  <div class="test">
<!--    <headerMb></headerMb>-->
<!--    <footerMb></footerMb>-->
  </div>
</template>

<script>
    import headerMb from '@/components/common/pages/header/header';
    import footerMb from '@/components/common/pages/footer/footer';
    export default {
        name: 'test',
        components: {
            headerMb,
            footerMb
        },
        created () {
            this.$emit('footer', false);
        }
    };
</script>

<style scoped>

</style>
