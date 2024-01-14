import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}
render(

    <BrowserRouter>

        <ThemeProvider>

            {/* <ErrorBoundary> */}
            <App />
            {/* </ErrorBoundary> */}
        </ThemeProvider>

    </BrowserRouter>,
    document.getElementById('root'),
);
