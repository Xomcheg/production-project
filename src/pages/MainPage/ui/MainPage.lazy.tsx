import { lazy } from 'react';

// export const LazyMainPage = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     // Так не делать, исключительно для теста suspense
//     setTimeout(() => resolve(import('./MainPage')), 1000);
// }));

export const LazyMainPage = lazy(() => import('./MainPage'));
