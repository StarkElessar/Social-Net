import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import app from './app.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import RandomFriend from './RandomFriend';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={app.wrapper}>
        <div className={app.header}>
          <Header />
        </div>
        <div className={app.container}>
          <div className={app.sidebar}>
            <Sidebar />
          </div>
          <div className={app.content}>
            <Content />
          </div>
          <div className={app.random}>
            <RandomFriend />
          </div>
        </div>
        
        
        
        
      </div>
    </BrowserRouter>
    
  );
}



export default App;
