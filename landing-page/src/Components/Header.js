import React from 'react';

export default () => {
  return (
    <header
      className="App-header"
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <p style={{ marginRight: '25px' }}>LOGO</p>
      <p className="Header-title" style={{ marginRight: '25px' }}>
        THE RIDE SHARE SERVICE THAT PUTS <strong>YOU</strong> IN THE DRIVER'S
        SEAT
      </p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button>BECOME A DRIVER</button>
        <button>SIGN UP TO RIDE</button>
        <button>SIGN-IN</button>
      </div>
    </header>
  );
};
