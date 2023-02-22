import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const FormCRUD = () => {
    return ( 
    <Form>
      <Form.Group className="m-auto w-50" controlId="formBasicEmail">
        <Form.Control name="nameAnimal" className="mb-3" type="text" placeholder="Name animal"/>
        <Form.Control name="typeAnimal" className="mb-3" type="text" placeholder="Type animal"/>

        <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="dark" type="submit">Submit</Button>        
            <Button variant="dark" type="reset">Clean</Button>
        </Stack>

      </Form.Group>
      
    </Form>
    );
}

export default FormCRUD;