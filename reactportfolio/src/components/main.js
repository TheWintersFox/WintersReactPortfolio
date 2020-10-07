import React from 'react';
import LandingPage from './landingpage';
// import About from './aboutme';
// import Contact from './contact';
// import Projects from './projects';
// import Resume from './resume';
import { BrowserRouter as Route, Switch } from "react-router-dom";

const Main = () => (
    <Route>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </div>
    </Route>
)

export default Main;