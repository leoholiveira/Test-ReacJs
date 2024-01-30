import React, { useState } from 'react';
import '../styles/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coordX, setCoordX] = useState('');
  const [coordY, setCoordY] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit({ name, email, phone, coordX, coordY });
    setName('');
    setEmail('');
    setPhone('');
    setCoordX('');
    setCoordY('');
  };

  return (
    <div className="user-form-container">
      <h2>Cadastrar Cliente</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" md="4" controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" md="4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" md="4" controlId="formBasicPhone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="number" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" md="6" controlId="formBasicCoordX">
            <Form.Label>Coordenada X</Form.Label>
            <Form.Control type="number" placeholder="Coordenada X" value={coordX} onChange={(e) => setCoordX(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" md="6" controlId="formBasicCoordy">
            <Form.Label>Coordenada Y</Form.Label>
            <Form.Control type="number" placeholder="Coordenada Y" value={coordY} onChange={(e) => setCoordY(e.target.value)} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;