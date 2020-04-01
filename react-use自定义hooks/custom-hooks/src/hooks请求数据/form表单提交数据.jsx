import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Input = () => {
    let [data, setdata] = useState([]) //初始状态值
    let [isload, setisload] = useState(false) //加载中loadding动画
    let [isError, setisError] = useState(false) //数据请求的错误处理
    const [query, setQuery] = useState('');  // 修改input值
    let [isUrl, setisUrl] = useState(`http://hn.algolia.com/api/v1/search?query=redux`) // url
    useEffect(() => {
        const getdata = async () => {
            setisload(true)
            setisError(false)
            try {
                let res = await Axios.get(isUrl)
                setdata(res.data.hits)
            } catch (error) {
                setisError(true)
            }
            setisload(false)
        }
        getdata()

    }, [isUrl])
    return (
        <div>
            {isError && <h1>抱歉！出错了，不好意思</h1>}
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="button" onClick={() => setisUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>搜索</button>
            {
                isload ? <h1>loadding...</h1> :
                    data.map((item) => {
                        return <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    })
            }
        </div>
    );
};

export default Input;