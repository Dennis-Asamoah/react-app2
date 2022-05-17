import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './components/Register';
import Login from './components/Login'
import Component1 from './components/Component1';
import Component2 from './components/Component2'
import DenseTable from './components/Table'
import Detail from './components/DetailItem';
import Update from './components/Update';
import Delete from './components/Delete'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}>
       <Route  path='register' element={<SignUp/>} >  
          <Route path='component1' element={<Component1/>} />
       </Route>
       <Route  path='login' element={<Login/>} />
       <Route path='component2' element={<Component2/>}>
          <Route path=':number' element={<Component2/>}>one</Route>
        </Route>
       <Route path='table' element={<DenseTable/>}/>
       <Route path='detail' element={<Detail/>}>
             <Route path=':id' element={<Detail/>}/>
       </Route>
       <Route path='update' element={<Update/>}>
           <Route path=':id' elements={<Update/>}/>
       </Route>
       <Route path='delete' element={<Delete/>}>
          <Route path=':id' element={<Delete/>} />
        </Route>
    </Route>  
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
