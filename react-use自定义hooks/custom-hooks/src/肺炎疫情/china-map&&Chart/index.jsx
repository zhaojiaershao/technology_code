import React from 'react';
import Chinamap from './view/chinamap' //全国疫情地图
import Linechart from './view/line_chart' //全国疫情曲线趋势图
import Chinatotol from './view/ChinaTotol' //全国疫情总数
import Piemap from './view/PieChina' //全国疫情饼图图表
import Trend from './view/yiqing_trend' //最新消息
import Rumor from './view/rumor' //辟谣信息
import List from './view/listdata' //数据列表
import { Tabs } from 'antd';
import './index.css'
import { useState } from 'react';

const { TabPane } = Tabs;
export default Map => {
    let [tabKey, setTabKey] = useState('1')
    return (
        <div style={{ background: '#fff' }}>
            <div className="style_top__1VCSg">
                <p className="style_title__aPjei">新型冠状病毒肺炎疫情</p>
                <p className="style_tip__1aBrD">实时动态</p>
            </div>
            <Tabs activeKey={tabKey} onChange={(activeKey) => setTabKey(activeKey)} className='header_nav'>
                <TabPane tab="疫情地图" key="1">
                    <Chinatotol />
                    <Chinamap />
                    <List />
                </TabPane>
                <TabPane tab="最新消息" key="2">
                    <Trend />
                </TabPane>
                <TabPane tab="辟谣消息" key="3">
                    <Rumor />
                </TabPane>
                <TabPane tab="疫情趋势" key="4">
                    <Linechart />
                    <Piemap />
                </TabPane>
            </Tabs>
        </div>
    )
}
