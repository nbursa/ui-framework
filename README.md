# UIFramework

UIFramework is a lightweight, custom JavaScript framework for building user interfaces. With JSX-like syntax, it provides developers with a simple way to create and render UI components.

## Getting Started

### Prerequisites

Ensure you have a modern web browser and a recent version of Node.js installed.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nbursa/ui-framework
```
2. Navigate to the project directory:
```bash
cd ui-framework
```
3. Install the dependencies:
```bash
npm install
```

### Usage

Components:
```jsx
// src/components/Navigation.jsx
import {routes} from "../routes.js";

export const Navigation = () => (
    <nav>
        {routes.map(route => (
            <a className="link" href={route.path} key={route.path}>{route.name}</a>
        ))}
    </nav>
);
```

Pages:

```jsx
// src/pages/home.jsx
import {Component} from "./src/components/Component.jsx";

export const HomePage = () => (
    <>
        <Component/>
        <h1>Hello, UIFramework!</h1>
        <p>This is a simple test.</p>
    </>
);
```

Routes:

```jsx
// src/routes.js
import {HomePage, AboutPage} from './src/pages';

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
```

```jsx
// src/App.jsx
import {Navigation} from "./src/components/Navigation.jsx";

const App = () => (
    <>
        <Navigation/>
        <div id="router-view"></div>
    </>
);
```

### Features

JSX-like syntax: Easily describe your UI using a syntax you're already familiar with.
Custom rendering: Render your components efficiently and intuitively.
Lightweight: No heavy dependencies or unnecessary overhead.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License
This project is open-source. See the LICENSE file for more information.

### Acknowledgments
Thanks to the open-source community for inspiration and best practices.