import React from 'react';
import {shallow} from 'enzyme';
import FormControl from '../src/components/shared/FormControl';
import renderer from 'react-test-renderer';

test('Form control render testing', () => {
        const formControl = renderer.create(
            <FormControl />
        );

        const tree = formControl.toJSON();
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
        const onSubmitButtonClick = jest.fn();
        const formControl = shallow(
            <FormControl onSubmit={onSubmitButtonClick} />
        );
        formControl.find('form').simulate('submit')
        expect(onSubmitButtonClick.mock.calls.length).toBe(1);
    }
);

test('Form test mock', () => {
    const myMock = jest.fn();
    myMock('1');
    myMock('a', 'b');
    console.log(myMock.mock.calls);
    expect(myMock.mock.calls.length).toBe(2);
});