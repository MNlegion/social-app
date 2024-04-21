import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="dashboard-nav">
      <ul>
        <li>
          <Link to="/posts" className='nav-tab'>Posts</Link>
        </li>
        <li>
          <Link to="/savedposts" className='nav-tab'>Saved Posts</Link>
        </li>
        <li>
          <Link to="/followers" className='nav-tab'>Followers</Link>
        </li>
        <li>
          <Link to="/test" className='nav-tab'>test</Link>
        </li>
        <li>
          <Link to="/test1" className='nav-tab'>test1</Link>
        </li>
        <li>
          <Link to="/test2" className='nav-tab'>test2</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
