import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      name: 'NoName',
      age: 3
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
