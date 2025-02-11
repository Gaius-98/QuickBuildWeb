
export default [
  {
    name: 'qb-text',
    id: '1',
    label: '文本',
    icon: 'icon-text',
    component: 'qb-text',
    props: {
      text: '文本内容',
    },
    style:{

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
    style:{

    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
    component: 'qb-image',
  },
  {
    name: 'qb-bar-chart',
    id: '3',
    label: '柱状图',
    icon: 'icon-barchart',
    component: 'qb-chart',
    style: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
      },
      series:{
        type:'bar'
      }
    },
    props:{
      dataset:'1',
      dimension:['title'],
      target:['value']
    },  
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-line-chart',
    id: '4',
    label: '折线图',
    icon: 'icon-linechart',
    component: 'qb-chart',
    style: {
      option: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
      },
      series:{
        type:'line'
      }
    },
    props:{
      dataset:'1',
      dimension:['title'],
      target:['value']
    }, 
    rowStart: 1,
    colStart: 1,
    rowSpan: 10,
    colSpan: 2,
  },
  {
    name: 'qb-pie-chart',
    id: '5',
    label: '扇形图',
    icon: 'icon-piechart',
    component: 'qb-chart',
    style: {
      option: {
        
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        
      },
      series:{
        type:'pie'
      }
    },
    props:{
      dataset:'1',
      dimension:['title'],
      target:['value']
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
    component: 'qb-iframe',
    props: {
      src: 'https://blog.csdn.net/weixin_47030180',
    },
    style:{

    },
    rowStart: 1,
    colStart: 1,
    rowSpan: 30,
    colSpan: 3,
  },
]