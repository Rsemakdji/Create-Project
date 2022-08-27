import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_BOOKS } from '../gql/Gql';


/* hooks use books permet de filtrer récuperer les données de l'api (livres) et de filtrer celle-ci */
export default function useBooks() {

    const [subjectName, setSubjectName] = useState("")
    const {loading, error, data } = useQuery(GET_ALL_BOOKS);    
      

    const filterBooks = () => {

        if (subjectName === "") {
            return  data?.viewer.books.hits
        }

        const filteredBooks = data ? data.viewer.books.hits.filter((book) => {
            if (book.subjects.find((subject) => subject.name === subjectName) !== undefined) {
                return true
            }
            return false
        }) : []

        return filteredBooks
    }

    return {
        loading,
        error,
        books: filterBooks(),
        setSubjectName,
    }

}