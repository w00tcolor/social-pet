import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Messenger from './components/Messenger/Messenger'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
                    <Route path="/messenger" element={<Messenger state={props.state.messagesPage}/>} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
