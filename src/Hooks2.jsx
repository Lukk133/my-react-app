import React, {useState} from 'react'

function Counter(){

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
     const decrement = () => {
        setCounter(counter - 1)
    }
     const reset = () => {
        setCounter(0)
    }

    return(
        <div>
            Counter = {counter}
            <p>
                <button onClick={increment}>Dodaj</button>
                <button onClick={decrement}>Odejmij</button>
                <button onClick={reset}>zresetuj</button>
            </p>
        </div>
    )
}

export default Counter