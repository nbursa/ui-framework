import UIFramework from './ui-framework.js';
import router from './router.js';
import './style.css';
import { HomePage, AboutPage } from './pages';
import {Navigation} from "./components/Navigation.jsx";

if (window) window.UIFramework = UIFramework;

router.registerRoute('/', HomePage);
router.registerRoute('/about', AboutPage);

const App = () => (
    <>
        <Navigation/>
        <div id="router-view"></div>
    </>
);

document.addEventListener("DOMContentLoaded", () => {
    const appElement = App();
    UIFramework.render(appElement, document.getElementById('app'));
    router.initializeRouter(document.getElementById('router-view'));
});