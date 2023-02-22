import React from 'react';
import Table from 'react-bootstrap/Table'
import RowTableCRUD from './RowTableCRUD';

function TableCRUD({ data }) {
    return (
        <>
            <h3 className='mt-4'>Animal Data</h3>
            <Table variant="dark" className="m-auto" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => <RowTableCRUD key={el.id} el={el} />)}
                </tbody>
            </Table>
        </>
    );
}

export default TableCRUD;


