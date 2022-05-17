import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import {useState} from 'react';
import Header from './components/Header';
import {Outlet} from 'react-router-dom'


function App() {
 
  return (
    <>
    
    <Header/>
    <h1>Hello</h1>
    <Outlet/>

    </>
  );
}

export default App;
