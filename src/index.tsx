import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/storeProvider';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}
render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                {/* <ErrorBoundary> */}
                <App />
                {/* </ErrorBoundary> */}
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
    ,
    document.getElementById('root'),
);
