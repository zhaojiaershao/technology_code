import React, { useState, useEffect } from 'react';
// 引入 echarts-for-react 主模块
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line'
import axios from 'axios'
const Linechart = () => {
    let [confirmdata, setconfirmData] = useState([]) // 确诊
    let [suspectdata, setsuspectData] = useState([]) // 疑似
    let [deaddata, setdeadData] = useState([]) //死亡
    let [healdata, sethealData] = useState([]) // 治愈
    let [severedata, setsevereData] = useState([]) // 严重
    let [daydate, setdayDate] = useState([])//日期
    const option = {
        title: {
            text: '全国最近二十天的全部疫情数据',
            left: 'left'
        },
        legend: {
            data: ['确诊', '疑似', '死亡', '治愈', '严重']
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: daydate,//日期数组
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '确诊',
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: confirmdata
            },
            {
                name: '疑似',
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: suspectdata
            },
            {
                name: '死亡',
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: deaddata
            },
            {
                name: '治愈',
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: healdata
            },
            {
                name: '严重',
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: severedata
            },
        ]
    };
    // 数据
    const getday = (arr) => {
        let len = arr.length
        let dateArr = [] //日期
        let confirmtArr = [] // 确诊
        let suspectArr = [] //疑似
        let deadArr = [] //死亡
        let healArr = [] //治愈
        let severeArr = [] //严重
        for (var i = 0; i < len; i++) {
            for (var j = 1; j <= 20; j++) {
                if (i == len - j) {
                    let str = arr[i].date.substring(5) //截取字符串
                    dateArr.push(str)
                    let result = arr[i].total
                    // 确诊的数据
                    confirmtArr.push({
                        value: result.confirm
                    })
                    //疑似的数据
                    suspectArr.push({
                        value: result.suspect
                    })
                    //死亡的数据
                    deadArr.push({
                        value: result.dead
                    })
                    //治愈的数据
                    healArr.push({
                        value: result.heal
                    })
                    //严重的数据
                    severeArr.push({
                        value: result.severe
                    })
                }
            }
        }
        setdayDate(dateArr) //最近七天的日期
        setconfirmData(confirmtArr) //确诊
        setsuspectData(suspectArr)  //疑似
        setdeadData(deadArr)  //死亡
        sethealData(healArr)  //治愈
        setsevereData(severeArr)  //严重
    }
    useEffect(() => {
        const getdata = async () => {
            let res = await axios.get('/ug/api/wuhan/app/data/list-total?t=' + Date.parse(new Date()))
            // 每天的
            let day = res.data.data.chinaDayList
            getday(day)
        }
        getdata()
    }, [])
    return <ReactEcharts option={option} style={{ height: 500 }}></ReactEcharts>
};

export default Linechart;