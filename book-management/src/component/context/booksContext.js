import { createContext ,useState } from "react";


const BooksContext = createContext();

function Provider({children}){

    const [booksList,setList] = useState([]);
    const [isFormEditable,setFormEditable] = useState(false);
    const [editableBookDetail,setBookDetail] = useState({});

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
            render :(book)=><div><button className="btn btn-danger" onClick={()=>{deleteBookHandler(book)}}>Delete</button> <button className="btn btn-info" onClick={()=>{editBookHandler(book)}}>Edit</button></div>,
        }
    ];

    const handleSubmit = (book_info) =>{
        let new_books_array = [...booksList,{...book_info}];
        setList(new_books_array);
    }

    const deleteBookHandler = (book_info) => {

        const filter_deleted_books = (booksList || []).filter(book=>book.id !== book_info.id);
        setList(filter_deleted_books);
    }

    const editBookHandler = (book_info) => {
        setFormEditable(true);
        setBookDetail(book_info);
    }

    const handlerEditSubmit = (book_info) =>{
       
        const updatedArray = (booksList || []).map((books)=>{

            if(books.id == book_info.id){
                return {...books,name:book_info.name,author:book_info.author,price:book_info.price}
            }
            
            return books
        })

        setList(updatedArray);
    }

    const valueToShare = {
        booksList,
        isFormEditable,
        editableBookDetail,
        config:Config,
        handleSubmit ,
        deleteBookHandler ,
        editBookHandler,
        handlerEditSubmit
        }


        return(
            <BooksContext.Provider value={valueToShare}>
                {children}
            </BooksContext.Provider>
        )

}

export {Provider}
export default BooksContext