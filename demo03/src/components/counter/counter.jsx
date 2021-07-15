import PropTypes from 'prop-types';
import style from './counter-module.css'
import { useState } from "react";





const Counter = (props) => {

let [count, setCount] = useState(0);

const actIncrease = (e) => {
    e.preventDefault();
    setCount(count = count + 1);
}

const actReset = (e) => {
    e.preventDefault();
    setCount(count = 0);
}
return (
    (count > 0) ?
    <div>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button onClick={actIncrease}>Increase</button>
    <button onClick={actReset}>Reset</button>
    </div>
    :
    <div>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button onClick={actIncrease}>Increase</button>
    </div>
);
};

export default Counter;

