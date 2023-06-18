import BooksListTable from "./component/books-list-table";
import BooksForm from "./component/books-form";

function App(){
    return(
        <div className="align-center col-md-12">
        <h4 className="text-center mb-4">Books Management Kiosk</h4>
        <div className="col-md-8">
            <BooksForm></BooksForm>
        </div>
        <div className="col-md-4">
           <BooksListTable></BooksListTable>
        </div>
        </div>
    )
}

export default App;