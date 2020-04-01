import React, { useState, useEffect } from 'react';
import { Timeline, Card } from 'antd'
import '../index.css'
import { getTotal } from '../api/apiMap'
const Yiqingtrend = () => {
    let [data, setdata] = useState([])
    let [date, setdate] = useState([])
    useEffect(() => {
        const getdata = async () => {
            let res = await getTotal()
            setdata(res.data.newslist[0].news)
            getdate(res.data.newslist[0].news)
        }
        getdata()
    }, [])
    const getdate = (t) => {
        let de = new Date(t)
        let F = de.getFullYear() //年份
        let M = de.getMonth() + 1 //月份
        let H = de.getHours() //小时
        let m = de.getMinutes() //分钟
        return F + '年' + '月' + M + '日' + H + ':' + m
    }
    return (
        <div className='trend'>
            <Timeline>
                {
                    data.map((item) => {
                        return <Timeline.Item key={item.id}>
                            <p>{getdate(item.pubDate)}（{item.pubDateStr}）</p>
                            <Card title={item.title} >
                                <p>{item.summary}</p>
                                <div className='region'>
                                    <p><span>地区</span>：<span>{item.provinceName || <>全国</>}</span></p>
                                    <p><span>来源</span>：<a href={item.sourceUrl}>{item.infoSource}</a></p>
                                </div>
                            </Card>
                        </Timeline.Item>
                    })
                }
            </Timeline>

        </div >
    );
};

export default Yiqingtrend;