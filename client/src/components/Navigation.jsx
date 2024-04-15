import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="dashboard-nav">
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/savedposts">Saved Posts</Link>
        </li>
        <li>
          <Link to="/followers">Followers</Link>
        </li>
        <li>
          <Link to="/dashboard/test">test</Link>
        </li>
        <li>
          <Link to="/dashboard/test">test</Link>
        </li>
        <li>
          <Link to="/dashboard/test">test</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
