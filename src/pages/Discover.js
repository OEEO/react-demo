import React from 'react'
import index from '../store/index'

export default class Discover extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      appCount: index.getState()
    }
  }

  render () {
    return (
      <div className="container">
        <h1>发现</h1>
        <div>state { this.state.appCount }</div>
      </div>
    )
  }


}
