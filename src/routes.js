import { HomePage, AboutPage } from '../pages/index.jsx';

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