import {
    fireEvent, screen,
} from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 1,
                    },
                },
            },
        );
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
    test('Counter decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 5,
                },
            },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        // const toggleBtn = screen.getByTestId('sidebar-toggle');
        // fireEvent.click(toggleBtn);
        // expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        // fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });
    test('Counter increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 5,
                },
            },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        // const toggleBtn = screen.getByTestId('sidebar-toggle');
        // fireEvent.click(toggleBtn);
        // expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        // fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });
});
