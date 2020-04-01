import React, { useState } from 'react';
import { useDebounces } from './useDebounce.js'

const Debounce = () => {
    let [sta, setSta] = useState('')

    const test = () => {
        let [cencel] = useDebounces(setSta)
    }
    return (
        <div>
            <button type='button' onClick={test}>提交</button>
            <p>
                <h1>{sta}</h1>
            </p>
        </div>
    );
};

export default Debounce;