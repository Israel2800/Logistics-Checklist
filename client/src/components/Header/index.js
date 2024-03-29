import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

  return (
    <header className="">
      <div className="">
        <Link to="/">
          <h1>Logistics Checklist</h1>
        </Link>

        
        {/* Feature LogIn access */}
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
// };

export default Header;
