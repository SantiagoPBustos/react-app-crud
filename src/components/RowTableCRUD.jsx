import React from 'react';

function RowTableCRUD({ el }) {
    return (
        <tr>
            <td>{el.id}</td>
            <td>{el.Nombre}</td>
            <td>{el.Tipo}</td>
        </tr>
    );
}

export default RowTableCRUD;