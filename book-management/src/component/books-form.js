import { useState } from "react";

function BooksForm(){

    const [bookName,setBookName] = useState('');
    const [authorName,setAuthorName] = useState('');
    const [bookPrice,setBookPrice] = useState(1);
    const DEFAULT_BOOK_QUANTITY = 2;


    const onNameChangeHandler = (event) =>{
        if(event.target.value.length > 30 ){
            alert('Book Name Cannot exceed 30 characters')
            return;
        }
        setBookName(event.target.value)
    }

    const onAuthorChangeHandler = (event) =>{
        if(event.target.value.length > 30 ){
            alert('Author Name Cannot exceed 30 characters')
            return;
        }
        setAuthorName(event.target.value);
    }

    const onPriceChange = (event) => {
        if(isNaN(event.target.value)){
            alert('Please enter a valid price')
            return
        }
        setBookPrice(event.target.value)
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()

        if(!bookName || !authorName || !bookPrice){
            alert('Please enter complete book details');
            return
        }

        const obj = {name:bookName,author:authorName,price:bookPrice,quantity:DEFAULT_BOOK_QUANTITY};

        console.log(obj)
    }


    return(
        <div className="position-relative"> 
        <form onSubmit={onSubmitHandler}>
            <div className="container">
               <div className="row">
                    <div className="form-group mb-2 col-md-6">
                        <label for="BookName" className="sr-only">Book Name</label>
                        <input type="text" value={bookName} onChange={onNameChangeHandler}  className="form-control" placeholder="Enter Book Name" id="BookName"/>
                    </div>
            
                    <div className="form-group col-md-6">
                        <label for="author" className="sr-only">Author</label>
                        <input type="text" value={authorName} onChange={onAuthorChangeHandler} className="form-control" id="author" placeholder="Enter Author Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group  col-md-6 mt-2 mb-4">
                    <label for="price" className="sr-only">Price</label>
                    <input type="number" value={bookPrice} onChange={onPriceChange} min="1" className="form-control" id="price" placeholder="Enter Book Price" />               
                </div>
                <div className="form-group col-md-6 mt-4">
                        <button type="submit" className="btn btn-primary mt-2 mb-4">Submit</button>
                </div>  
            </div>
           
        </div>
        </form>
        </div>
    )
}

export default BooksForm;