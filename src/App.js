import React, { Component } from 'react';
// function App() {
//   return (
//     <div>

//       <p>
//         Hello , World!!!
//         </p>
//     </div>
//   );
// }


class App extends Component {
  render() {
    // const greeting = "HiHi!";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log('TEST') }} />;
      </React.Fragment>
    )

  }
}
//下のjavascriptと同じ意味

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello,world!!!"
//     )
//   }
// }

export default App;
