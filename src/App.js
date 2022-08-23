import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksGallery from './vue/BooksGallery';
import ChaptersGallery from './vue/ChaptersGallery';
import PageNotFound from './components/PageNotFound';
import Lesson from './components/Lesson';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<BooksGallery/>}/>
        <Route path="/chapters/:bookId" element={<ChaptersGallery/>}/>
        <Route path="/lesson" element={<Lesson/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
