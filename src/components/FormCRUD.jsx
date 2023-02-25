import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const initialForm={
  id: null,
  typeAnimal: "",
  nameAnimal: "",
}

const FormCRUD = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();

    if (!form.nameAnimal || !form.typeAnimal) {
      alert("Datos Incompletos!");
      return;
    }

    if (form.id === null) {
      createData(form);
    }else{
      updateData(form);
    }

    handleReset();

  };

  const handleReset = () => { 
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className='mt-4'>Create Animal</h3>
      <Form.Group className="m-auto w-75" controlId="formBasicEmail">
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