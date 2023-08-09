import UIFramework from './bin/ui-framework.js';
import router from './bin/router.js';
import './style.css';
import {Navigation} from "./components/Navigation.jsx";

const Main = () => (
    <>
        <Navigation/>
        <div id="router-view"></div>
    </>
);

document.addEventListener("DOMContentLoaded", () => {
    UIFramework.register();
    const appElement = Main();
    UIFramework.render(appElement, document.getElementById('app'));
    router.initializeRouter(document.getElementById('router-view'));
});