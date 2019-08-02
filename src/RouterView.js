import React from 'react'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Orders from './pages/Orders'
import UserCenter from './pages/UserCenter'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

export default class RouterView extends React.Component{
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
    this.setState({
      appCount: ++this.state.appCount
    })
  }

  render () {

    console.log('Route', this.props)
    let state = this.state
    let navCurIndex = state.navCurIndex
    let nav = state.nav
    return (
      <Router>
        <nav className="TabBar maxScreenWidth">
          {nav.map((navItem, key) => {
              return (
                <Link to={navItem.to}
                      className={`${navCurIndex === key ? "active" : null}`}
                      key={key}
                      onClick={this.navClick.bind(this, key)} />
              )
            })}
        </nav>

        <div className="Route">
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Redirect to="/Home"/> }
            />

            {nav.map((navItem, key) => {
              return (
                <Route component={navItem.component}
                       path={navItem.to}
                       key={key}
                />
              )
            })}
          </Switch>
        </div>
      </Router>
    )
  }


}
