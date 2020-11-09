import React from 'react'
import {useStyle} from './hooks'
const EdgeBarUp = ({w, h, scale}) => {
    const { barStyle } = useStyle(w, h, scale)
    return (
        <div>
            {[0, 1].map(i => (<div key = {`bar_${i}`} style = {barStyle(i)}></div>))}
        </div>
    )
}

export default EdgeBarUp