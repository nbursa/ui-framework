import UIFramework from './ui-framework.js';

const routes = {};

export function registerRoute(path, component) {
    routes[path] = component;
    console.log(`Registered route: ${path}`);
}

export function navigateTo(path, container) {
    window.history.pushState(null, null, path);
    updateRoute(container);
}

export function initializeRouter(container) {
    console.log(`initializeRouter: `, container);
    if (!container) {
        console.error("Router initialization error: Container is null or undefined.");
        return;
    }
    window.addEventListener('popstate', () => updateRoute(container));
    console.log("Router initialization")
    updateRoute(container);
}

function updateRoute(container) {
    console.log("Updating route: ", container)
    const path = window.location.pathname;
    console.log(`Navigating to path: ${path}`);
    const component = routes[path];
    console.log("Component for path:", path, typeof component, component);
    console.log("before Component; ", typeof component, component)

    if (typeof component === "function") {
        const element = { type: component, props: {} };
        console.log("function component; typeof element, container: ", typeof element, container)
        UIFramework.render(element, container);
    } else {
        console.error(`Error: No valid component found for path: ${path}`);
    }
}

export default {
    registerRoute,
    navigateTo,
    initializeRouter
};