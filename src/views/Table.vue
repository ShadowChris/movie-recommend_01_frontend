<template>
  <el-container>
    <el-aside width="200px">
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="Name"
        label="算法名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="MSE"
        label="MSE"
        width="180">
    </el-table-column>
    <el-table-column
        prop="RMSE"
        label="RMSE">
    </el-table-column>
  </el-table>
    </el-aside>

    <el-main>
  <div class="psgBarChart" ref="psgBarChart"></div>
      </el-main>
  </el-container>
</template>

<script>
import global_variable from "@/utils/global_variable";
import * as echarts from 'echarts'



export default {

  data() {
    return {
      tableData: [{
        Name: '基于内容的推荐算法',
        MSE: '0.96124462',
        RMSE: '0.98043083'
      }, {
        Name: '协同过滤推荐算法',
        MSE: '1.255092442',
        RMSE: '1.12030908'
      }, {
        Name: '矩阵分解推荐算法',
        MSE: '0.95787807',
        RMSE: '0.97871245'
      }]
    }
  },
  mounted() {
    let barOption = {
      // 设置柱状图的位置
      grid: {
        // 距离左方轴数值
        x: 248,
        // y:200,
        x2: 264,
        // 距离下方轴数值
        // y2: 120,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['眼要花了', '眼要花了', '眼要花了'],
        // boundaryGap: false,
        // 刻度上字体的样式
        axisLabel: {
          padding: [34, 0, 0, 0],
          fontSize: 60,
          color: '#fff',
        },
        // x轴的样式
        axisLine: {
          show: true,
          lineStyle: {
            color: '#999',
            width: 10
          }
        }
      },
      yAxis: {
        type: 'value',
        // 不展示y轴
        show: false,
        // 不展示分割线
        splitLine: {
          show: false
        },

      },
      series: [
        {
          data: [7, 6, 5],
          type: 'bar',
          //   柱子的宽度
          barWidth: 100,
          //   柱子的颜色
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#ECBD50' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(236, 189, 80, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          //  对应数值展示在柱子中间
          label: {
            show: true,
            position: 'inside',
            fontSize:60,
            color:'#fff'
          },

        }
      ]
    };
    let barChart = echarts.init(this.$refs.psgBarChart);
    barChart.setOption(barOption)
  }

}

</script>

<style >
.psgBarChart {
  width: 6000px;
  height: 500px;
  background-color: pink;
}
</style>