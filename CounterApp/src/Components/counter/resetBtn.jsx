import './Counter.css'
export default function ResetBtn({resetMethod}){

    return(
        <div>
            <button className="resetBtn" onClick={resetMethod}>Reset</button>
        </div>
    );
}