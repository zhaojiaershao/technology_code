## 模仿的链接  
    ***https://blog.csdn.net/weixin_44420276/article/details/104538234***
    ***https://www.jianshu.com/p/293c4d7500eb?utm_campaign=hugo***

## 一、 安装echart依赖
    npm install echarts-for-react echarts

## 二、引入依赖
```js
import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china'
import jsonp from "jsonp" // 接口jsonp实现跨域
```

## 三、写代码
```js

  let [mapData, setMapData] = useState([]) // 初始化数据
    // 地图结构
    const option = {
        title: {
            text: '中国疫情图',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['中国疫情图']
        },
        visualMap: {
            type: 'piecewise',
            pieces: [
                { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
                { min: 500, max: 999, label: '确诊500-999人', color: '#4e160f' },
                { min: 100, max: 499, label: '确诊100-499人', color: '#974236' },
                { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
                { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' },
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        roamController: {
            show: true,
            left: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [
            {
                name: '确诊数',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    show: true,
                    color: 'rgb(249, 249, 249)'
                },
                data: mapData //获取数据后的数组
            }
        ]
    };
    // 获取省市名和人数
    const getData = () => {
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=' + Date.parse(new Date()), (err, data) => {
            let Titlelist = data.data.list.map((item) => {
                return {
                    name: item.name,
                    value: item.value
                }
            })
            setMapData(Titlelist)
        })
    }
    useEffect(() => {
        getData()
    }, [])




```

## 三、渲染的标签
```html
<ReactEcharts option={option} style={{ height: "550px" }} ></ReactEcharts>
```