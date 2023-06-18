import { createContext ,useState } from "react";


const BooksContext = createContext();

function Provider({children}){

    const [booksList,setList] = useState([]);

    const Config = [
        {
            label:'Name',
            render :(book)=>book.name,
        },
        {
            label:'Author',
            render :(book)=>book.author,
        },
        {
            label:'Price',
            render :(book)=>book.price,
        },
        {
            label:'Quantity',
            render :(book)=>book.quantity,
        },
        {
            label:'Action',
            render :(book)=><div><button onClick={()=>{deleteBookHandler(book)}}>Delete</button> <button>Edit</button></div>,
        }
    ];

    const handleSubmit = (book_info) =>{
        console.log(book_info);
    }

    const deleteBookHandler = (book_info) => {
        console.log(book_info);
    }

    const editBookHandler = (book_info) => {
        console.log(book_info);
    }

    const valueToShare = {
        booksList,
        config:Config,
        handleSubmit ,
        deleteBookHandler ,
        editBookHandler
        }


        return(
            <BooksContext.Provider value={valueToShare}>
                {children}
            </BooksContext.Provider>
        )

}

export {Provider}
export default BooksContext