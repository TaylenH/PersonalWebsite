import React from 'react';

const Header = () => (
  <>
    <header className='page-header'>
        <div className='header-content'>
          <h1>Taylen Heyder-Nelson</h1>
          <h2>Software Developer</h2>
        </div>
      </header>

    <style jsx>{`
      .page-header {
        height: 100%;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        background-image: url(${require('../public/labtop.jpg')});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
      }

      .header-content {
        margin: auto;
        color: #fff;
        text-align: center;
      }

      @media(min-width: 1600px) {
        .page-header {
          height: 100%;
        }
      }
    `}</style>
  </>
);

export default Header;

//background-image: url(${require('../public/labtop.jpg')});