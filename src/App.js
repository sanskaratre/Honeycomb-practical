import React from 'react';
import './App.css';
import UserList from './components/UserList';
import {Routes, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage';

  function App() {
   
   
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<><h1 style={{ textAlign: 'center' , backgroundColor:"#a58b8b"}}>User List</h1>
      <UserList /></>} />
      <Route path = "/:id" element = { <DetailPage /> } />
      </Routes>
      <br></br>
      <br></br>
      <hr></hr>
      <span> {new Date().getFullYear() } </span>
    </div>
  );
}

export default App;
