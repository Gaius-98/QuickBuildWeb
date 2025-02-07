const getChartPropsSchema = (datasetOptions:any[]) => {
    return {
        dataset:{
            type:'select',
            label:'数据集',
            options:datasetOptions,
        },
        dimension:{
            type:'select',
            label:'维度',
            options:[],
            mode:'multiple'
        },
        target:{
            type:'select',
            label:'指标',
            options:[],
            mode:'multiple'
        }
    }
}
export { getChartPropsSchema }    