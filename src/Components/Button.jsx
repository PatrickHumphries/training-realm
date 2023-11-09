import { useState } from "react";
import './Button.css'

function Button() {
    const [num, setNum] = useState(0)

    function incrementNum(num) {
        setNum(num + 1)
    }

    function decrementNum(num) {
        setNum(num - 1)
    }

    function setToZero(num) {
        setNum(0)
    }

    return (
        <div className="Button">
            <button onClick={() => incrementNum(num)}>Click here to increment</button>
            <p>{num}</p>
            <button onClick={() => decrementNum(num)}>Click here to decrement</button>
            <br />
            <br />
            <button onClick={() => setToZero(num)}>Click to reset count to zero</button>

        </div>
    )
}

export default Button;