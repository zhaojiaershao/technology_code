import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china'
import { Option } from './useOption'
import './index.css'
export default Map => {
    return (
        <div className='map'>
            <ReactEcharts option={Option()} className='map_style'></ReactEcharts>
        </div>
    )
}
