
import React from 'react';
import TableComponent from './UI/Table';
import useBooksContext from './hooks/custom-books-contexthook';
import NoResultForm from './UI/NoResult';
export default function TableExample() {

    const { booksList } = useBooksContext();

   const { config } = useBooksContext();

  
    return (
      <div className='position-absolute'>   
        <React.Fragment>
              <TableComponent data={booksList} config={config}/>
        </React.Fragment>
        {
            !booksList.length && <React.Fragment><NoResultForm /></React.Fragment>            
        }

      </div>
    );
  }