import { configure, shallow } from 'enzyme';
import React from 'react';

import Project from './Project';
import appObj from '../data.json';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('The <Project /> component', function() {
    const wrapper = shallow(<Project projectName={appObj.projects[0].name}/>);
    it('has the description of the project', function() {
        expect(wrapper.find('h4').text()).toEqual(appObj.projects[0].name);
    });
});