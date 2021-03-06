import React, {
    useState,
    useEffect
} from 'react'

function useMouce() {
    let [postion, setPosition] = useState({
        x: 0,
        y: 0
    }) //默认初始位置 
    useEffect(() => {
        function updateMouse(e) {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        //鼠标一动就更新鼠标的租表 
        document.addEventListener('mouseover', updateMouse)
        return () => {
            // 清除副作用 
            document.removeEventListener('mouseover', updateMouse)
        }
    })
    return postion
}

function Mouse() {
    let postion = useMouce()
    return <div>
        <h1>x:{postion.x}</h1>
        <h1>y:{postion.y}</h1>
    </div>
}
export default Mouse