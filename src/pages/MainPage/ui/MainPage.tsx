import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('Главная страница')}</h2>
            <BugButton />
            <Counter />
        </div>
    );
};

export default MainPage;
