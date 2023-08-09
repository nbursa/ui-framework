import {routes} from "../routes.js";

export const Navigation = () => (
    <nav>
        {
            routes.map(route => (
                <a className="link" href={route.path} key={route.path}>{route.name}</a>
            ))
        }
    </nav>
);