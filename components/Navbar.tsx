import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

const Navbar = () => {
  const scrollY = useScrollYPosition();

  return (
    <>
      <nav className='navbar'>
          <ul className='contact-info'>
            <li className='item'><img src="https://img.icons8.com/color/20/000000/gmail.png"/><span className='list-text'>- TheyNel3@Gmail.com</span></li>
            <li className='item'><img src="https://img.icons8.com/ios-filled/20/000000/github.png" className='list-image'/><span className='list-text'>- GithubLink</span></li>
            <li className='item'><img src="https://img.icons8.com/cute-clipart/20/000000/linkedin.png" className='list-image'/><span className='list-text'> - LinkedIn link</span></li>
          </ul>
          <div className='helper'>
            <p>{scrollY}</p>
          </div>
      </nav>

      {/*<hr className='upperBound seperator' />*/}

  <style jsx>{`
    .navbar {
      background-color: black;
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      position: fixed;
      left: 0;
      width: 100%;
      height: 70px;
      z-index: 100;
    }

    .contact-info {
      list-style-type: none;
      color: #fff;
      opacity: 1;
      margin: auto 0;
    }

    .item {
      display: flex;
      justify-content: center;
      margin-bottom: 2px;
    }

    .list-text {
      margin: auto 0 auto 4px;
    }

    .list-image {
      background-color: #fff;
      border-radius: 25%;
    }

    .helper {
      color: white;
    }

    .seperator {
      position: fixed;
      color: white;
      height: 5px;
      width: 100%;
      z-index: 150;
    }

    .upperBound {
      top: 350px;
    }

  `}</style>
    </>
  );
};

export default Navbar;