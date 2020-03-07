import { combineReducers } from 'redux';
import count from './count';//actionで定義したactionのtypeをインポートする。

export default combineReducers({ count });
// export default combineReducers({ foo , bar , baz });　複数の指定もできる

