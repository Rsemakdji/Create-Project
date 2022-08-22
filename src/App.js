import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksGallery from './vue/BooksGallery';
import ChaptersGallery from './vue/ChaptersGallery';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<BooksGallery/>}/>
        <Route path="/chap" element={<ChaptersGallery/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
