
export default [
  {
    name: 'qb-text',
    id: '1',
    label: '文本',
    icon: 'icon-text',
    props: {
      text: '文本内容',
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 5,
    colSpan: 2,
  },
  {
    name: 'qb-image',
    id: '2',
    label: '图片',
    icon: 'icon-image1',
    props: {
      src: 'https://avatars.githubusercontent.com/u/59641156?v=4',
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-chart',
    id: '3',
    label: '柱状图',
    icon: 'icon-barchart',
    props: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'bar',
          },
          {
            type: 'bar',
          },
          {
            type: 'bar',
          },
        ],
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
      },
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-chart',
    id: '4',
    label: '折线图',
    icon: 'icon-linechart',
    props: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'line',
          },

        ],
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
      },
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-chart',
    id: '5',
    label: '扇形图',
    icon: 'icon-piechart',
    props: {
      option: {
        dataset: {
          source: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: [0, 50],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-iframe',
    id: '6',
    label: '嵌入页',
    icon: 'icon-creditcard',
    props: {
      src: 'https://blog.csdn.net/weixin_47030180',
    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 30,
    colSpan: 3,
  },
]