import React from 'react';
import Header from './components/Header/';
import AddPost from './components/AddPost';
import Posts from './components/Posts/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="blog">
        <AddPost />
        <Posts />
      </div>
    </div>
  );
}

export default App;
