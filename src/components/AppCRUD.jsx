import React, { useState } from 'react';
import FormCRUD from './FormCRUD';
import TableCRUD from './TableCRUD';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

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
            <Container>
                <Row><h3>Application CRUD whit React JS</h3>

                </Row>
                <Row>
                    <Col><FormCRUD /></Col>
                    <Col><TableCRUD data={data} /></Col>
                </Row>
            </Container>
        </>
    );
}

export default AppCRUD;