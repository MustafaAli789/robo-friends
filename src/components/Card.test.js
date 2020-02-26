import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render card comp', () => {
    expect(shallow(<Card />).debug()).toMatchSnapshot();
 
});

//shallow render card component
//will not render any component inside card component

//mount will fully render and mount the comp on the dom
//useful if ur comp interacts with dom or has some lifecyle method liek component did mount
//requires full dom api to work

//render will return a stack html file, in between shallow and mount