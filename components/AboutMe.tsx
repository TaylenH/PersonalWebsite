import React from 'react';

const AboutMe = () => {


  return (
    <>
      <section className="aboutMeSection">
        <div className="aboutMe">
          <h2 className="AboutHeader">About me</h2>
          <br/>
          <p className="description">
          Hi, my name is Taylen! I am a young, self-taught software developer, with a passion for learning. I started programming in high
           school, and have spent most of my time since then 
           studying and coding. My favorite environment, over the last few years, is The React Ecosystem.
          </p>
        </div>
      </section>

  <style jsx>{`
    .aboutMeSection {
      min-height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: white;
      background-color: black;
      clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
    }

    .aboutMe{
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .description{
      margin-top: 10px;
      text-align: center;
    }
  `}</style>
    </>
  );
};

export default AboutMe;