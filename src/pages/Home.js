import React from 'react'
import index from '../store/index'
import { Button, Input } from 'antd'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    console.log('home', this.props.appCount)
    this.state = {
      appCount: index.getState()
    }
  }


  add = () => {
    index.dispatch({ type: 'INCREMENT' });
    this.setState({
      appCount: index.getState()
    })
  }

  minus = () => {
    index.dispatch({ type: 'DECREMENT' });
    this.setState({
      appCount: index.getState()
    })
  }

  input1 = (e) => {
    console.log('没有防抖', e.currentTarget.value)
  }

  debounce = (fn) => {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
      clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
      timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        console.log('111')
        fn.apply(this, arguments);
      }, 2000);
    };
  }

  aaa = () => {
    console.log('aaa')
  }

  input2 = (e) => {
    return this.debounce(a)
  }


  render() {
    return (
      <div className="container">
        <h1>首页</h1>
        <div>
          <Button onClick={this.add}>增加</Button>
          <Button onClick={this.minus}>减少</Button>

          <div>
            <Input type="text" onChange={this.input1.bind(this)}/>
            <Input type="text" onChange={this.debounce(this.aaa)}/>
          </div>
        </div>
      </div>
    );
  }
}
