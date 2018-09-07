import React from 'react';

import Colors from '../Assets/Colors';

export default () => {
  return (
    <div style={{ padding: '20px 50px' }}>
      <p style={{ color: Colors.green, fontSize: '1.2em' }}>Additional Info</p>
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};
