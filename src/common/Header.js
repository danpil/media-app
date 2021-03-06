import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-default">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        {' | '}
        <Link to="library" activeClassName="active">
          Library
        </Link>
      </nav>
    </div>
  );
};

export default Header;
