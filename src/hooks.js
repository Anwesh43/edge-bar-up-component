import {
    useState, 
    useEffect
} from 'react'

import {
    divideScale, 
    sinify
} from './utils'

const parts = 2
export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    scale += (scGap / parts) 
                    setScale(scale)
                    if (scale > 1) {  
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const position = 'absolute'
    const hSize = Math.min(w, h) / 12 
    const barW = Math.min(w, h) / 30
    const background = 'indigo'
    return {
        barStyle(i) {
            const top = `${h - hSize * divideScale(sf, i, parts)}px`
            const left = `${i * (w - barW)}px`
            return {
                position,
                width, 
                height, 
                background,
                left, 
                top
            }
        }
    }
}