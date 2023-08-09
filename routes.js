import { HomePage, AboutPage } from './pages';

export const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'Home'
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'About'
    },
];