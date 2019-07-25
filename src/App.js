import React from 'react'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Orders from './pages/Orders'
import UserCenter from './pages/UserCenter'
import './App.scss'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class App extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      appCount: 0,
      navCurIndex: 0,
      nav: [
        { to: '/Home', component: Home},
        { to: '/News', component: Discover},
        { to: '/Orders', component: Orders},
        { to: '/UserCenter', component: UserCenter}
      ]
    }
  }

  navClick (key) {
    this.setState({
      navCurIndex: key
    })
  }

  render () {
    let state = this.state
    let navCurIndex = state.navCurIndex
    let nav = state.nav
    return (
      <Router>
        <nav className="TabBar maxScreenWidth">
          {nav.map((navItem, key) => {
              return (
                <Link to={navItem.to} className={`${navCurIndex === key ? "active" : null}`} key={key} onClick={this.navClick.bind(this, key)} />
              )
            })}
        </nav>

        <div className="Route">
          {nav.map((navItem, key) => {
              return (
                <Route component={navItem.component}
                       exact
                       path={navItem.to}
                       key={key}
                />
              )
            })}
        </div>
      </Router>
    )
  }


}
