<template>
    <div class="likeShare-content">
      <div class="icon-cont left">
        <img src="https://style.iambuyer.com/mbc/my/zan.png" alt="" class="icon">
        <span class="text">点赞</span>
      </div>
      <div class="icon-cont left">
        <img src="https://style.iambuyer.com/mbc/my/shou.png" alt="" class="icon">
        <span class="text">点赞</span>
      </div>
      <div class="icon-cont left">
        <img src="https://style.iambuyer.com/mbc/my/fen.png" alt="" class="icon">
        <span class="text">点赞</span>
      </div>
      <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: 'likeShare'
    };
</script>

<style scoped>
  .likeShare-content{
    position: relative;
    width: 100%;
  }
  .icon-cont{
    position: relative;
    width: 50px;
    margin-right: 30px;
  }
  .icon-cont>img{
    position: relative;
    width: 12px;
    height: 12px;
  }
  .text{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #2E2E30;
    text-align: center;
    line-height: 12px;
  }
</style>
