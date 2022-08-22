import { gql } from "@apollo/client";

 export const GET_ALL_BOOKS = gql`
 {viewer
    {books
        {hits
            {id 
            displayTitle 
            url 
            subjects{name}
            levels{name}valid
        }}}}`;





 export const GET_CHAPTERS_FROM_BOOKID = gql`
query($bookId: Int!){
viewer{
chapters(bookIds : [$bookId]){
        hits{
            id title url valid}}}}`;
