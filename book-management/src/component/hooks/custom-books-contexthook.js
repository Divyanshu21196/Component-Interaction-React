import { useContext } from "react";
import BooksContext from "../context/booksContext";


function useBooksContext(){
    return useContext(BooksContext);
}

export default useBooksContext;