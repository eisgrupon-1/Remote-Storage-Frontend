import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {
  NavLink
} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand><NavLink to="/main" className="link">RemoteStorage</NavLink></Navbar.Brand>
    <Nav className="mr-auto">
        <NavLink to="/files" className="link">Lista de archivos</NavLink>
        <NavLink to="/upload-files" className="link" >Subir archivos</NavLink>     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
  </Navbar>
  </>
  );
}

export default Header;
