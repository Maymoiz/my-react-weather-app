import React from 'react';
import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="app container">
      <h1 className='text-center'>My Weather App</h1>
      <Weather city="Pretoria" />
      <footer className='text-center'>This project was created by <a href='https://github.com/Maymoiz' >Moisha Ndlovu💕</a>and open-sourced on <a href="https://github.com/Maymoiz/my-react-weather-app">GitHub</a></footer>
    </div>
  );
}


