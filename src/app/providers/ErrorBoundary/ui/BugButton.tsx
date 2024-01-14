import { useState } from 'react';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
    className?: string;
}

export function BugButton({ className }: BugButtonProps) {
    const [error, setError] = useState(false);

    const toggleError = () => {
        setError((prev) => !prev);
    };
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={toggleError}>
            Throw Error
        </Button>
    );
}
