import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import NotValid from "../image/NotValid.jpg";
import Loader from "./Loader.jsx";
// query gql 
import { GET_ALL_BOOKS } from '../gql/Gql';
// usequery hooks 
import { useQuery } from "@apollo/client";


export default function BooksList(){

  let {loading, error, data } = useQuery(GET_ALL_BOOKS);
  console.log(data)
   
    if(loading){
        return <Loader></Loader> 
     }
     if(error){
         return<div>{error.message}</div>
     }
     if(!data){
         return<div>il n'y a pas de données a exposer</div>
     } 
 
     return(
         <div className='container-book-card'>    
             {data?.viewer.books.hits.map((item) => {
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
     );
   
 }
