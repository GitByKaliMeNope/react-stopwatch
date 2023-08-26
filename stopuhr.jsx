import React, { useState, useRef } from 'react';
import './body.css';

 const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
   
    <div className='stopwatch' active={(active) =>{this.props.active = true}} >
      <span><h1>Time passed: {secondsPassed.toFixed(3)}</h1></span>
      <button onClick={handleStart} className='button'>
        Start
      </button>
      <button onClick={handleStop} className='button'>
        Stop
      </button>
      </div>
      
    </>
  );
}

export default Stopwatch;
