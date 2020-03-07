import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';


class App extends Component {

  render() {
    const props = this.props;
    console.log(this.state);
    return (
      <React.Fragment>
        <div>value:{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//ステートの情報からコンポーネントに必要な情報を取り出して、、コンポーネント内のプロップスとしてマッピングする機能を持つ関数
//引数には　状態のトップレベルを示すstateをかいて、どういったオブジェクトをpropsとして対応させるのか　を戻り値として定義する
const mapStateToProps = state => ({ value: state.count.value })


// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App);
