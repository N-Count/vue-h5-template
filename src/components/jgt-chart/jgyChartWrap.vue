<template>
  <div class="chart-wrap">
    <div class="chart-wrap_inner" :style="{ width: widthProps, height: heightProps }">
      <!-- 顶部标题 -->
      <div class="inner-top">
        <div class="title-box">
          <div class="title" v-if="title">{{ title }}</div>
          <!-- 默认提示信息 -->
          <el-tooltip
            v-if="description"
            :content="description"
            class="item"
            effect="dark"
            placement="top"
          >
            <div v-html="ToBreak(description)" slot="content"></div>
            <i class="iconfont fd-icon-wenanjieshi1"></i>
          </el-tooltip>
          <!-- 自定义提示信息 -->
          <slot name="showtips"></slot>
        </div>
        <!-- 操作区域 -->
        <div class="inner-handler" v-if="source.length">
          <!-- 自定义筛选 -->
          <slot name="select" v-if="showSelect"></slot>
          <!-- 显示数值 -->
          <span v-if="showCheck">
            <ElCheckbox :checked="checked" @change="changeCheck">显示数值</ElCheckbox>
          </span>
          <!-- 下载图片 -->
          <span class="show-download" v-if="showDownload" @click="downloadClick">
            <i class="icon iconfont icon-xiazaitupian"></i>
            <span>下载图片</span>
          </span>
        </div>
      </div>
      <!-- 图表区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 常量引入
import dayjs from 'dayjs'
// VueX引入
import { mapGetters } from 'vuex'
export default {
  name: 'jgyChartWrap',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    widthProps: {
      type: String,
      default: 'auto'
    },
    heightProps: {
      type: String,
      default: 'auto'
    },
    // 配置展示数值
    showCheck: {
      type: Boolean,
      default: false
    },
    // 配置展示数值
    loading: {
      type: Boolean,
      default: false
    },
    // 添加图表实例
    chartRef: {
      type: String,
      default: ''
    },
    // 无数据 隐藏操作
    source: {
      type: Array,
      default: () => []
    },
    // 下载操作控制
    showDownload: {
      type: Boolean,
      default: true
    },
    // 是否含有显示切换
    showSelect: {
      type: Boolean,
      default: false
    },
    // title文字描述
    description: {
      type: String,
      default: ''
    },
    // 是否需要拼接时间
    isNeedTime: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    '$store.state.d2admin.theme.activeName'(value) {
      this.backgroundColor = this.getbackgroundColor
    }
  },
  computed: {
    ...mapGetters('d2admin', {
      themeActiveSetting: 'theme/activeSetting'
    }),
    getbackgroundColor() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.radarBgColorLists[name]
      return colorVal
    }
  },
  data() {
    return {
      checked: false,
      lastClickTime: 0
    }
  },
  mounted() {
    this.backgroundColor = this.getbackgroundColor
  },
  methods: {
    ToBreak(val) {
      return val.replace(/\n/g, '<br/>')
    },
    // 下载图片
    downloadClick() {
      const currentTime = Date.now()
      if (currentTime - this.lastClickTime >= 1500) {
        const refs = this.$children?.length && this.$children[0]
        this.downloadCharts(this.title, refs)
        this.lastClickTime = currentTime
      }
    },
    // 切换显示数值
    changeCheck() {
      if (this.loading) return
      this.checked = !this.checked
      this.$emit('showValue', { check: this.checked, chartRef: this.chartRef })
    },
    /**
     * 下载图片
     * @param {*} imgName 下载图片名字
     * @param {*} charRefs ref
     * @param {*} sensorsMethods 神策埋点方法
     */
    downloadCharts(imgName = null, charRefs = undefined, sensorsMethods) {
      if (!imgName) return
      // const params = {
      //   button_name: '下载图片',
      //   indicate_name: imgName
      // }
      // this.$jgySensorsTrack[sensorsMethods](params)
      if (imgName && charRefs) {
        let blob = this.base64ToBlob(imgName, charRefs)
        let url = URL.createObjectURL(blob)
        let downloadElement = document.createElement('a')
        downloadElement.style.display = 'none'
        downloadElement.download =
          imgName + (this.isNeedTime ? dayjs(Date.now()).format('YYYY-MM-DD') : '') // 下载图片的名称
        downloadElement.href = url
        document.body.appendChild(downloadElement)
        downloadElement.click()
        document.body.removeChild(downloadElement)
        window.URL.revokeObjectURL(url)
      }
    },
    // img配置
    exportImg(charRefs) {
      // echart返回一个 base64 的 URL
      this.$nextTick()
      return (
        (charRefs?.$globalchar &&
          charRefs.$globalchar.getDataURL({
            pixelRatio: 2, // 导出的图片分辨率比率,默认是1
            backgroundColor: this.backgroundColor, // 图表背景色
            excludeComponents: [
              // 保存图表时忽略的工具组件,默认忽略工具栏
              'toolbox',
              'dataZoom'
            ],
            type: 'png' // 图片类型支持png和jpeg
          })) ||
        ''
      )
    },
    //  获取base64
    base64ToBlob(title, charRefs) {
      let dataZoom = []
      // 记录拖拽位置
      dataZoom = charRefs?.$globalchar && charRefs.$globalchar.getOption().dataZoom
      //  先追加chart标题
      charRefs?.$globalchar &&
        charRefs.$globalchar.setOption({
          title: {
            text: title
          },
          dataZoom
        })
      let img = this.exportImg(charRefs)
      //  拿到base64 将chart标题清空为初始化
      charRefs?.$globalchar &&
        charRefs.$globalchar.setOption({
          title: {
            text: ''
          },
          dataZoom
        })
      // 将base64转换blob
      try {
        let parts = img?.split(';base64,')
        let contentType = parts[0].split(':')[1]
        let raw = window.atob(parts[1])
        let rawLength = raw.length
        let uInt8Array = new Uint8Array(rawLength)
        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i)
        }
        return new Blob([uInt8Array], {
          type: contentType
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- <style lang="scss" scoped>
.chart-wrap {
  margin-top: 16px;
  &_inner {
    font-size: 14px;
    padding-top: 12px;
    border-radius: 2px;
    .inner-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title-box {
      display: flex;
      font-size: 16px;
      align-items: center;
    }
    .title {
      margin-right: 2px;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      // color: $--jy-color-text-regular;
    }
    .fd-icon-wenanjieshi1 {
      // @include color(A6);
      vertical-align: bottom;
      font-size: 14px;
      position: relative;
      z-index: 1;
      margin-right: 4px;
      cursor: pointer;
      &:hover {
        @include color(A3);
      }
    }
  }
  .inner-handler {
    display: flex;
    justify-content: center;
    align-items: center;
    @include color(A6);
    ::v-deep .el-checkbox {
      @include color(font-3);
      &:hover {
        cursor: pointer;
        .el-checkbox__inner {
          @include borderColor(main);
        }
        .el-checkbox__label {
          @include color(main);
        }
      }
      &__label {
        font-size: 12px;
        padding-left: 6px;
        vertical-align: middle;
        line-height: 16px;
      }
      &__inner {
        transform: translateY(0.5px) scale(0.9);
      }
      .is-checked {
        .el-checkbox__inner {
          @include backgroundColor(A2);
          @include borderColor(main);
          &::after {
            @include borderColor(main);
          }
        }
      }
    }
    // 下载图片
    & .show-download {
      margin-left: 16px;
      cursor: pointer;
      // color: $--jy-color-text-regular;
      & > span {
        font-size: 12px;
        font-weight: normal;
        vertical-align: middle;
      }
      & > i {
        position: relative;
        font-size: 14px;
        cursor: pointer;
        margin-right: 7px;
        vertical-align: middle;
      }
      &:hover span,
      &:hover i {
        color: $--jy-color-primary;
      }
    }
  }
}
</style> -->
