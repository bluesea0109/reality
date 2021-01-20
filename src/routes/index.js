import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'

import { DataList, CustomLayout } from 'pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/datalist' />} />
      <CustomLayout>
        <Route path='/datalist' component={DataList} />
      </CustomLayout>
    </Switch>
  </Router>
)

export default Routes
