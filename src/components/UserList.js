import React from 'react';
import '../styles/styles.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserList = ({ users, onDelete, optimization }) => {
  return (
    <div className="user-list-container">
      <h2>Lista de Clientes</h2>
      <Button onClick={() => optimization()} variant="link">Rota otimizada</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Distancia</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.distance}</td>
              <td>
                <Button onClick={() => onDelete(user.id)} variant="danger">Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;