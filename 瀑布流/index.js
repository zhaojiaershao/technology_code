// 获取元素
let main = document.querySelector('.main')
let box = getClass('box')
// 获取一个box的宽度
let boxwidth = box[0].offsetWidth
// 一行能承载多少个box
let num = Math.floor(document.body.clientWidth / boxwidth)
// 设置mian 的宽度
main.style.width = boxwidth * num + 'px'
var arrH = []

function waterfall() {
    for (var i = 0; i < box.length; i++) {
        if (i < num) {
            arrH.push(box[i].offsetHeight)
        } else {
            console.log(arrH)
            // 求出数组中的最小值
            let mainheight = Math.min.apply(null, arrH)
            // 求出数组中最小值的索引
            let arrIndex = isArray(arrH, mainheight)
            box[i].style.position = 'absolute'
            box[i].style.left = arrIndex * boxwidth + 'px'
            box[i].style.top = mainheight + 'px'

        }
    }
}
waterfall()




// 获取节点名称
function getClass(cname) {
    let reg = new RegExp('\\b' + cname + '\\b')
    let dom = document.getElementsByTagName('*')
    let arr = []
    for (var i = 0; i < dom.length; i++) {
        if (reg.test(dom[i].className)) {
            arr.push(dom[i])
        }
    }
    return arr
}
getClass('box')

// 求出数组中最小值的索引值
function isArray(arr, min) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            return i
        }
    }
}