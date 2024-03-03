import React, {useState, useEffect} from "react";


function DigitalClock(){
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);

        return function cleanup(){
            clearInterval(timerId)
        }
    }, [])

    function tick(){
        setCurrentTime(new Date())
    }

    return(
        <>
        <div className="timer-container">
            <h2 className="timer">{currentTime.toLocaleTimeString()}</h2>
        </div>
        </>
    )

}

export default DigitalClock

