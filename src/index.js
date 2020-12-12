import React from 'react'
import ReactDOM from 'react-dom'

import './assets/main.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import Login from './components/Form/Login'
import Register from './components/Form/Register'
import Dashboard from './components/Dashboard/index'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
