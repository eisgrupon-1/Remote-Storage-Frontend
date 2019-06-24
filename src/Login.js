import React, { Component } from 'react';
import './Login.css';

class Login extends Component {


  constructor(props) {
    super(props);

    this.state = { userOrEmail: "", password: "", user: {user: 'oscar', email: "oscar@gmail.com", password: "1234"}};
 

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
 }

  validateUser(){
    if (this.state.userOrEmail.includes("@") 
        && !this.state.user.email == (this.state.userOrEmail)){
      return false;
    }

    if (this.state.user.user != (this.state.userOrEmail)){
      return false;
    } 

    if (this.state.user.password != this.state.password){
      return false
    }

    return true;
  }

  handleChangeUser(event) {
    this.setState({userOrEmail: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  render() { 
    return (<form className="login-container" onSubmit={e => {
                                                        e.preventDefault();
                                                      
                                                        if (this.validateUser()){
                                                          this.props.history.push('/main')
                                                        }else{
                                                          alert("Usuario, email o contraseña incorrectas");
                                                        }                                                      
                                                      }}> 
        <h4>Remote Storage</h4>
        <h4>Login</h4>
        <input type="text" placeholder="Usuario o Email" value={this.state.userOrEmail} onChange={this.handleChangeUser} name ="UsuarioEmail"/>
        <input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="Contraseña" name ="Clave"/>
        <input type="submit" value="Ingresar"/>
    </form>
    );
}
}

export default Login;
