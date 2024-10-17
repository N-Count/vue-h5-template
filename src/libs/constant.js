/**
 * 全局常量
 * @example 代码翻译为文字：constant.custType['1']
 * @example 文字翻译为代码：constant.convert(custType, '个人')
 */
const constant = {
  // 交易数据看板宫格图配色范围表
  gridColor: {
    darkTheme: [
      {
        '-4': 'rgba(43, 83, 214, 0.5)'
      },
      {
        '-3': 'rgba(43, 83, 214, 0.4)'
      },
      {
        '-2': 'rgba(43, 83, 214, 0.3)'
      },
      {
        '-1': '#3B3B3B'
      },
      {
        0: '#3B3B3B'
      },
      {
        1: '#3B3B3B'
      },
      {
        2: 'rgba(221, 34, 0, 0.3)'
      },
      {
        3: 'rgba(221, 34, 0, 0.4)'
      },
      {
        4: 'rgba(221, 34, 0, 0.5)'
      }
    ],
    lightTheme: [
      {
        '-4': 'rgba(43, 83, 214, 0.35)'
      },
      {
        '-3': 'rgba(43, 83, 214, 0.2)'
      },
      {
        '-2': 'rgba(43, 83, 214, 0.05)'
      },
      {
        '-1': '#e8e9eb'
      },
      {
        0: '#e8e9eb'
      },
      {
        1: '#e8e9eb'
      },
      {
        2: 'rgba(221, 34, 0, 0.05)'
      },
      {
        3: 'rgba(221, 34, 0, 0.2)'
      },
      {
        4: 'rgba(221, 34, 0, 0.35)'
      }
    ]
  },
  // 默认样式rgba 配合this.util.hexToRgba使用
  rgbaColorList: {
    darkTheme: '#FFFFFF',
    lightTheme: '#000000'
  },
  borderColor: {
    darkTheme: '#181818',
    lightTheme: '#ffffff'
  },
  columnColorList: {
    darkTheme: ['rgba(223,148,77,0.10)', 'rgba(223,77,77,0.80)'],
    lightTheme: ['rgba(223,148,77,0.10)', 'rgba(223,77,77,0.60)']
  },
  custType: {
    0: '机构',
    1: '个人',
    2: '产品'
  },
  scoreType: {
    1: '货基',
    2: '固收',
    3: '权益'
  },
  // 主题色配置
  mainColorLists: {
    darkTheme: '#FFA10A',
    lightTheme: '#EA5D3F'
  },
  // 图表X轴y轴刻度文字颜色
  lineNameColorLists: {
    darkTheme: '#FFFFFF',
    lightTheme: '#38383B'
  },
  // mini图表X轴y轴刻度文字颜色
  miniNameColorLists: {
    darkTheme: 'rgba(255, 255, 255, 0.4)',
    lightTheme: 'rgba(0, 0, 0, 0.4)'
  },
  // 图表X轴y轴颜色
  lineColorLists: {
    darkTheme: '#333333',
    lightTheme: '#E6E6E6'
  },
  // 图表X,y軸zoom border顏色
  dataZoomBorderColorLists: {
    darkTheme: '#EBD9B5',
    lightTheme: '#D2AE87'
  },
  // 图表zoom icon
  dataZoomIconList: {
    darkTheme: 'image://' + require('../assets/images/charts/handleIconBlack.png'),
    lightTheme: 'image://' + require('../assets/images/charts/handleIconWhite.png')
  },
  // 其他图表指标color
  dataLegendColorList: {
    darkTheme: [
      '#DC5356',
      '#F0CB69',
      '#5FB7E5',
      '#AB91C5',
      '#8EC3A7',
      '#E47476',
      '#81ADDC',
      '#5770CB',
      '#91CC79',
      '#FAB455',
      '#F44CA8',
      '#7684E1',
      '#3FA278',
      '#FF8452',
      '#9A61B2',
      '#E97EC8',
      '#F0B208',
      '#F56749',
      '#2BA5DC',
      '#45DB9B',
      '#FFA480',
      '#C29B9C',
      '#C89E2C',
      '#8DAFC1',
      '#9C65D3',
      '#4BC785',
      '#CB4F52',
      '#508AC8',
      '#889CE7',
      '#95B599',
      '#CA801D',
      '#D682B0',
      '#A7B0EB',
      '#47C590',
      '#D35D2D',
      '#9C10D8',
      '#C5128E',
      '#EAA928',
      '#F1927E',
      '#77C3E5'
    ],
    lightTheme: [
      '#DC5356',
      '#8CABE8',
      '#F0CB69',
      '#B08FD1',
      '#8EC3A7',
      '#FF9F46',
      '#5FB7E5',
      '#5770CB',
      '#91CC79',
      '#FAB455',
      '#F44CA8',
      '#7684E1',
      '#3FA278',
      '#FF8452',
      '#9A61B2',
      '#E97EC8',
      '#F0B208',
      '#F56749',
      '#2BA5DC',
      '#45DB9B',
      '#FFA480',
      '#C29B9C',
      '#C89E2C',
      '#8DAFC1',
      '#9C65D3',
      '#4BC785',
      '#CB4F52',
      '#508AC8',
      '#9E8FF6',
      '#95B599',
      '#CA801D',
      '#D682B0',
      '#A7B0EB',
      '#47C590',
      '#D35D2D',
      '#9C10D8',
      '#C5128E',
      '#EAA928',
      '#F1927E',
      '#77C3E5'
    ]
  },
  // 折线柱状图表指标color
  lineBarColorLists: {
    darkTheme: ['#66502B', '#6195FF', '#FF5E45', '#4AEC8E', '#FF8C3E', '#39E3FF'],
    lightTheme: ['#F56849', '#5A8EFA', '#FABB41', '#38D97C', '#FF8640', '#34D7F0']
  },
  // 雷达图背景
  radarBgColorLists: {
    darkTheme: '#000000',
    lightTheme: '#FFFFFF'
  },
  // 其他图表tootip背景色
  tipBgColorLists: {
    darkTheme: 'rgba(255,255,255, 0.8)',
    lightTheme: 'rgba(56,56,59, 0.8)'
  },
  // 其他图表tootip文字颜色
  tipTextColorLists: {
    darkTheme: '#181818',
    lightTheme: '#ffffff'
  },
  // 折线图图表tootip背景色
  lineBarTipBgColorLists: {
    darkTheme: '#181818',
    lightTheme: '#ffffff'
  },
  // 折线图图表tootip文字颜色
  lineBarTipTextColorLists: {
    darkTheme: '#ffffff',
    lightTheme: '#38383b'
  },
  // 折线图图表tootip阴影
  tipBgShadow: {
    darkTheme: 'rgba(0,0,0,0.7)',
    lightTheme: 'rgba(0,0,0,0.1)'
  },
  // 引导线labelLine颜色
  labelLineColorLists: {
    darkTheme: '#4E4E50',
    lightTheme: '#C0C0C0'
  },
  // 柱状图hover背景色
  barHoverColor: {
    darkTheme: '#181818',
    lightTheme: '#F7F8FA'
  },
  // 柱状图点击背景色
  barClickColor: {
    darkTheme: '#F31515',
    lightTheme: '#FF3D3D'
  },
  // 标注线颜色：
  MarkLineColor: {
    darkTheme: '#838383',
    lightTheme: '#838383'
  },
  // 热力图颜色
  heatmapColor: {
    // 视觉映射组件颜色
    visualMapColor: {
      darkTheme: ['#57A5E5', '#1F6299', '#991F1F', '#E45757'],
      lightTheme: ['#52A1E2', '#CCE8FF', '#FFCCCC', '#E15B5B']
    },
    // 视觉映射组件颜色 光大图表二期新增颜色
    GDVisualMapColor: {
      darkTheme: ['#527D2F', '#1B330D', '#401313', '#A14545'],
      lightTheme: ['#A3D387', '#EEFFE4', '#FFE3E3', '#FFA1A1']
    },
    // 热力图间隔线
    intervalColor: {
      darkTheme: '#181818',
      lightTheme: '#FFFFFF'
    },
    // 视觉组件文字颜色
    visualMapTextColor: {
      darkTheme: 'rgba(255, 255, 255, 0.8)',
      lightTheme: 'rgba(0, 0, 0, 0.85)'
    },
    // 排名图视觉映射组件颜色
    rankVisualMapColor: {
      darkTheme: '#4B1616',
      lightTheme: '#FFF4F2'
    },
    rankLabelTop5Color: {
      darkTheme: '#F84848',
      lightTheme: '#F52D00'
    },
    rankLabelColor: {
      darkTheme: 'rgba(255, 255, 255, 0.9)',
      lightTheme: 'rgba(0, 0, 0, 0.9)'
    },
    visualMapBackgroundColor: {
      darkTheme: '#3B3B3B',
      lightTheme: '#F2F3F5'
    },
    emptyBgColor: {
      darkTheme: '#242424',
      lightTheme: '#F7F7FA'
    },
    itemValColor: {
      darkTheme: 'rgba(255, 255, 255, 0.9)',
      lightTheme: 'rgba(0, 0, 0, 0.6)'
    },
    GDItemValColor: {
      darkTheme: 'rgba(255, 255, 255, 0.6)',
      lightTheme: 'rgba(0, 0, 0, 0.6)'
    }
  },
  // 图表涨跌色
  chartRiseAndFall: {
    darkTheme: {
      rise: '#49241D',
      fall: '#1D3C27'
    },
    lightTheme: {
      rise: '#f3d7d5',
      fall: '#D2E9DD'
    }
  },
  // 三角形标注线标识
  markLineSymbol: {
    // 标注的图形 底部三角形，顶部无图形
    symbol: ['path://M952.32500001 130.67l-440.32500001 762.68300001-440.32500001-762.68300001z', 'none'],
    // 标注宽高
    symbolSize: [13, 12],
    // 标识线实线
    type: 'dashed',
    // 标识线颜色
    color: '#838383'
  },
  researchName: {
    1: '权益型',
    2: '固收型',
    3: '固收+型',
    4: '其他型'
  },
  changeCol: {
    0: 'no-data-num',
    1: 'decline-num',
    2: 'rise-num',
    3: 'zero-num'
  },
  // 基金经理标签
  fundManagerLabelEnum: {
    1: '最近看过',
    2: '想看',
    3: '热搜TOP10'
  },
  // 基金经理路演状态
  fundManagerRoadshowStatus: {
    1: '待开始',
    2: '直播中',
    3: '已结束',
    4: '即将开始'
  },
  // 路演数据来源平台
  roadshowSroucePlatform: {
    1: 'ipmc',
    2: 'cloud',
    3: 'yunji'
  },

  /**
   * 常量转换
   * @param {常量的键} type
   * @param {翻译的值} value
   * @param {默认值} defaultVal
   */
  convert(type, value, defaultVal = '--') {
    if (type && value) {
      let data = Object.entries(this[type]).filter(res => res[1] === value)
      return data.length > 0 ? data[0][0] : defaultVal
    }
    return defaultVal
  }
}

export default constant
