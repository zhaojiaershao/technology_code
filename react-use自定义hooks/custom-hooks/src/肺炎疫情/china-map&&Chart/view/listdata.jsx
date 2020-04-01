import React, { useState, useEffect } from 'react';
import { getEach } from '../api/apiMap'
import { Table } from 'antd';
import '../index.css'

const Listdata = () => {
    let [list, setlist] = useState([])
    useEffect(() => {
        const getdata = async () => {
            let res = await getEach()
            let das = res.data.newslist.map(item => {
                return {
                    key: item.provinceName,
                    name: item.provinceShortName,
                    confirm: item.confirmedCount,
                    death: item.deadCount,
                    cure: item.curedCount,
                    cities: item.cities
                }
            })
            setlist(das)
        }
        getdata()
    }, [])
    const columns = [
        { title: '地区', dataIndex: 'name', key: 'name' },
        { title: '确诊', dataIndex: 'confirm', key: 'confirm' },
        { title: '死亡', dataIndex: 'death', key: 'death' },
        { title: '治愈', dataIndex: 'cure', key: 'cure' },
    ];
    // 省市里的城市
    const re = (record) => {
        const arr = []
        record.cities.map((item, index) => {
            arr.push(
                {
                    id: index,
                    title: item.cityName,
                    confirm: item.confirmedCount,
                    death: item.deadCount,
                    cure: item.curedCount
                }
            )
        })
        return arr
    }
    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            dataSource={list}
            pagination={false}
            expandable={{
                expandedRowRender: record => {
                    return re(record).map(item => {
                        return <ul key={item.id} className='list_list2'>
                            <li>{item.title}</li>
                            <li>{item.confirm}</li>
                            <li>{item.death}</li>
                            <li>{item.cure}</li>
                        </ul>
                    })
                },
                rowExpandable: () => true,
            }}
        />
    );
}

export default Listdata;