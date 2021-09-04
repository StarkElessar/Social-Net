import React from 'react';
import sidebar from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <section className={sidebar.wrapper}>
      <nav className={sidebar.navbar}>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Musics</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar;