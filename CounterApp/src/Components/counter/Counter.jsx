import { useState } from "react";
import "./Counter.css";
import CounterBtn from './counterBtn';
import ResetBtn from "./resetBtn";

export default function Counter(){
    const [count, setCount] = useState(0);

    function resetCount(){
        setCount(0);
    }

    function incrementParentCounterFunction(by){
        setCount(count+by);
    }
    function decrementParentCounterFunction(by){
        setCount(count-by);
    }
    return (
        <>
        <span className="totalCount">{count}</span>
        <CounterBtn by={1} incrementMethod={incrementParentCounterFunction} decrementMethod={decrementParentCounterFunction}/>
        <CounterBtn by={2} incrementMethod={incrementParentCounterFunction} decrementMethod={decrementParentCounterFunction}/>
        <CounterBtn by={5} incrementMethod={incrementParentCounterFunction} decrementMethod={decrementParentCounterFunction}/>
        <ResetBtn resetMethod={resetCount}/>
        </>
    );
}

// function CounterBtn({by, incrementMethod, decrementMethod}) {
//     const [count, setCount] = useState(0);

//     function incrementCounterFunction() {
//         setCount(count+by);
//         incrementMethod(by);
//     }

//     function decrementCounterFunction() {
//         setCount(count-by);
//         decrementMethod(by);
//     }

//     return (
//         <div className="Counter">
            
//             <button className="countBtn" onClick={incrementCounterFunction}>+{by}</button>
//             <button className="countBtn" onClick={decrementCounterFunction}>-{by}</button>
//         </div>
//     );
// }

// CounterBtn.propTypes = {
//     by:PropTypes.number
// }

// CounterBtn.defaultProps = {
//     by:1
// }