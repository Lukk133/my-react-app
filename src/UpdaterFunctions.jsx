import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        //updater functions
    }
     const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
     const reset = () => {
        setCount(0)
    }

    return(
        <div>
            Counter = {count}
            <p>
                <button onClick={increment}>Dodaj</button>
                <button onClick={decrement}>Odejmij</button>
                <button onClick={reset}>zresetuj</button>
            </p>
        </div>
    )
}

export default Counter