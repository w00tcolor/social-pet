import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Messenger from './components/Messenger/Messenger'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <div className="app-wrapper-content">
                <Route path="/profile" component={Profile} />
                <Route path="/messenger" component={Messenger} />
                <Profile />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
