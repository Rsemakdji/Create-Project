import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import NotValid from "../image/NotValid.jpg";
import Loader from "./Loader.jsx";
import useBooks from "../hooks/useBooks";



export default function BooksList(){

    const {loading, error, books, setSubjectName} = useBooks()
   
    if(loading){
        /*Animation de chargement */
        return <Loader></Loader> 
     }
     if(error){
         return<div>{error.message}</div>
     }
     /*  des données sont accessibles ? */
     if(!books){
         return<div> No books </div>
     } 
 
     return(
        <div>
            <div className="container-btn">
            <button className="btn-cat" onClick={() => setSubjectName("")}>Tous les livres</button>    
            <button className="btn-cat" onClick={() => setSubjectName("Histoire-Géographie-EMC")}>Histoire geo</button>    
            <button className="btn-cat" onClick={() => setSubjectName("Français")}>Français</button>   
            <button className="btn-cat" onClick={() => setSubjectName("Mathématiques")}>Mathématiques</button>  
            </div>
            {/* traitement des données et possible incohérence  */}
         <div className='container-book-card'>
             {books.map((item) => {
                 if(item.displayTitle === null || item.displayTitle ==="undefined" ){
                     return(
                         <div key={item.id} className='void-item'></div>
                     )
                 }
                 if(item.valid === true){
                     if(item.url === null){
                         return (
                                 <div key={item.id}  className='book-card'>
                                     <img className='invalid-image-card' src={NotValid}></img>
                                <Link 
                                     className='link-book-card'
                                     id={item.id}  
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div> 
                             
                         )
                     }
                     else {
                         return (
                             <div key={item.id}  className='book-card'>  
                                     <img className='image-book-card' src={item.url}></img>
                                <Link 
                                     className='link-book-card'
                                     id={item.id}  
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div>
                         )
                     }
                 }
                 if(item.valid === false){
                     if(item.url === null){
                         return(
                             <div key={item.id}  className='invalid-card'>
                                     <img className='invalid-image-card' src={NotValid}></img>
                                <Link 
                                     className='invalid-link'
                                     id={item.id} 
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div>
                         )
                     }
                     else {
                         return (
                             <div key={item.id}  className='invalid-card'>
                                     <img className='invalid-image-card' src={item.url}></img>
                                <Link 
                                     className='invalid-link'
                                     id={item.id} 
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div>
                         )
                     }
                 }
                 return []
             })}
         </div>
        </div>
     );
   
 }
