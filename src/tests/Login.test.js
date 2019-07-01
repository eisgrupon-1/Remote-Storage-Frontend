import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme'

import Login from '../Login/'

it('renders without crashing', () => {
  configure({ adapter: new Adapter() }) 
  shallow(<Login/>);
});

it('renders Remote Storage Login title', () => {
    configure({ adapter: new Adapter() }) 
    var wrapper= shallow(<Login/>);

    expect(wrapper.contains(<h4>Remote Storage</h4>)).toEqual(true);
    expect(wrapper.contains(<h4>Login</h4>)).toEqual(true);
});

it('renders User, Password and Submit fields', () => {
  configure({ adapter: new Adapter() }) 
  var wrapper= shallow(<Login/>);

  const input = wrapper.find('input');
  const inputUserEmail = input.getElements()[0].props.name;
  const inputPassword = input.getElements()[1].props.name;
  const inputSubmit = input.getElements()[2].props.value;

  expect(inputUserEmail).toEqual('UsuarioEmail');
  expect(inputPassword).toEqual('Clave');
  expect(inputSubmit).toEqual('Ingresar');
});

it('input Clave has type Password', () => {
  configure({ adapter: new Adapter() }) 
  var wrapper= shallow(<Login/>);

  const input = wrapper.find('input');
  const inputPassword = input.getElements()[1].props.type;

  expect(inputPassword).toEqual('password');
});