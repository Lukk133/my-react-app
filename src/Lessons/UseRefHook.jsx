import {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);

    useEffect(() => {
        console.log("Component rendered");
        console.log(inputRef1);
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "yellow"
    }

    return(
        <>
        <button onClick={handleClick1}>
            Click me one!
        </button>
        <input ref={inputRef1}/>

         <button onClick={handleClick2}>
            Click me two!
        </button>
        <input ref={inputRef2}/>

         <button onClick={handleClick3}>
            Click me three!
        </button>
        <input ref={inputRef3}/>
        </>
    )
}

export default MyComponent