import React, { useEffect, useState } from 'react'
import '../index.css'

const DigitalClock = () => {
    const [timer, setTimer] = useState(new Date());

    const hours = timer.getHours();
    const minute = timer.getMinutes();
    const seconds = timer.getSeconds();

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTimer(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])
        
  return (
    <div className='container'>
        <div>{hours} </div>
        <div> {minute} </div>
        <div>{seconds}</div>
    </div>
  )
}

export default DigitalClock