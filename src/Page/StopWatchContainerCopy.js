import React,{useState, useEffect} from 'react'
import StopWatch from './StopWatchCopy';
import { interval, Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators'


const StopWacthContainerCopy = () => {


    const [time, setTime] = useState(0);
    const [isTimerOn, setTimerOn] = useState(false);
    const [startStopBtn, setStartStopBtn] = useState();


    const handelClick = () => {
        setTimerOn(!isTimerOn);
    }

    const handleWait = () => {
        if(time !== 0){
            setTimerOn(false)

        }
    }

    const handleReset = () => {
        setTime(0);
        setTimerOn(false);
    }

    useEffect(()=>{
        if(isTimerOn){
            setStartStopBtn('Stop')
        } else {
            setStartStopBtn('Start')
        }

        const timeSubject$ = new Subject();
            interval(1000)
             .pipe(takeUntil(timeSubject$))
             .subscribe(()=>{
                 if(isTimerOn){
                     setTime((val)=>val+1)
                 }
             })
             return () => {
                 timeSubject$.next();
                 timeSubject$.complete();
             };
        

    }, [isTimerOn])


    return( 
        <>
            <StopWatch
                time = {time}
                startStop = {startStopBtn}
                start = {handelClick}
                wait = {handleWait}
                reset = {handleReset}
            />
        </>
    )
}

export default StopWacthContainerCopy;