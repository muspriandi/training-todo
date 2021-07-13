import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Todo from './modules/Todo/Todo';
import Signup from './modules/Signup/Signup';
import Signin from './modules/Signin/Signin';

class App extends Component{

  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path={["/", "/signin", "/login"]}>
              <Signin />
            </Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
