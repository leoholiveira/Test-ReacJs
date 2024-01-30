import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';


function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/clientes').then((response) => {
      setClientes(response.data);
    });
  }, []);

  const optimizationRoute = () => {
    axios.get('http://localhost:3001/rota-otimizada').then((response) => {
      setClientes(response.data);
    });
  };

  const deleteClient = (id) => {
    Swal.fire({
      title: "Deseja deletar este cliente?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: "http://localhost:3001/cliente",
          data: {
            id: id,
          },
        })
        .then(function (response) {
          setClientes(response.data);
          Swal.fire("Saved!", "", "success");
        })
        .catch(function (response) {
          console.log(response);
        });
        
      }
    });
  }

  const handleAddUser = (user) => {
    axios({
      method: "post",
      url: "http://localhost:3001/clientes",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        coordX: user.coordX,
        coordY: user.coordY
      },
    })
    .then(function (response) {
      //handle success
      console.log(response);
      setClientes([...clientes, { ...response.data }]);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    
  };
  
  return (
    <Container>
      <div className="App">
        <UserList users={clientes} optimization={optimizationRoute} onDelete={deleteClient} />
        <UserForm onSubmit={handleAddUser} />
      </div>
    </Container>
  );
}

export default App;