import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const initialForm = {
  id: null,
  Tipo: "",
  Nombre: "",
}

const FormCRUD = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = () => { }

  const handleSubmit = () => { }

  const handleReset = () => { }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="m-auto w-50" controlId="formBasicEmail">

        <Form.Control 
        name="nameAnimal" 
        className="mb-3" 
        type="text" 
        placeholder="Name animal" 
        onChange={handleChange} 
        value={Form.nameAnimal} />

        <Form.Control 
        name="typeAnimal" 
        className="mb-3" 
        type="text" 
        placeholder="Type animal" 
        onChange={handleChange} 
        value={Form.nameAnimal} />

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="dark" type="submit">Submit</Button>
          <Button variant="dark" type="reset" onClick={handleReset}>Clean</Button>
        </Stack>

      </Form.Group>

    </Form>
  );
}

export default FormCRUD;