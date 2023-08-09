export function createElement(type, props, ...children) {
    if (type === Fragment) {
        return {
            type: Fragment,
            props: { children }
        };
    }

    if (typeof type === "function") {
        return {
            type,
            props
        };
    }

    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                Array.isArray(child) ? { type: Fragment, props: { children: child } } :
                    typeof child === "object" ? child : createTextElement(child)
            ),
        },
    };
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

function isFunctionalComponent(component) {
    return typeof component === "function";
}

export function render(element, container) {
    try {
        console.log("Rendering element: ", element, " in ", container);

        if (typeof element === "string") {
            const textNode = document.createTextNode(element);
            container.appendChild(textNode);
            return;
        }

        console.log("Rendering func element?: ", isFunctionalComponent(element.type), element.type);

        if (isFunctionalComponent(element.type)) {
            const childElement = element.type(element.props);
            return render(childElement, container);
        }

        if (element.type === UIFramework.Fragment) {
            console.log("Rendering fragment: ", element);
            element.props.children.forEach(child => render(child, container));
            return;
        }

        const dom = element.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type);

        const isProperty = key => key !== "children";
        Object.keys(element.props)
            .filter(isProperty)
            .forEach(name => {
                dom[name] = element.props[name];
            });

        console.log("Appending children for:", element.type);
        element.props.children.forEach(child => render(child, dom));

        console.log("Appending element to container:", element.type);
        container.appendChild(dom);
    } catch (error) {
        console.error("Error in UIFramework render: ", error);
    }
}

const Fragment = Symbol("Fragment");

const UIFramework = {
    createElement,
    render,
    Fragment
};

export default UIFramework;