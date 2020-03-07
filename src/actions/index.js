//jsのオブジェクトのこと。
//プロジェクトの内部で、typeというキーとそれに対応する値を持つ　のがアクションの特徴。
//そのタイプの値はユニークな物ではなければならない


//VIEWを担当するコンポーネント側で使うので、エクスポートする。
// export const increment = () => { //アクションクリエーターを作る。
//     return { 
//         type:'INCREMENT'
//     }
// }
// export const decrement = () => { 
//     return {
//         type:'DECREMENT'
//     }
// }

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//レファクタリングする
//returnを消して、関数の{}を()に変更できる

export const INCREMENT = 'INCREMENT'//今後使っていくので、変数に入れて変更が効きやすくする
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})