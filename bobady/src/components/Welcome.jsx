import React from 'react';
import { Link } from 'react-router';

function Welcome() {
  return (
    <div>
      <h1>This is the welcome page!</h1>
      <Link to="/">Enter here!</Link>
    </div>
  )
}

export default Welcome;