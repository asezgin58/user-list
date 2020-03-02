import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, User} from "./pages";
import {ScrolltoTop} from "./components"
import PublicRoute from "./_route/PublicRoute";

const App = () => {

    return (
        <Router>
            <ScrolltoTop>
                <Switch>
                    <PublicRoute exact path="/" component={Home}/>
                    <PublicRoute path="/user" component={User}/>
                </Switch>
            </ScrolltoTop>
        </Router>
    );
};

export default App as any
