import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"

const LoginPage = () => {
  return (
    <Router>
        <Switch>
            <Route exact path = '/'><p>home page</p></Route>
            <Route exact path='/userpage' component={UserPage}></Route>
            
        </Switch>
    </Router>

  )
}

export default LoginPage