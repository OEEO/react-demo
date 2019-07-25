import React from 'react'
import store from '../store'
import { Button } from 'antd'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    console.log('home', this.props.appCount)
    this.state = {
      appCount: 1
    }
  }

  add = () => {
    this.setState({
      appCount: ++this.state.appCount
    })
  }



  render() {

    return (
      <div className="container">
        <h1>首页</h1>
      </div>
    );
  }
}
