import { useRef, useEffect } from 'react'

function useDebounces(fn, wait = 1000, deply = []) {
    let myref = useRef()
    useEffect(() => {
        if (myref.current) clearTimeout(myref.current)
        myref.current = setTimeout(() => {
            fn()
        }, wait);
    }, deply)
    let cencel = () => {
        clearTimeout(myref.current)
        myref = null
    }
    return [cencel]
}
export { useDebounces }