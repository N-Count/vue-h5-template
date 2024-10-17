<template>
  <!-- 用户自定义图例下拉选择功能 -->
  <div class="jgy-chart-custom-legend" :style="legendPositionStyle">
    <div class="legend-inner-box" :style="legendAlignStyle">
      <div>
        <slot></slot>
      </div>
      <div class="legend-body">
        <div
          class="single-legend"
          v-for="(item, index) in legendList"
          :key="item.id"
          @click="legendSelect(item, index)"
        >
          <span
            class="legend-type"
            @click.stop="legendSelect(item, index)"
            :mydata="item.state"
            :style="{ 'background-color': item.state ? legendColors[index] : inactive }"
          ></span>
          <span>
            <span
              v-if="item.dataType === 'string'"
              class="legend-data"
              :style="{ color: !item.state ? inactive : '' }"
            >
              {{ item.data }}
            </span>
            <span v-if="item.dataType === 'list'" class="legend-data">
              <LegendSelect
                :dataList="item.data"
                v-bind="$attrs"
                v-on="$listeners"
                :legendState="item.state"
                ref="customLegend"
              ></LegendSelect>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import LegendSelect from './legendSelec.vue'
export default {
  components: { LegendSelect },
  props: {
    legendOption: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      legendList: [],
      legendColors: [],
      // 取消图例颜色
      inactive: '',
      // 图例取消选中颜色对象
      inactiveColorObj: {
        lightTheme: '#d2d2d2',
        darkTheme: '#b8b8b8'
      }
    }
  },
  computed: {
    // 图例位置偏移样式
    legendPositionStyle() {
      let style = ''
      let { top = 0, bottom = 0 } = this.legendOption
      style = `top:${top}px;bottom:${bottom}px`
      return style
    },
    legendAlignStyle() {
      let style = ''
      let { align = 'auto', right = 0, left = 0 } = this.legendOption
      let alignVal = ''
      switch (align) {
        case 'left':
          alignVal = 'flex-start'
          break
        case 'right':
          alignVal = 'flex-end'
          break
        default:
          alignVal = 'space-between'
          break
      }
      style = `justify-content:${alignVal};padding-left:${left}px;padding-right:${right}px`
      return style
    }
  },
  watch: {
    legendOption: {
      handler: function (val) {
        if (val?.legendData?.length > 0) {
          let copyVal = cloneDeep(val.legendData)
          this.$set(this, 'legendList', copyVal)
        }
      },
      immediate: true,
      deep: true
    },
    '$store.state.d2admin.theme.activeName': {
      handler: function (val) {
        this.legendColors = this.legendOption.legendColors?.length
          ? this.legendOption.legendColors
          : this.constant.dataLegendColorList[val]
        this.inactive = this.inactiveColorObj[val]
      },
      immediate: true
    }
  },
  methods: {
    legendSelect(val, index) {
      this.$set(this.legendList[index], 'state', !val.state)
      let emitData = {}
      if (val.dataType === 'list') {
        let refsList = this.$refs.customLegend
        if (refsList.length > 0) {
          let { label = '' } = refsList[0].getSelectedLabel()
          emitData = {
            state: val.state,
            name: label
          }
        }
      } else {
        emitData = {
          name: val.data,
          state: val.state
        }
      }
      this.$emit('legendSelect', emitData)
    }
  },
  mounted() {},
  created() {}
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.jgy-chart-custom-legend {
  position: absolute;
  height: 20px;
  width: 100%;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .legend-inner-box {
    width: 100%;
    display: flex;
    justify-content: left;
  }

  .legend-body {
    display: flex;
    align-items: center;
    .single-legend {
      display: flex;
      align-items: center;
      margin-right: 12px;
      font-size: 12px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }

      .legend-type {
        height: 2px;
        width: 16px;
        margin-right: 4px;
        border-radius: 1px;
      }

      .legend-data {
        color: $--jy-color-text-regular;
      }
    }
  }
}
</style>
