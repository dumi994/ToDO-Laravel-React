/* import React, {useState ,useEffect} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  var incrementCounter = ()=>{
    while(counter == 10){
      setCounter(counter +=1)
      console.log(counter);
    }
    return counter
  }

  useEffect(()=>{
    const timer = setTimeOut(()=>{
      if(counter < 10){
        setCounter(counter + 1)
      }
    }, 1000)
    return clearTimeout(timer)
  })
  return (
    <div>{counter}</div>
  )
}

export default Counter */
import React, { useState, useEffect } from 'react';
 
const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  console.log('dentro counter');
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 10) {
        setCounter(counter + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return <div>{counter} dio merdoe</div>;
};

export default CounterComponent;
 