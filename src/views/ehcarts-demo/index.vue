<template>
  <div class="index-container">
    <div class="warpper">
      <h2 class="demo-home__desc">展示echarts</h2>
    </div>
    <div class="echarts_dom">
      <div>折线图</div>
      <JyChart
        v-if="true"
        :jgtChartData="jgtChartData"
        :zoomBeginDate="zoomBeginDate.viewStartDate"
        chartHeight="400px"
        id="demp-1"
      />
    </div>
    <div class="echarts_dom">
      <div>自定义折线分组走势图</div>
      <!-- 自定义折线分组走势图 -->
      <JgyChartCustom
        v-if="true"
        id="wealthChartCustomGroupLine"
        titleText="PMI生产端和各类型企业"
        :jgtChartData="jgtChartData1"
      />
    </div>
    <div class="echarts_dom">
      <div>雷达图</div>
      <!-- 雷达图组件 -->
      <RadarChart
        v-if="true"
        ref="wealthChartRadar"
        id="w22222"
        chartHeight="400px"
        :titleText="'PMI:制造业'"
        :zoomBeginDate="null"
        :radarIndicatorItems="radarIndicatorItems"
        :radarValues="chartData"
        :showDataSourceFrom="false"
        :isSetMaxAndMin="false"
        showSymbol="none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ehcarts-demo',
  data() {
    return {
      jgtChartData: [
        {
          indicatorCode: 'M0061614',
          indicatorName: '公开市场操作:货币净投放',
          indicatorSource: 'Wind',
          indicatorUnit: '亿元',
          indicatorFrequency: '2',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '1',
          rayType: '1',
          indicatorColor: '#739FFB',
          indicatorMaxVal: '13700.00',
          indicatoMinVal: '-17810.00',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            {
              date: '20190712',
              value: '-2200.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190719',
              value: '4600.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190726',
              value: '-4100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190802',
              value: '-500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190809',
              value: '-50.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190816',
              value: '3000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190823',
              value: '-300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190830',
              value: '-1300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190906',
              value: '-1000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190913',
              value: '1850.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190920',
              value: '900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20190927',
              value: '200.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191004',
              value: '-1500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191011',
              value: '-1900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191018',
              value: '240.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191025',
              value: '5600.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191101',
              value: '-5900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191108',
              value: '50.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191115',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191122',
              value: '3000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191129',
              value: '-3060.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191206',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191213',
              value: '50.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191220',
              value: '6300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20191227',
              value: '-360.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200103',
              value: '-5500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200110',
              value: '-500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200117',
              value: '6060.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200124',
              value: '5740.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200131',
              value: '-6000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200207',
              value: '11200.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200214',
              value: '-2800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200221',
              value: '-11185.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200228',
              value: '-2990.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200306',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200313',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200320',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200327',
              value: '10.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200403',
              value: '700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200410',
              value: '-700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200417',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200424',
              value: '10.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200501',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200508',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200515',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200522',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200529',
              value: '6700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200605',
              value: '-4500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200612',
              value: '2000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200619',
              value: '-1200.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200626',
              value: '3850.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200703',
              value: '-3925.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200710',
              value: '-2900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200717',
              value: '3300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200724',
              value: '-1650.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200731',
              value: '1150.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200807',
              value: '-2700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200814',
              value: '4900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200821',
              value: '1600.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200828',
              value: '2000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200904',
              value: '-4700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200911',
              value: '2300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200918',
              value: '-1400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20200925',
              value: '4800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201002',
              value: '-2500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201009',
              value: '-5000.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201016',
              value: '-1100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201023',
              value: '2200.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201030',
              value: '1900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201106',
              value: '-1900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201113',
              value: '2300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201120',
              value: '-2500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201127',
              value: '1300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201204',
              value: '-2300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201211',
              value: '-500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201218',
              value: '-900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20201225',
              value: '3650.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210101',
              value: '950.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210108',
              value: '-4650.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210115',
              value: '-390.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210122',
              value: '5980.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210129',
              value: '-2300.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210205',
              value: '960.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210212',
              value: '-500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210219',
              value: '-3400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210226',
              value: '-150.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210305',
              value: '-250.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210312',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210319',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210326',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210402',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210409',
              value: '-100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210416',
              value: '100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210423',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210430',
              value: '100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210507',
              value: '-400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210514',
              value: '400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210521',
              value: '-100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210528',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210604',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210611',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210618',
              value: '-100.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210625',
              value: '450.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210702',
              value: '250.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210709',
              value: '-600.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210716',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210723',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210730',
              value: '400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210806',
              value: '-400.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210813',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210820',
              value: '0.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210827',
              value: '1250.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210903',
              value: '-450.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210910',
              value: '-800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210917',
              value: '900.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20210924',
              value: '3700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211001',
              value: '2800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211008',
              value: '-2800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211015',
              value: '-4500.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211022',
              value: '2600.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211029',
              value: '6800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20211105',
              value: '-7800.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20221223',
              value: '7040.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20230929',
              value: '11570.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231013',
              value: '-17810.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231020',
              value: '7880.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231027',
              value: '13700.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231124',
              value: '4060.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231201',
              value: '-310.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231208',
              value: '-10590.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20231215',
              value: '1990.0000000000000000'
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: null,
              value: null
            },
            {
              date: '20240223',
              value: '-8410.0000000000000000'
            }
          ],
          recentDate: '20240223',
          recentVal: '-8410.00',
          preDate: '20231215',
          preVal: '1990.00',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: null
        }
      ],
      jgtChartData1: [
        {
          indicatorCode: 'M5206740',
          indicatorName: '中国:制造业PMI:小型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '50.30',
          indicatoMinVal: '46.40',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '47.9000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '47.8000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '47.3000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: '46.4000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: '50.3000000000000000' }
          ],
          recentDate: '20240430',
          recentVal: '50.30',
          preDate: '20240229',
          preVal: '46.40',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '小型企业'
        },
        {
          indicatorCode: 'M0017129',
          indicatorName: 'PMI:新出口订单',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '46.80',
          indicatoMinVal: '45.80',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '46.8000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '46.3000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '45.8000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: null }
          ],
          recentDate: '20231231',
          recentVal: '45.80',
          preDate: '20231130',
          preVal: '46.30',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '新出口订单'
        },
        {
          indicatorCode: 'M0017128',
          indicatorName: 'PMI:新订单',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '49.50',
          indicatoMinVal: '48.70',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '49.5000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '49.4000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '48.7000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: null }
          ],
          recentDate: '20231231',
          recentVal: '48.70',
          preDate: '20231130',
          preVal: '49.40',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '新订单'
        },
        {
          indicatorCode: 'M0017127',
          indicatorName: 'PMI:生产',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '50.90',
          indicatoMinVal: '50.20',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '50.9000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '50.7000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '50.2000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: null }
          ],
          recentDate: '20231231',
          recentVal: '50.20',
          preDate: '20231130',
          preVal: '50.70',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '生产'
        },
        {
          indicatorCode: 'M5206739',
          indicatorName: '中国:制造业PMI:中型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '50.70',
          indicatoMinVal: '48.70',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '48.7000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '48.8000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '48.7000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: '49.1000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: '50.7000000000000000' }
          ],
          recentDate: '20240430',
          recentVal: '50.70',
          preDate: '20240229',
          preVal: '49.10',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '中型企业'
        },
        {
          indicatorCode: 'M5206738',
          indicatorName: '中国:制造业PMI:大型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          indicatorValueType: 1,
          chartAsis: '1',
          chartType: '8',
          rayType: '1',
          indicatorColor: null,
          indicatorMaxVal: '50.70',
          indicatoMinVal: '50.00',
          peStr: null,
          quantileStr: null,
          isShortName: null,
          updateDate: null,
          items: [
            { date: '20231031', value: '50.7000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231130', value: '50.5000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20231231', value: '50.0000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240229', value: '50.4000000000000000' },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: null, value: null },
            { date: '20240430', value: '50.3000000000000000' }
          ],
          recentDate: '20240430',
          recentVal: '50.30',
          preDate: '20240229',
          preVal: '50.40',
          preYearDate: null,
          preYearVal: null,
          indicatorDisplayName: '大型企业'
        }
      ],
      chartData: [
        {
          date: '2023-12',
          dateVal: [
            '47.70',
            '47.90',
            '50.40',
            '45.80',
            '48.70',
            '45.60',
            '50.30',
            '50.50',
            '47.80',
            '51.50',
            '50.30',
            '50.70',
            '50.20',
            '47.70',
            '46.40',
            '55.20'
          ]
        },
        {
          date: '2023-11',
          dateVal: [
            '48.20',
            '48.10',
            '49.10',
            '46.30',
            '49.40',
            '43.50',
            '46.40',
            '48.00',
            '48.20',
            '50.70',
            '50.40',
            '49.10',
            '50.70',
            '48.00',
            '47.30',
            '54.20'
          ]
        },
        {
          date: '2023-10',
          dateVal: [
            '47.70',
            '48.00',
            '49.00',
            '46.80',
            '49.50',
            '44.50',
            '47.30',
            '49.00',
            '48.50',
            '52.60',
            '50.00',
            '48.70',
            '50.90',
            '48.20',
            '47.50',
            '55.90'
          ]
        },
        {
          date: '2022-12',
          dateVal: [
            '49.00',
            '44.80',
            '49.20',
            '44.20',
            '43.90',
            '46.80',
            '49.00',
            '49.10',
            '46.60',
            '51.60',
            '49.30',
            '49.20',
            '44.60',
            '47.10',
            '43.70',
            '54.70'
          ]
        }
      ],
      radarIndicatorItems: [
        {
          indicatorName: 'PMI:出厂价格',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '47.70',
          preDate: '2023-11',
          preVal: '48.20',
          preYearDate: '2022-12',
          preYearVal: '49.00',
          indicatorMaxVal: '49.00',
          indicatorMinVal: '47.70'
        },
        {
          indicatorName: 'PMI:从业人员',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '47.90',
          preDate: '2023-11',
          preVal: '48.10',
          preYearDate: '2022-12',
          preYearVal: '44.80',
          indicatorMaxVal: '48.10',
          indicatorMinVal: '44.80'
        },
        {
          indicatorName: 'PMI',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '50.40',
          preDate: '2024-02',
          preVal: '49.10',
          preYearDate: '2023-04',
          preYearVal: '49.20',
          indicatorMaxVal: '50.40',
          indicatorMinVal: '49.00'
        },
        {
          indicatorName: 'PMI:新出口订单',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '45.80',
          preDate: '2023-11',
          preVal: '46.30',
          preYearDate: '2022-12',
          preYearVal: '44.20',
          indicatorMaxVal: '46.80',
          indicatorMinVal: '44.20'
        },
        {
          indicatorName: 'PMI:新订单',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '48.70',
          preDate: '2023-11',
          preVal: '49.40',
          preYearDate: '2022-12',
          preYearVal: '43.90',
          indicatorMaxVal: '49.50',
          indicatorMinVal: '43.90'
        },
        {
          indicatorName: '中国:制造业PMI:在手订单',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '45.60',
          preDate: '2024-02',
          preVal: '43.50',
          preYearDate: '2023-04',
          preYearVal: '46.80',
          indicatorMaxVal: '46.80',
          indicatorMinVal: '43.50'
        },
        {
          indicatorName: '中国:制造业PMI:小型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '50.30',
          preDate: '2024-02',
          preVal: '46.40',
          preYearDate: '2023-04',
          preYearVal: '49.00',
          indicatorMaxVal: '50.30',
          indicatorMinVal: '46.40'
        },
        {
          indicatorName: '中国:制造业PMI:采购量',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '50.50',
          preDate: '2024-02',
          preVal: '48.00',
          preYearDate: '2023-04',
          preYearVal: '49.10',
          indicatorMaxVal: '50.50',
          indicatorMinVal: '48.00'
        },
        {
          indicatorName: 'PMI:产成品库存',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '47.80',
          preDate: '2023-11',
          preVal: '48.20',
          preYearDate: '2022-12',
          preYearVal: '46.60',
          indicatorMaxVal: '48.50',
          indicatorMinVal: '46.60'
        },
        {
          indicatorName: 'PMI:主要原材料购进价格',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '51.50',
          preDate: '2023-11',
          preVal: '50.70',
          preYearDate: '2022-12',
          preYearVal: '51.60',
          indicatorMaxVal: '52.60',
          indicatorMinVal: '50.70'
        },
        {
          indicatorName: '中国:制造业PMI:大型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '50.30',
          preDate: '2024-02',
          preVal: '50.40',
          preYearDate: '2023-04',
          preYearVal: '49.30',
          indicatorMaxVal: '50.40',
          indicatorMinVal: '49.30'
        },
        {
          indicatorName: '中国:制造业PMI:中型企业',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '50.70',
          preDate: '2024-02',
          preVal: '49.10',
          preYearDate: '2023-04',
          preYearVal: '49.20',
          indicatorMaxVal: '50.70',
          indicatorMinVal: '48.70'
        },
        {
          indicatorName: 'PMI:生产',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '50.20',
          preDate: '2023-11',
          preVal: '50.70',
          preYearDate: '2022-12',
          preYearVal: '44.60',
          indicatorMaxVal: '50.90',
          indicatorMinVal: '44.60'
        },
        {
          indicatorName: 'PMI:原材料库存',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '47.70',
          preDate: '2023-11',
          preVal: '48.00',
          preYearDate: '2022-12',
          preYearVal: '47.10',
          indicatorMaxVal: '48.20',
          indicatorMinVal: '47.10'
        },
        {
          indicatorName: 'PMI:进口',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2023-12',
          recentVal: '46.40',
          preDate: '2023-11',
          preVal: '47.30',
          preYearDate: '2022-12',
          preYearVal: '43.70',
          indicatorMaxVal: '47.50',
          indicatorMinVal: '43.70'
        },
        {
          indicatorName: '中国:制造业PMI:生产经营活动预期',
          indicatorSource: '国家统计局',
          indicatorUnit: '%',
          indicatorFrequency: '3',
          recentDate: '2024-04',
          recentVal: '55.20',
          preDate: '2024-02',
          preVal: '54.20',
          preYearDate: '2023-04',
          preYearVal: '54.70',
          indicatorMaxVal: '55.90',
          indicatorMinVal: '54.20'
        }
      ],
      zoomBeginDate: {
        indicatorGroupName: '资金投放图',
        indicatorGroupExplain: '-',
        indicatorList: [
          {
            indicatorId: '1455822904371253254',
            indicatorName: '公开市场操作:货币净投放',
            indicatorCode: 'M0061614'
          }
        ],
        viewStartDate: '2021-07-09',
        dataScope: '0'
      }
    }
  },

  mounted() {
    console.log(this.$route)
  },
  methods: {
    // 请求数据案例
    initData() {},
    // Action 通过 store.dispatch 方法触发
    doDispatch() {},
    goGithub() {}
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  .warpper {
    padding: 24px;
    background: #fff;
    width: 375px;
    box-sizing: border-box;

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
      font-size: 14px;
    }
  }

  .echarts_dom {
    background: #fff;
    width: 375px;
    height: 500px;
  }
}
</style>
