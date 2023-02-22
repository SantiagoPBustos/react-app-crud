import React from 'react';
import Table from 'react-bootstrap/Table'

function TableCRUD() {
    return (
        <Table variant="dark" className="m-auto w-50 mt-5" striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Gato</td>
                    <td>Michigan</td>
                </tr>
            </tbody>
        </Table>

    );
}

export default TableCRUD;


