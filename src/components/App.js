import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {//カウンタークラスのインスタンスが作成された際に、コンストラクターのメソッドが呼び出される。（初期化する）
    super(props)//
    this.state = { count: 0 }//初期化した後に、オブジェクトが作られる。今回はcounteが作られた。
  }
  handlePlusButton = () => {
    const CurrentCount = this.state.count;
    this.setState({ count: this.state.count + 1 })//setStateが実行されると、renderが再度描画される。
  }
  handleMinusButton = () => {
    const CurrentCount = this.state.count;
    this.setState({ count: this.state.count - 1 })
    if (this.state.count % 2 == 0) {
    }
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
