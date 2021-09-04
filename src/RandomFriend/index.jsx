import React from 'react';
import random from './random.module.css';

const RandomFriend = (props) => {
  return (
    <section className={random.wrapper}>
      <h3 className={random.title}>Подписаться</h3>
      <div className={random.manBox}>
        <div className={random.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-11.jpg" alt="avatar" />
        </div>
        <div className={random.links}>
          <a href="#" className={random.name}>Diand Amber</a>
          <a href="#" className={random.followLink}>Подписаться</a>
        </div>
      </div>
      <div className={random.manBox}>
        <div className={random.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-12.jpg" alt="avatar" />
        </div>
        <div className={random.links}>
          <a href="#" className={random.name}>Cris Haris</a>
          <a href="#" className={random.followLink}>Подписаться</a>
        </div>
      </div>
      <div className={random.manBox}>
        <div className={random.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-13.jpg" alt="avatar" />
        </div>
        <div className={random.links}>
          <a href="#" className={random.name}>Brian Walton</a>
          <a href="#" className={random.followLink}>Подписаться</a>
        </div>
      </div>
      <div className={random.manBox}>
        <div className={random.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-14.jpg" alt="avatar" />
        </div>
        <div className={random.links}>
          <a href="#" className={random.name}>Olivia Steward</a>
          <a href="#" className={random.followLink}>Подписаться</a>
        </div>
      </div>
      <div className={random.manBox}>
        <div className={random.avatar}>
          <img src="https://themified.com/friend-finder/images/users/user-15.jpg" alt="avatar" />
        </div>
        <div className={random.links}>
          <a href="#" className={random.name}>Sophia Page</a>
          <a href="#" className={random.followLink}>Подписаться</a>
        </div>
      </div>
    </section>
  )
}

// const rightSidebar = document.querySelector('.wrapper')
// window.addEventListener('scroll', () => {
//   if (document.documentElement.scrollTop > 100) {
//     rightSidebar.classList.add('sticky');
//   } else {
//     rightSidebar.classList.remove('sticky');
//   }
// });

export default RandomFriend;