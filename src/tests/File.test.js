import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme'

import FileList from '../file-list/FileList'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'

var match = {
  params: {
    name: null
}
}

it('renders without crashing', () => {

  configure({ adapter: new Adapter() })   
  shallow(<FileList match= {match}/>);
});

it('renders Lista de archivos title', () => {
  configure({ adapter: new Adapter() }) 

  var wrapper= shallow(<FileList match= {match}/>);
  expect(wrapper.contains(<span className="Title">Lista de archivos</span>)).toEqual(true);
});

it('renders file table with these columns', () => {
  configure({ adapter: new Adapter() }) 

  var wrapper= shallow(<FileList match= {match}/>);
  expect(wrapper.contains(<th>Nombre</th>)).toEqual(true);
  expect(wrapper.contains(<th>Peso (bytes)</th>)).toEqual(true);
  expect(wrapper.contains(<th>Accion</th>)).toEqual(true);
});

it('renders no download button if has empty data', () => {
  configure({ adapter: new Adapter() }) 

  var wrapper= shallow(<FileList match= {match}/>);
  expect(wrapper.contains(<button type="submit">Descargar</button>)).toEqual(false);
});


