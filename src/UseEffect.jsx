import React, {useState, useEffect} from "react";

function MyComponent(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        document.title = `Count: ${count}, ${color}`

        return () => {
            //cleanup code
        }
    }, [count, color])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added");

        return(() => {
            window.removeEventListener("resize", handleResize)
            console.log("Event listener removed");
        }
        )
    }, [])

    useEffect(() => {
        document.title = `Width: ${width} x Height: ${height}`;
    }, [width, height])

    function addCount(){
        setCount(c => c + 1)
    }
    function subtractCount(){
        setCount(c => c - 1)
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>

        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change color</button><br/>
        </>
    )
}

export default MyComponent