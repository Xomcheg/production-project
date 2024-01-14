import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widget/ErrorPage';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

interface ErrorBoundaryProps {
    children: ReactNode; // ReactNode - любой реакт элемент
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // componentDidCatch(error: Error, info: ErrorInfo) {
    //     // You can also log the error to an error reporting service
    //     console.log('FIND ERROR = ', error, info);
    // }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Error occurred:', error);
        this.setState({ hasError: true });
    }

    render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
        // You can render any custom fallback UI
            return (
                // <Suspense fallback={<PageLoader />}>
                <ErrorPage />
                // </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
