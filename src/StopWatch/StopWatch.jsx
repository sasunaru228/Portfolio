import classes from "./StopWatch.module.css";
import {useRef, useState} from "react";

export default function StopWatch() {

    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [lap, setLap] = useState([])
    let timeInterval = useRef(null)
    let formatingTimer = (timer) => {
        const minutes = Math.floor(timer / 6000).toString().padStart(2, "0");
        const seconds = Math.floor((timer / 100) % 60).toString().padStart(2, "0");
        const milliseconds = (timer % 100).toString().padStart(2, "0");
        return [ minutes, seconds, milliseconds ]
    }
    const [minutes, seconds, milliseconds] = formatingTimer(timer)

    const handleClickStart = () => {
        if (isRunning) return
        setIsRunning(true)
        timeInterval.current = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 10)
    }
    const handleClickStop = () => {
        if (!isRunning) return
        setIsRunning(false)
        clearInterval(timeInterval.current)
    }
    const handleClickReset = () => {
        setIsRunning(false)
        clearInterval(timeInterval.current)
        setTimer(0)
    }
    const handleClickLap = () => {
        const [min, sec, milSec] = formatingTimer(timer)
        setLap((prev) => ([
            ...prev,
            {
                min: min,
                sec: sec,
                milSec: milSec,
            }
        ]))
    }

    return (
        <>
            <div className={classes.main}>
                <div className={classes.stopWatch}>
                    <div className={classes.time}>
                        <span>{minutes}</span>:
                        <span>{seconds}</span>:
                        <span>{milliseconds}</span>
                    </div>
                    <div>
                        <button onClick={handleClickStart} className={classes.button}>{(timer && isRunning) ? 'Pause' : 'Start'}</button>
                        <button onClick={handleClickStop} className={classes.button}>Stop</button>
                        {isRunning ?
                            <button onClick={handleClickLap} className={classes.button}>Lap</button> :
                            <button onClick={handleClickReset} className={classes.button}>Reset</button>}
                    </div>
                    <span className={classes.ss}>LAPS</span>
                    {
                        lap?.map((item, index) => {
                        return <span className={classes.laps} id={index}>{item.min + ':' + item.sec + ':' + item.milSec}</span>
                            })
                    }
                </div>
            </div>
        </>
    )
}