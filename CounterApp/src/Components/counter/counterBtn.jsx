import { useState } from "react";
import { PropTypes } from 'prop-types';
import "./Counter.css";

export default function CounterBtn({by, incrementMethod, decrementMethod}) {
    const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        setCount(count+by);
        incrementMethod(by);
    }

    function decrementCounterFunction() {
        setCount(count-by);
        decrementMethod(by);
    }

    return (
        <div className="Counter">
            
            <button className="countBtn" onClick={incrementCounterFunction}>+{by}</button>
            <button className="countBtn" onClick={decrementCounterFunction}>-{by}</button>
        </div>
    );
}

CounterBtn.propTypes = {
    by:PropTypes.number
}

CounterBtn.defaultProps = {
    by:1
}