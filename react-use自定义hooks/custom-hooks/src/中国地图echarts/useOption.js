import { useEffect, useState } from 'react'
import { getData } from './apiMap'

const Option = () => {
    let [mapData, setMapData] = useState([]) // 初始化数据
    const option = {
        tooltip: { // 提示框
            transitionDuration: 0.4,
            formatter: "{b} <br/> {a}：{c} ", // a 系列名称 b 区域名称 c 合并数值
        },
        visualMap: {
            type: "piecewise",
            show: true,
            pieces: [
                { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
                { min: 500, max: 999, label: '确诊500-999人', color: '#4e160f' },
                { min: 100, max: 499, label: '确诊100-499人', color: '#974236' },
                { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
                { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' },
            ],
            inRange: {
                color: ["#FFFFFF", "#FDEBCA", "#E25552", "#CA2B2D", "#831A26", "#500312"] // 颜色有个梯度变化，我吸取手机上
            }
        },
        series: [
            {
                type: 'map',
                name: '确诊',
                map: "china",
                data: mapData,
                label: {
                    show: true,
                    color: "black",
                    fontStyle: 10,
                    align: "center"
                },
                itemStyle: {
                    borderColor: "black", // 区域边框线
                },
                emphasis: { // 高亮显示
                    label: {
                        color: "black",
                    },
                    itemStyle: {
                        areaColor: "lightyellow" // 区域高亮颜色
                    }
                }
            },
        ]
    };
    useEffect(() => {
        getData().then(res => {
            let titleList = res.data.newslist.map(item => {
                return {
                    name: item.provinceShortName,
                    value: item.confirmedCount
                }

            })
            setMapData(titleList)
        })
    }, [])
    return option
};

export { Option };



