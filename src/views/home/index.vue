<template>
  <div class="home">
    首页
    <br>
    <van-button @click="btn" type="primary">查看echarts-demo</van-button>
    <br>
    <van-button @click="homeClick" type="primary">查看首页demo</van-button>
    <br>
    <van-button @click="loginClick" type="primary">测试按钮</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  data() {
    return {}
  },

  mounted() {},
  methods: {
    btn() {
      this.$router.push({
        path: '/ehcarts-demo'
      })
    },
    homeClick() {
      this.$router.push({
        path: '/home-test'
      })
    },
    loginClick() {
      login({
        account: '',
        authCode: '',
        authCodeToken: '',
        continueLoginFlag: '',
        deviceId: '95YEBVimOq3U9dqhYO2MgwUkVfJbvqOt',
        handlerBusinessError: true,
        loginMethod: '',
        loginPwd:
          'fTluyFTd1Mq7XDqniIi+QpVfx5g7eGaI7gUGV/vpa5vxQ+kn/4ouvTY0a1FJyssCX3kMRIpyp6vCAZTMBFIkGvDaqFO6WszwKAxaqzJh/1Y9Brc4Lpeg6KOA72XGMuu+p/+MVlPlztxFs3vqS9JQNx3umIP6gW+b8K9wXx/iaWE='
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
