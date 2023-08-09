import UIFramework from './core/ui-framework.js';
import router from './core/router.js';
import './style.css';
import {Navigation} from "../components/Navigation.jsx";

if (window) window.UIFramework = UIFramework;

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