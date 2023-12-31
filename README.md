###### *NOTE: This is learning project and it is WIP!*

# UIFramework

UIFramework is a lightweight, custom JavaScript framework for building user interfaces. With JSX-like syntax, it provides developers with a simple way to create and render UI components.


## Table of Contents
- [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
- [Usage](#usage)
    * [Main](#main)
    * [Pages](#pages)
    * [Components](#components)
    * [Routes](#routes)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

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

## Usage

### Main:
* setup your layout, wrappers etc

```jsx
// src/main.jsx
import {Navigation} from "./src/components/Navigation.jsx";

const Main = () => (
    <>
        <Navigation/>
        <div id="router-view"></div>
    </>
);
```


### Pages:
* create modular pages

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


### Components:
* build custom components

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


### Routes:
* configure custom routes

```jsx
// src/routes.js
import {HomePage, AboutPage} from './index';

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


## Features

- JSX-like syntax: Easily describe your UI using a syntax you're already familiar with.
- Custom rendering: Render your components efficiently and intuitively.
- Lightweight: No heavy dependencies or unnecessary overhead.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is open-source. See the LICENSE file for more information.

## Acknowledgments
Thanks to the open-source community for inspiration and best practices.