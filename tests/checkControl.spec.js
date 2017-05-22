import React from 'react';
import {shallow} from 'enzyme';
import CheckboxControl from '../src/components/shared/CheckboxControl';
import renderer from 'react-test-renderer';

test('Checkbox test rendering', () => {
    const component = renderer.create(
        <CheckboxControl />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onChange();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Checkbox test state changing', () => {
    const checkbox = shallow(
        <CheckboxControl />
    );

    expect(checkbox.find('input').prop('checked')).toBe(false);
    checkbox.find('input').simulate('change');
    expect(checkbox.find('input').prop('checked')).toBe(true);
});