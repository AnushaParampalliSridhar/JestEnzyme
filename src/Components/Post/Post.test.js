import React from 'react';
import {shallow} from 'enzyme';
import Post from './Post';
import {findByDataTestAttribute,checkProps} from '../../../Utils/index';

describe('Post Component', () => {

    describe('Checking PropTypes', () => {

        it('should render without any warning', () => {
            const expectedProps = {
                title : 'Test Post',
                content : 'Lorem Ipsum'
            };
            const propsError = checkProps(Post,expectedProps);
            expect(propsError).toBeUndefined();
        })


    })

    describe('Renders Post', () => {
        
        let component;

        beforeAll(() => {
            const props = {
                title : 'Test Post',
                content : 'Lorem Ipsum'
            };
            component = shallow(<Post {...props}/>);
        })

        it('should render without any errors', () => {
            const wrapper = findByDataTestAttribute(component,'postComponent');
            expect(wrapper.length).toBe(1);
        })

        it('should render a title', () => {
            const title = findByDataTestAttribute(component,'title');
            expect(title.length).toBe(1);
        })

        it('should render the content', () => {
            const content = findByDataTestAttribute(component,'content');
            expect(content.length).toBe(1);
        })

    })

    describe('Should not Render', () => {

        let component;

        beforeAll(() => {
            const props = {
                title : 'Test Post',
                content : 'Lorem Ipsum'
            };
            component = shallow(<Post/>);
        })

        it('should not be rendered', () => {
            const wrapper = findByDataTestAttribute(component,'postComponent');
            expect(wrapper.length).toBe(0);

        })

    })


})