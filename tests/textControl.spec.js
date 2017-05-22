import React from 'react';
import {shallow} from 'enzyme';
import TextControl from '../src/components/shared/TextControl';
import renderer from 'react-test-renderer';

test('Text control render testing', () => {
        const textControl = renderer.create(
            <TextControl />
        );

        const tree = textControl.toJSON();
        expect(tree).toMatchSnapshot();
    }
);

test('Text control init value testing', () => {
        const textControl = renderer.create(
            <TextControl value="hello"/>
        );

        const tree = textControl.toJSON();
        expect(tree).toMatchSnapshot();
    }
);

test('Text control behavior testing', () => {
        const textControl = renderer.create(
            <TextControl />
        );

        const tree = textControl.toJSON();
        expect(tree).toMatchSnapshot();
    }
);

test('Text control behavior testing', () => {
        const textControl = shallow(
            <TextControl />
        );
        expect(textControl.find('input').prop('value')).toBe("");
        textControl.find('input').simulate("change", {
            target: {
                value: "hello"
            }
        });
        expect(textControl.find('input').prop('value')).toBe("hello");
    }
);