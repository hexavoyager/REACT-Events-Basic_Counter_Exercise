import PropTypes from 'prop-types';
import style from './counter-module.css'
import { useState } from "react";

const Counter = (props) => {

const {incr} = props;

let [count, setCount] = useState(0);

const actIncrease = () => {
    setCount(count => count + incr);
}

const actReset = () => {
    setCount(0);
}

const actDecrease = () => {
    setCount(count => count - incr);
}
return (
    (count > 0) ?
    <div>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button onClick={actIncrease}>+{incr}</button>
    <button onClick={actDecrease}>-{incr}</button>
    <button onClick={actReset}>Reset</button>
    </div>
    :
    <div>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button onClick={actIncrease}>+{incr}</button>
    </div>
);
};

Counter.defaultProps = {
    incr: 1
}

Counter.propTypes = {
    incr: PropTypes.number
}

export default Counter;

