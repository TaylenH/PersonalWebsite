import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import TechAndSkills from '../components/TechAndSkills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import ProjectArray from '../utils/project_array';

const Index: NextPage<null> = () => {
  return (
    <>
        <Head>
          <title>Taylen Heyder-Nelson</title>
          <meta charSet="UTF-8" />
          <meta name='description' content='A sample showcase of the projects I have built, and the skills I have learned' />
        </Head>
        
        <Navbar />
        <Header />
        <AboutMe />
        <TechAndSkills />
        <Projects ProjectArray={ProjectArray} />
        <Footer />
      

      <style global jsx>{`
        body, html {
          height: 100%;
        }

        body {
          background-color: white;
          background-image: url(${require('../public/labtop.jpg')});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        }

        * {
          margin: 0;
          padding: 0;
        }

        #__next{
          height: 100%;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Index;