import React from 'react';
import {shallow} from 'enzyme';
import FormControl from '../src/components/shared/formControl';
import renderer from 'react-test-renderer';

test('Form control render testing', () => {
        const formControl = renderer.create(
            <FormControl />
        );

        let tree = formControl.toJSON();
        expect(tree).toMatchSnapshot();
    }
);

test('Form control render inside', () => {
        const formControl = shallow(
            <FormControl>
                <label>Hello</label>
            </FormControl>
        );

        expect(formControl.find('label').text()).toBe("Hello");
    }
);


test('Form control submit testing', () => {
        let onSubmitButtonClick = jest.fn();
        const formControl = shallow(
            <FormControl onSubmit={onSubmitButtonClick} />
        );
        formControl.find('input').simulate('click')
        expect(onSubmitButtonClick.mock.calls.length).toBe(1);
    }
);