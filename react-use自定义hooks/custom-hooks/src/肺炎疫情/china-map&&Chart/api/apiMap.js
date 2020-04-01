import axios from 'axios'
// 辟谣信息的接口
const getRumor = () => {
    return axios.get('http://api.tianapi.com/txapi/rumour/index?key=964dc226dd5b57e892e6199735b6c55f')
}
// 总数据接口
const getPie = () => {
    return axios.get('http://api.tianapi.com/txapi/ncov/index?key=82f2b5612be7eed458d57f244a1dd9a3')
}
// 每天的总数据接口
const getTotal = () => {
    return axios.get('http://api.tianapi.com/txapi/ncov/index?key=964dc226dd5b57e892e6199735b6c55f')
}
// 全国各省数据接口
const getEach = () => {
    return axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=964dc226dd5b57e892e6199735b6c55f')
}
export { getRumor, getPie, getTotal, getEach }