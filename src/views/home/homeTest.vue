<template>
    <div class="index-container">
      <div class="warpper">
        <div class="top-log"></div>
      </div>
      <div class="box-content">
        <div v-for="(item, index) in list" :key="index" :title="item.name" :class="[item.bg, 'list-content']">
          <div class="content-text">{{ item.name }}</div>
          <div class="content-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { ref } from 'vue'
  // let lisst = ref([])
  export default {
    name: 'home-test',
    data() {
      return {
        list: [
          {
            name: '浦银市观',
            title: '当日速评',
            bg: 'bg-img0'
          },
          {
            name: '数据传递',
            title: '宏观数据追踪',
            bg: 'bg-img1'
          },
          {
            name: '策略判断',
            title: '策略观点',
            bg: 'bg-img2'
          },
          {
            name: '时政速评',
            title: '追踪热点事件',
            bg: 'bg-img3'
          },
          {
            name: '高频数据',
            title: '高频数据速查',
            bg: 'bg-img4'
          },
          {
            name: '交易情绪',
            title: '捕捉市场动态',
            bg: 'bg-img5'
          }
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .index-container {
    background: url(../../assets/images/首页.png) top no-repeat;
    background-size: contain;
    .box-content {
      // padding: 10px;
      min-height: 8rem;
      font-size: 24px;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .bg-img0 {
        background: url(../../assets/images/浦银市观.png) center no-repeat;
        background-size: cover;
      }
      .bg-img1 {
        background: url(../../assets/images/数据传递.png) center no-repeat;
        background-size: cover;
      }
      .bg-img2 {
        background: url(../../assets/images/策略判断.png) center no-repeat;
        background-size: cover;
      }
      .bg-img3 {
        background: url(../../assets/images/时政速评.png) center no-repeat;
        background-size: cover;
      }
      .bg-img4 {
        background: url(../../assets/images/高频数据.png) center no-repeat;
        background-size: cover;
      }
      .bg-img5 {
        background: url(../../assets/images/交易情绪.png) center no-repeat;
        background-size: cover;
      }
      .list-content {
        margin: 0.2rem;
        width: calc(50% - 0.4rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        border-radius: 15px;
        .content-text {
          text-indent: 20px;
          text-align: left;
          font-size: 24px;
        }
        .content-title {
          
          text-indent: 20px;
          text-align: left;
          font-size: 14px;
        }
      }
    }
  
    .warpper {
      padding: 0.5rem;
      height: 60px;
      // background: #fff;
      .top-log {
        margin-top: 25px;
        height: 100%;
        width: 200px;
        background: url('../../assets/images/浦银理财logo.png') no-repeat;
        background-size: contain;
      }
      .demo-home__title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 6px;
        font-size: 56px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
        img {
          width: 64px;
        }
        span {
          margin-left: 16px;
          font-weight: 500;
        }
      }
      .demo-home__desc {
        text-align: center;
        margin: 0 0 20px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 28px;
      }
    }
  }
  </style>
  