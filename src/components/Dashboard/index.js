import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from '../Navbar'
import SideBar from '../Dashboard/SideBar'
import View from '../Dashboard/View'
import TopBar from '../Dashboard/TopBar'
import Deposit from '../Deposit'

const pages = [
  {
    component: Deposit,
    path: '/deposit',
    name: 'Deposit',
  },
  {
    component: Deposit,
    path: '/transfer',
    name: 'Transfer',
  },
]

const Dashboard = () => {
  return (
    <Route
      render={({ location }) => {
        return (
          <div>
            <TopBar />
            <SideBar location={location} pages={pages} />
            <View>
              {pages.map((page, i) => (
                <Route key={i} exact path={page.path} component={page.component} />
              ))}
            </View>
          </div>
        )
      }}
    />
  )
}

export default Dashboard
