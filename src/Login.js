import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() { 
    return (<form className="login-container" onSubmit={e => {
                                                        e.preventDefault();
                                                        this.props.history.push('/main')
                                                      }}> 
        <h4>Remote Storage</h4>
        <h4>Login</h4>
        <input type="text" placeholder="Usuario" name ="Usuario"/>
        <input type="password" placeholder="Contraseña" name ="Clave"/>
        <input type="submit" value="Ingresar"/>
    </form>
    );
}
}

export default Login;
