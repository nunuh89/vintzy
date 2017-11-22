import React from 'react';

const Navbar = ({logout, currentUser}) => {
  var button, greeting;

  if(currentUser) {
    button = <button onClick={() => logout()}>Log Out</button>;
    greeting = <h4>Hi, {currentUser.username}</h4>;
  } else {
    
  }

  return (
  <div>
      {greeting}
      {button}
  </div>
  );
};

export default Navbar;
