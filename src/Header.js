import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {
  NavLink
} from 'react-router-dom';
import './Header.css';
import {withRouter} from 'react-router'

class Header extends Component {

 constructor(props) {
    super(props);
    this.state = {filename: ''};
    this.handleSearchTextBox = this.handleSearchTextBox.bind(this);
    this.search = this.search.bind(this);
 }

 handleSearchTextBox(event) {
  this.setState({filename: event.target.value});
 }

 search(){
   if (this.state.filename){
       this.props.history.push('/');
       setTimeout(() => {
        this.props.history.push('/files/' + this.state.filename)
      });
   }
   else{
     alert("Escriba el nombre del archivo")
   }
 }

 render() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand><NavLink to="/main" className="link">RemoteStorage</NavLink></Navbar.Brand>
    <Nav className="mr-auto">
        <NavLink to="/files" className="link">Lista de archivos</NavLink>
        <NavLink to="/upload-files" className="link" >Subir archivos</NavLink>     
    </Nav>
    <Form inline>
      <FormControl value={this.state.filename} onChange={this.handleSearchTextBox} type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button onClick={this.search} variant="outline-light">Buscar</Button>
    </Form>
  </Navbar>
  </>
  );
}
}

export default withRouter(Header);
