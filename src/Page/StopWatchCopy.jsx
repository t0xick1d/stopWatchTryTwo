import { Button } from 'react-bootstrap';
import React from 'react'
import s from './style.module.css'

const StopWatch = (props) => { 

    
    
    
    
    return(
        <>
            <h1 className = {s.title}>StopWatch</h1>
            <h1 className = {s.title}>
                {(props.time / 3600) < 10
                && <span>0</span>}
              {Math.trunc(props.time / 3600)}
                :
                {(props.time / 60) < 10
                && <span>0</span>}
              {Math.trunc(props.time / 60)}
                :
                { props.time < 10 &&<span>0</span>}
              {Math.trunc(props.time) % 60}
            </h1>
            <div className= {s.button}>
                <div>
                    <Button onClick={props.start}>{props.startStop}</Button>
                    
                </div>
                <Button onClick ={()=>props.wait()} >Wait</Button>
                <Button onClick ={()=>props.reset()} >Reset</Button>
            </div>
        </>
    )
}

export default StopWatch;