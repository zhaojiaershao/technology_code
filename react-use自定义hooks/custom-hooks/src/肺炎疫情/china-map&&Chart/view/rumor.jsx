import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { getRumor } from '../api/apiMap'
import '../index.css'

const { Meta } = Card;
const Rumor = () => {
    let [rumordata, setrumordata] = useState([])
    useEffect(() => {
        const getdata = async () => {
            let res = await getRumor()
            setrumordata(res.data.newslist)
        }
        getdata()
    }, [])
    return (
        <div className='rumor'>
            {
                rumordata.map(item => {
                    return <Card key={item.id} hoverable
                        cover={<div className='rumor_title'>
                            <img src={item.imgsrc} />
                            <img className='rumor_img' src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png" />
                        </div>}>

                        <Meta title={<h1>{item.explain}：{item.title}</h1>} description={
                            <div>
                                <div>
                                    <p>时间：{item.date}</p>
                                    <p>{item.desc}</p>
                                </div>
                                <p>{item.author}</p>
                            </div>
                        } />

                    </Card>
                })

            }
        </div>
    );
};

export default Rumor;