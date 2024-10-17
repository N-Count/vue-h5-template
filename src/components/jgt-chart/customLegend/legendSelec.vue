<template>
  <span>
    <span :class="!legendState ? `${$store.state.d2admin.theme.activeName}-color` : ''">{{
      getSelectedLabel().label
    }}</span>
    <JyTooltip
      ref="customSelTooltip"
      :disabled="tpDisabled"
      content="换个指数看看表现~"
      placement="top"
      popper-class="select-tooltip-style"
    >
      <JySelect
        v-model="legendVal"
        @change="legendChange"
        style="width: 24px"
        :popper-append-to-body="false"
        popper-class="info-new-select"
      >
        <div class="info-option">
          <JyOption
            v-for="cItem in optionList"
            :key="cItem.id"
            :label="cItem.label"
            :value="cItem.id"
          >
          </JyOption>
        </div>
      </JySelect>
    </JyTooltip>
  </span>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  components: {},
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    // 图例状态
    legendState: {
      type: Boolean,
      default: true
    },
    // 默认选中的值
    legendDefaultVal: {
      type: Object,
      default: () => ({})
    },
    // 是否展示tooltip
    showTooltip: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  data() {
    return {
      optionList: [],
      legendVal: '',
      tpDisabled: false
    }
  },
  watch: {
    dataList: {
      handler: function (val) {
        if (val.length > 0) {
          this.optionList = cloneDeep(val)
          if (this.legendDefaultVal.id) {
            this.legendVal = this.legendDefaultVal.id
          } else {
            this.legendVal = this.optionList[0].id
          }
        }
      },
      immediate: true,
      deep: true
    },
    showTooltip: {
      handler: function (val) {
        this.tpDisabled = val
      },
      immediate: true
    }
  },
  methods: {
    legendChange(val) {
      let findObj = this.optionList.find(item => item.id === val)
      let res = {
        label: findObj.label,
        id: findObj.id
      }
      this.$emit('legendSelectChange', res)
    },
    // 获取选中的指标数据
    getSelectedLabel() {
      let findObj = this.optionList.find(item => item.id === this.legendVal)
      return {
        label: findObj.label,
        id: findObj.id
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.tpDisabled) {
        this.$refs.customSelTooltip && this.$refs.customSelTooltip.show()
        setTimeout(() => {
          this.$refs.customSelTooltip && this.$refs.customSelTooltip.hide()
          this.tpDisabled = true
        }, 5000)
      }
    })
  },
  created() {}
}
</script>
<style lang="scss" scoped>
::v-deep .jy-input {
  input {
    display: none;
  }
  &__inner {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border: none;
    padding: 0;
    color: $--jy-color-text-regular;
  }

  &__suffix {
    height: 20px;
    line-height: 20px;
    top: -14px;
    right: 3px;
    &:hover {
      border-color: $--jy-color-primary !important;
    }
  }
  &__icon {
    line-height: 20px;
    width: 18px;
    font-size: 12px;
    font-weight: 800;
    border-color: $--jy-color-text-primary;
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 4px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid;
    }
    &:hover {
      color: $--jy-color-primary !important;
    }
  }
}
// 浅色取消选中样式
.lightTheme-color {
  // ::v-deep .jy-input__inner {
  color: #d2d2d2;
  // }
}
// 深色取消选中样式
.darkTheme-color {
  // ::v-deep .jy-input__inner {
  color: #b8b8b8;
  // }
}
</style>
<style lang="scss">
.info-new-select {
  left: -30px !important;
}
.select-tooltip-style {
  margin-bottom: 20px !important;
}
</style>
