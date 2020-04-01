import axios from 'axios'
const getData = () => {
    return axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=964dc226dd5b57e892e6199735b6c55f')
}

export { getData }