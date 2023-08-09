import UIFramework from './ui-framework.js';

const App = () => (
    <>
        <h1>Hello, UIFramework!</h1>
        <p>This is a simple test.</p>
    </>
);

document.addEventListener("DOMContentLoaded", () => {
    UIFramework.render(App(), document.getElementById('app'));
});