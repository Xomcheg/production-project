import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('remove-btn')).toBe('remove-btn');
    });

    test('with additionsl class', () => {
        const expected = 'remove-btn class1 class2';
        expect(classNames('remove-btn', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'remove-btn class1 class2 class3';
        expect(classNames(
            'remove-btn',
            { class3: true, class4: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'remove-btn class1 class2 class3';
        expect(classNames(
            'remove-btn',
            { class3: true, class4: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
