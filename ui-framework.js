export function createElement(type, props, ...children) {
    if (type === Fragment) {
        return {
            type: Fragment,
            props: { children }
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

export function render(element, container) {
    console.log("Rendering element:", element);

    if (element.type === UIFramework.Fragment) {
        console.log("Rendering fragment:", element);
        element.props.children.forEach(child => render(child, container));
        return;
    }

    const dom =
        element.type === "TEXT_ELEMENT"
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
}


const Fragment = Symbol("Fragment");

const UIFramework = {
    createElement,
    render,
    Fragment
};

export default UIFramework;