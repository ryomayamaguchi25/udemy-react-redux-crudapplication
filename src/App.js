import React, { Component } from 'react';
const App = () => {
  const profiles = [
    {
      name: 'taro',
      age: 10
    },
    {
      name: 'hanako',
      age: 5
    },
    {
      name: 'hanako'
    }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi im {props.name}, and I'm {props.age}years old!</div>
}

User.defaultProps = {
  age: '--'
}

export default App;
