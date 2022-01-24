import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import CartPopup from './components/CartPopup';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={`/`} component={CartPopup} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
