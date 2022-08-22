import React from "react";
// guery gql
import { GET_CHAPTERS_FROM_BOOKID } from "../gql/Gql";
//  usequery hooks 
import { useQuery } from "@apollo/client";

export default function ChapterList(){

    const { loading, error, data } = useQuery(GET_CHAPTERS_FROM_BOOKID, {
        variables: {"bookId": 1339497},
      });
      console.log(data)


      if (loading) {
        return <h1>chargement des données ...</h1>;
      }
      if (error) {
        return <div>{error.message}</div>;
      }
      if (!data) {
        return <div>il n'y a pas de données a exposer</div>;
      }
    
      return (
        <div className="container">
          {data.viewer.chapters.hits.map((item) => {
            return (
              <div className="card-chapter">
                <img className="image-chapter" src={item.url}></img>
              <ul>
                <li key={item.id}>{item.title}</li>
              </ul>
              </div>
            );
          })}
        </div>
      );
    }
