import React, { useState } from 'react';
import FormCRUD from './FormCRUD';
import TableCRUD from './TableCRUD';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const intialDB = [
    {
        "id": 1,
        "typeAnimal": "Perro",
        "nameAnimal": "Icaro",
    },
    {
        "id": 2,
        "typeAnimal": "Pajaro",
        "nameAnimal": "Cantor",

    },
    {
        "id": 3,
        "typeAnimal": "Gato",
        "nameAnimal": "Michigan",
    },
    {
        "id": 4,
        "typeAnimal": "Camello",
        "nameAnimal": "Tobias",
    },
]

const AppCRUD = () => {
    const [dataBase, setDataBase] = useState(intialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDataBase([...dataBase,data]);
    }
    const updateData = (data) => {}
    const deleteData = (id) => {}

    return (
        <>
            <Container className='m-auto'>
                <Row><h3>Application CRUD whit React JS</h3>

                </Row>
                <Row>
                    <Col><FormCRUD 
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}                     
                    /></Col>

                    <Col xs={7}><TableCRUD 
                    data={dataBase} 
                    setDataToEdit={setDataToEdit}   
                    deleteData={deleteData}/></Col>
                </Row>
            </Container>
        </>
    );
}

export default AppCRUD;