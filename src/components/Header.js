import React from 'react';

const Header = ({ onDarkModeClick, appMode }) => {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {appMode ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
