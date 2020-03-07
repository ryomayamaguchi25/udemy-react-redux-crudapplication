import { INCREMENT, DECREMENT } from '../actions'

//状態の初期値を定義する。状態はオブジェクトとして定義する。
//カウンターの初期値は０　初期状態のオブジェクトを入れる変数名はイニシャルステイと問い名前にする
const initialState = { value: 0 }

// reducers/index.jsに渡せるようにexporttする
//reducerは関数として定義する。引数は二つ
export default (state = initialState, action) => {
    switch (action.type) {//actionのtypeによって処理が分岐するので、switch文を書く
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}
// export default () => {
//     console.log('aa');
// }