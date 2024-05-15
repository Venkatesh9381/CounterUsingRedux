
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFunction, reduceFunction } from '../App/action';


const Counter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addFunction(1));
  };

  const handleDecrease = () => {
    dispatch(reduceFunction(1));
  };

  const switchLightTheme = () => {
    document.querySelector('.counter-box').style.backgroundColor = 'white';
    document.querySelector('.counter-box').style.color = 'black';
    setIsDarkMode(false);
  };

  const switchDarkTheme = () => {
    document.querySelector('.counter-box').style.backgroundColor = 'black';
    document.querySelector('.counter-box').style.color = 'white';
    setIsDarkMode(true);
  };

  return (
    <>
    <div className="outer-div">
      <button onClick={switchLightTheme} disabled={!isDarkMode}>
        Switch to Light
      </button>
      <button onClick={switchDarkTheme} disabled={isDarkMode}>
        Switch to Dark
      </button>
      </div>
      <div className="counter-box">
        <center>
          <h1>{`Counter: ${counter}`}</h1>
        </center>
        <div className="btn-box">
          <button onClick={handleIncrease}>ADD</button>
          <button onClick={handleDecrease}>Reduce</button>
        </div>
      </div>
      </>
    
  );
};

export default Counter;
