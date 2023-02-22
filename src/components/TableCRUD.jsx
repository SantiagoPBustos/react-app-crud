import React from 'react';
import Table from 'react-bootstrap/Table'
import RowTableCRUD from './RowTableCRUD';

function TableCRUD({data}) {
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
                {data.map((el) => <RowTableCRUD key={el.id} el={el}/>)}
            </tbody>
        </Table>

    );
}

export default TableCRUD;


