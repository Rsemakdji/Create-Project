import React from "react";
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom";
import NotValid from "../image/NotValid.jpg";
import Loader from "./Loader";
// guery gql
import { GET_CHAPTERS_FROM_BOOKID } from "../gql/Gql";
//  usequery hooks 
import { useQuery } from "@apollo/client";

export default function ChapterList(){
 /* récupération de l'id dans les params  */
    const { bookId } = useParams();
    const { loading, error, data } = useQuery(GET_CHAPTERS_FROM_BOOKID, {
        variables: { bookId },
      });
    
      if (loading) {
        return <Loader></Loader>
      }
      if (error) {
        return <div>{error.message}</div>;
      }
      if (!data) {
        return <div>il n'y a pas de données a exposer</div>;
      }
    
      return (
        <div className='container-chapter-card'>
            {/* traitement des données et possible incohérence  */}    
            {data?.viewer.chapters.hits.map((item) => {
                if(item.title === null || item.title ==="undefined" ){
                    return(
                        <div key={item.id} className='void-item'></div>
                    )
                }
                if(item.valid === true){
                    if(item.url === null){
                        return (
                                <div key={item.id}  className='chapter-card'>
                                    <img className='image-chapter-card' src={NotValid}></img>
                               <Link 
                                    className='link-chapter-card'
                                    id={item.id}  
                                    to={`/lesson`}>{item.title}
                                </Link> 
                            </div> 
                            
                        )
                    }
                    else {
                        return (
                            <div key={item.id}  className='chapter-card'>  
                                    <img className='image-chapter-card' src={item.url}></img>
                               <Link 
                                    className='link-chapter-card'
                                    id={item.id}  
                                    to={`/lesson`}>{item.title}
                                </Link> 
                            </div>
                        )
                    }
                }
                if(item.valid === false){
                    if(item.url === null){
                        return(
                            <div key={item.id}  className='invalid-chapter-card'>
                                    <img className='invalid-card' src={NotValid}></img>
                               <Link 
                                    className='invalid-link'
                                    id={item.id} 
                                    to={`/lesson`}>{item.title}
                                </Link> 
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={item.id}  className='invalid-card'>
                                    <img className='invalid-card' src={item.url}></img>
                               <Link 
                                    className='invalid-link'
                                    id={item.id} 
                                    to={`/lesson`}>{item.title}
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
