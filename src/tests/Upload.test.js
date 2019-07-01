import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme'

import Upload from '../upload/Upload'

it('renders without crashing', () => {
  configure({ adapter: new Adapter() }) 
  shallow(<Upload/>);
});

it('renders Subir Archivos title', () => {
    configure({ adapter: new Adapter() }) 
    var wrapper= shallow(<Upload/>);

    expect(wrapper.contains(<span className="Title">Subir Archivos</span>)).toEqual(true);
});


