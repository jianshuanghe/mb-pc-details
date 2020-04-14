<template>
<div id="app" class="Home-box-content">
<!--    <headerMb v-if="header_show"></headerMb>-->
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
<!--    <footerMb v-if="footer_show"></footerMb>-->
    <div >
      <loading :show="loadingShow" text="请稍等..."></loading>
    </div>
  </div>
</template>

<script>
import { Loading } from 'vux';
import { mapMutations, mapGetters } from 'vuex';
import headerMb from '@/components/common/pages/header/header';
import footerMb from '@/components/common/pages/footer/footer';
import { isWeiXin } from './utils/browserType.js';
export default {
  name: 'app',
  components: {
      headerMb,
      footerMb,
    Loading
  },
  data () {
    return {
      header_show: true,
      footer_show: true,
      loadingShow: false
    };
  },
  created () {
    // localStorage.clear(); // 清除缓存
    if (!localStorage.getItem('searchHistoryData')) {
      let searchHistoryData = []; // 设置搜索历史
      localStorage.setItem('searchHistoryData', JSON.stringify(searchHistoryData)); // 搜索历史数据
      this.$store.commit('setFindBusinessSearchHistoryData', searchHistoryData); // 更新vuex setFindBusinessSearchHistoryData
    } else {
      let historyList = JSON.parse(localStorage.getItem('searchHistoryData'));
      this.$store.commit('setFindBusinessSearchHistoryData', historyList); // 更新vuex setFindBusinessSearchHistoryData
    }
    isWeiXin();
  },
  computed: {
    ...mapGetters(['QUICKNAV', 'LOADING'])
  },
  watch: {
    LOADING: {
      handler (a, b) {
        this.loadingShow = a.loadingShow; // 侦听loading
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      setFindBusinessSearchHistoryData: 'setFindBusinessSearchHistoryData'
    }),
    // 是否显示头部
    header (bool) {
        this.header_show = bool;
    },
    // 是否显示底部
    footer (bool) {
        this.footer_show = bool;
    }
  }
};
</script>

<style>
  .Home-box-content{}
</style>
