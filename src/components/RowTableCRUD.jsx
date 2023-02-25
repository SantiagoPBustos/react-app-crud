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

    return (
        <tr>
            <td>{el.nameAnimal}</td>
            <td>{el.typeAnimal}</td>
            <td><button style={buttonStyle}><img style={imgStyle} src={editLogo}/></button></td>
            <td><button style={buttonStyle}><img style={imgStyle} src={deleteLogo}/></button></td>
        </tr>
    );
}

export default RowTableCRUD;