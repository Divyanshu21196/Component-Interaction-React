
import React from 'react';
import TableComponent from './UI/Table';
import useBooksContext from './hooks/custom-books-contexthook';
export default function TableExample() {

    const table_Data = [
        {id:1,name:'Alchemist',author:'Ben',price:150,quantity:2},
        {id:2,name:'To the limits',author:'Ben',price:250,quantity:2},
        {id:3,name:'A new Hope',author:'Ben',price:350,quantity:2},
        {id:4,name:'Desctruction gate',author:'Ben',price:150,quantity:2}
    ]


   const { config } = useBooksContext();

  
    return (
      <div className='position-absolute'>   
        <TableComponent data={table_Data} config={config}/>
      </div>
    );
  }