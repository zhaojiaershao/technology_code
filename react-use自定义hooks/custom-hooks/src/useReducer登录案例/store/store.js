import React, { useReducer } from 'react'
import reducerTypes from './actionTypes' //动作action
import myContext from '../context/context.js'
import Axios from 'axios'
import { message } from 'antd'
// 初始数据

const initState = {
    isloadding: false,
    islogin: window.localStorage.getItem('autoToen') || '',
    name: window.localStorage.getItem('disName') || ''
}
// reducer 函数
const reducer = (state = initState, action) => {
    switch (action.type) {
        case reducerTypes.LOGIN_LOADDING:
            return {
                ...state,
                isloadding: true
            }
        case reducerTypes.LOGIN_SUSSES:
            return {
                ...state,
                isloadding: false,
                islogin: true,
                name: action.userinfo.disName
            }
        case reducerTypes.LOGIN_ERROR:
            return {
                isloadding: false,
            }
        default:
            return state
    }
}
const loginLoadding = () => {
    return {
        type: reducerTypes.LOGIN_LOADDING
    }
}
const loginSusses = (userinfo) => {
    console.log(userinfo)
    window.localStorage.setItem('autoToen', userinfo.autoToen)
    window.localStorage.setItem('disName', userinfo.disName)
    return {
        type: reducerTypes.LOGIN_SUSSES,
        userinfo
    }
}
const loginError = () => {
    window.localStorage.removeItem('autoToen')
    return {
        type: reducerTypes.LOGIN_ERROR,
    }
}
export default (props) => {
    let [state, dispatch] = useReducer(reducer, initState)

    const getdata = (data) => {
        message.loading('登录中', 1)
        dispatch(loginLoadding())
        Axios.post('http://localhost:5000/login', data).then(res => {
            let result = res.data
            if (result.code == 0) {
                message.destroy()
                dispatch(loginSusses(result))
                message.success(result.msg)
            } else {
                message.destroy()
                dispatch(loginError())
                message.error(result.msg)
            }
        })
    }
    return <myContext.Provider value={{ state, getdata }}>
        {props.children}
    </myContext.Provider>
}