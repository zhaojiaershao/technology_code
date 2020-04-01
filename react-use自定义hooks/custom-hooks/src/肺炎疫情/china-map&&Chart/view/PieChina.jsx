import React, { useEffect, useState } from 'react';
import { getTotal } from '../api/apiMap'
// 引入 echarts-for-react 主模块
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line'
const Piechina = () => {
    let [data, setdata] = useState([])
    const title = ['在诊人数', '治愈人数', '死亡人数']
    console.log(title)
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            top: 'top',
            data: title,
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                data: data,
            }
        ]
    };
    const getabc = (o) => {
        let arr = []
        for (var val in o) {
            if (val == 'currentConfirmedCount') {
                arr.push({
                    value: o[val],
                    name: '在诊人数'
                })
            }
            if (val == 'curedCount') {
                arr.push({
                    value: o[val],
                    name: '治愈人数'
                })
            }
            if (val == 'deadCount') {
                arr.push({
                    value: o[val],
                    name: '死亡人数'
                })
            }
        }
        return arr
    }
    useEffect(() => {
        const getdata = async () => {
            let res = await getTotal()
            setdata(getabc(res.data.newslist[0].desc))
        }
        getdata()
    }, [])

    return <ReactEcharts option={option} style={{ height: 500 }} />
};

export default Piechina;