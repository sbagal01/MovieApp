import React from 'react';
import Nav from './Nav.js';
// import Main from './Main.js';
import PageNotFound from './PageNotFound.js';
import Home from './Home.js';
import Login from './Login';
import New from './New.js';
import {Route,Switch,Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Nav></Nav>
    {/* <Main></Main> */}
        
    <Switch>
        <Route path="/home" exact>
            <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/new">
            <New></New>
        </Route>

        <Redirect from ="/" to="/home" exact>
        </Redirect>
        <Route>
        <PageNotFound>
        </PageNotFound>
        </Route>
    </Switch>
    </>
  )
}

export default App