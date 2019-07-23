import React from 'react';
import { Button } from 'antd'
import './App.css';
import './assets/less/common.less';

function App() {
  return (
    <div className="App">
      <Button type="primary">antd Button</Button>
      <div className="red">红字</div>
    </div>
  );
}

export default App;
