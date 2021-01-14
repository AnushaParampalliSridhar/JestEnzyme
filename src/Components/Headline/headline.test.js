import React from 'react';
import {shallow} from 'enzyme';
import Headline from './headline';
import {checkProps} from '../../../Utils/index';

import {findByDataTestAttribute} from '../../../Utils/index'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline Component', () => {

    let component;

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header : 'Test Header',
                description : 'Test Description'
            }
            const propErrors = checkProps(Headline,expectedProps);
            expect(propErrors).toBeUndefined();
        })
    })

    describe('Have Props', () => {
        beforeEach(() => {
            const props = {
                header : 'Test Header',
                description : 'Test Description'
            }
            component = setUp(props);
        })

        it('should render without errors', () => {
            const result = findByDataTestAttribute(component,'headlineComponent');
            expect(result.length).toBe(1);
        })

        it('should render a H1', () => {
            const result = findByDataTestAttribute(component,'header');
            expect(result.length).toBe(1);
        })

        it('should render a description', () => {
            const result = findByDataTestAttribute(component,'description');
            expect(result.length).toBe(1);
        })
    })

    describe('Have No Props', () => {
        beforeEach(() => {
            component = setUp();
        })

        it('should not render', () => {
            const result = findByDataTestAttribute(component,'headlineComponent');
            expect(result.length).toBe(0);
        })
    })

})