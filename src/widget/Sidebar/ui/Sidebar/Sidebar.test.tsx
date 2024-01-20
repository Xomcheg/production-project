import {
    fireEvent, screen,
} from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Button', () => {
    test('render', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar); // хок withTranslation необходим для того что бы подружить библиотеку i18next с тестами
        // создадим хелпер renderWithTranslation
        // render(<SidebarWithTranslation />);
        // renderWithTranslation(<Sidebar />);
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('test toggle', () => {
        // renderWithTranslation(<Sidebar />);
        componentRender(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        screen.debug();
    });
});
