import React from "react";
import {Link } from "react-router-dom";
import NotValid from "../image/NotValid.jpg";
// query gql 
import { GET_ALL_BOOKS } from '../gql/Gql';
// usequery hooks 
import { useQuery } from "@apollo/client";


export default function BooksList(){

    const {loading, error, data } = useQuery(GET_ALL_BOOKS);
    
    if(loading){
        return <h1>chargement des données ...</h1>
     }
     if(error){
         return<div>{error.message}</div>
     }
     if(!data){
         return<div>il n'y a pas de données a exposer</div>
     } 
 
     return(
         <div className='container'>    
             {data?.viewer.books.hits.map((item) => {
                 if(item.displayTitle === null || item.displayTitle ==="undefined" ){
                     return(
                         <div key={item.id} className='card-book-void'></div>
                     )
                 }
                 if(item.valid === true){
                     if(item.url === null){
                         return (
                             
                                 <div key={item.id}  className='card-book'>
                                     <div className='container-title'>
                                     <img className='image-card' src={NotValid}></img>
                                </div> 
                                <Link 
                                     className='lien-book'
                                     id={item.id}  
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div>
                             
                         )
                     }
                     else {
                         return (
                             <div key={item.id}  className='card-book'>
                                     <div className='container-title'>
                                     <img className='image-card' src={item.url}></img>
                                </div> 
                                <Link 
                                     className='lien-book'
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
                             <div key={item.id}  className='card-book-invalid'>
                                     <div className='container-title'>
                                     <img className='invalid' src={NotValid}></img>
                                </div> 
                                <Link 
                                     className='lien-book-invalid'
                                     id={item.id} 
                                     to={`/chapters/${item.id}`}>{item.displayTitle}
                                 </Link> 
                             </div>
                         )
                     }
                     else {
                         return (
                             <div key={item.id}  className='card-book-invalid'>
                                     <div className='container-title'>
                                     <img className='invalid' src={item.url}></img>
                                </div> 
                                <Link 
                                     className='lien-book-invalid'
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
