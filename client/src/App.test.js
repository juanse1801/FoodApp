import React from 'react';
import {NavLink} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './components/NavBar/NavBar';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});


describe('<NavBar/>',()=>{
  let wrapper
  beforeEach(()=>{
    wrapper=shallow(<NavBar/>)
  })
  
  it('Debería renderizar dos <NavLink/>',()=>{
    expect(wrapper.find(NavLink)).toHaveLength(2);
  })
  it('El primer NavLink debe tener el texto HOME y cambiar la ruta a "/home"',()=>{
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
    expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
  })
  it('El segundo NavLink debe tener el texto Create Recipe y cambiar la ruta a "/createRecipe"',()=>{
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/createRecipe');
    expect(wrapper.find(NavLink).at(1).text()).toEqual('Create Recipe');
  })
})
