import React from 'react';
import {shallow} from 'enzyme';
import {findByDataTestAttribute,checkProps} from '../../../Utils/index';
import Button from './button';

describe('Button Component', () => {

    describe('Checking Prop Types', () => {
        
        it('should not throw a warning', () => {
            const expectedProps = {
                btnText : 'Test Button Text',
                emitEvent : () => {}
            }
            const propsError = checkProps(Button,expectedProps);
            expect(propsError).toBeUndefined();
        })

    })

    describe('Renders Button', () => {

        let component;

        beforeEach(() => {
            const props = {
                btnText : 'Test Button Text',
                emitEvent : () => {}
            }
            component = shallow(<Button {...props} />);
        })

        it('should render without any errors', () => {
            const wrapper = findByDataTestAttribute(component,'buttonComponent');
            expect(wrapper.length).toBe(1);
        })

    })

})