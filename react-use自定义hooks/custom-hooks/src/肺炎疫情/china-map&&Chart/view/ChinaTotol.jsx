import React, { useState, useEffect } from 'react';
import { getPie } from '../api/apiMap'
import '../index.css'

const Piechart = () => {
    let [data, setdata] = useState([])
    let [date, setdate] = useState([])
    // 时间戳处理
    const getdate = (t) => {
        let de = new Date(t)
        let F = de.getFullYear() //年份
        let M = de.getMonth() + 1 //月份
        let H = de.getHours() //小时
        let m = de.getMinutes() //分钟
        return F + '年' + '月' + M + '日' + H + ':' + m
    }
    useEffect(() => {
        const getdat = async () => {
            let res = await getPie()
            let result = res.data.newslist[0].desc
            setdata([result])
            setdate(getdate(result.modifyTime)) //time时间
        }
        getdat()
    }, [])
    return <div className='header'>
        <div className='date'>
            <span className='country'>全国</span>
            <span className='newdate'>截至{date}(北京时间)统计</span>
        </div>
        {
            data.map((item, index) => {
                return <div key={index} className='day'>
                    <div className='action confirm'>
                        <p><span>确诊</span></p>
                        <p><span>{item.confirmedCount}</span></p>
                        <p>较昨日<span>+{item.confirmedIncr}</span></p>
                    </div>
                    <div className='action suspected'>
                        <p><span>疑似</span></p>
                        <p><span>{item.suspectedCount}</span></p>
                        <p>较昨日<span>+{item.suspectedIncr}</span></p>
                    </div>
                    <div className='action serious'>
                        <p><span>重症</span></p>
                        <p><span>{item.seriousCount}</span></p>
                        <p>较昨日<span>+{item.seriousIncr}</span></p>
                    </div>
                    <div className='action dead'>
                        <p><span>死亡</span></p>
                        <p><span>{item.deadCount}</span></p>
                        <p>较昨日<span>+{item.deadIncr}</span></p>
                    </div>
                    <div className='action cured'>
                        <p><span>治愈</span></p>
                        <p><span>{item.curedCount}</span></p>
                        <p>较昨日<span>+{item.curedIncr}</span></p>
                    </div>
                </div>
            })
        }
    </div>
};

export default Piechart;