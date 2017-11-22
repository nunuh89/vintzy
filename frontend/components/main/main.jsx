import React from 'react';

const Main = ({logout, currentUser}) => {
  var button;

  if(currentUser) {
    button = <button onClick={() => logout()}>Log Out</button>;
  }

  return <div>
      <h4>Hi, {currentUser.username}</h4>
      {button}
  </div>;
};

export default Main;
