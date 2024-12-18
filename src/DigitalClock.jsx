import React, { useState, useEffect } from "react";
import './DigitalClock.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formateTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem=hours>=12?"PM":"AM";
        return `${padZero(hours)%12===0?12:padZero(hours)%12}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`
    }
    function padZero(number){
        return (number < 10 ? '0' : '') + number;

    }

  return (
    <>
      <div className="clock-container">
        <div class="clock">
            <span>{formateTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
