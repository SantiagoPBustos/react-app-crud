import React from 'react';
import FormCRUD from './FormCRUD';

function AppCRUD() {
    const intialDB = [
      {
          "id": 1,
          "Tipo": "Gato",
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
          "Tipo": "Gato",
          "Nombre": "Tobias",
      },
      ]

    return ( 
        <>
            <h3>Application CRUD whit React JS</h3>
            <FormCRUD/>
            <table></table>
        </>
     );
}

export default AppCRUD;