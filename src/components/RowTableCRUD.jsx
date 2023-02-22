import React from 'react';
import editLogo from '../assets/edit.png';
import deleteLogo from '../assets/delete.png';

function RowTableCRUD({ el }) {
    const buttonStyle = {
        width:"50%", 
        backgroundColor:"#212529",
        padding: "0px",
    }

    const imgStyle = {
        width:"25px", 
        padding: "0px",
    }

    https://cdn3.iconfinder.com/data/icons/feather-5/24/x-octagon-256.png

    return (
        <tr>
            <td >{el.id}</td>
            <td>{el.Nombre}</td>
            <td>{el.Tipo}</td>
            <td><button style={buttonStyle}><img style={imgStyle} src={editLogo}/></button></td>
            <td><button style={buttonStyle}><img style={imgStyle} src={deleteLogo}/></button></td>
        </tr>
    );
}

export default RowTableCRUD;