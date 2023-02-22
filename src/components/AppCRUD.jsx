import React, {useState} from 'react';
import FormCRUD from './FormCRUD';
import TableCRUD from './TableCRUD';

const intialDB = [
    {
        "id": 1,
        "Tipo": "Perro",
        "Nombre": "Icaro",
    }, 
    {
        "id": 2,
        "Tipo": "Pajaro",
        "Nombre": "Cantor",
    
    }, 
    {
        "id": 3,
        "Tipo": "Gato",
        "Nombre": "Sas",
    },
    {
        "id": 4,
        "Tipo": "Camello",
        "Nombre": "Tobias",
    },
    ]

const AppCRUD = () => {
    const [data, setData] = useState(intialDB);

    return ( 
        <>
            <h3>Application CRUD whit React JS</h3>
            <FormCRUD/>
            <TableCRUD data={data}/>
        </>
     );
}

export default AppCRUD;