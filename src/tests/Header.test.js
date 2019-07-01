import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme'
import {
  NavLink
} from 'react-router-dom';
import Header from '../Header/'
import Navbar from 'react-bootstrap/Navbar'

it('renders without crashing', () => {
  configure({ adapter: new Adapter() }) 
  shallow(<Header/>);
});


