import React, {Component} from 'react'

import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import { Main } from './components'
import Result from './components/Result'

export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/home" component={Main} />
            <Route path="/personality_types" component={Main} />
            <Route path="/results" component={Result} />
          </Switch>
        </Main>
      </Router>
    )
  }
}
