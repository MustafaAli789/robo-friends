import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage'

let wrapper;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('rendes main page without crashin', () => {
    expect(wrapper.debug()).toMatchSnapshot()
});

it('filters robotos correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: '3',
            name: 'john',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: '3',
        name: 'john',
        email: 'john@gmail.com'
    }]);
});

it('filters robotos correctly2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: '3',
            name: 'john',
            email: 'john@gmail.com'
        }],
        searchField: 'q',
        isPending: false
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage {...mockProp32} />)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});