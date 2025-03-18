import React from 'react';
import heroImage from '../../assets/hero_image2.png';
import './index.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="py-10 px-9 overflow-hidden">
      <div className="flex xs:flex-col md:mt-9 lg:mt-0 xs:justify-center md:flex-row md:justify-between items-center">
        <div className="xs:w-full md:w-1/2 xs:h-[45vh] xs:text-center md:text-left md:h-[50vh] backdrop-blur-sm px-2 rounded-lg">
          <h1 className="xs:text-2xl md:text-3xl xs:mb-5 lg:text-6xl font-semibold xs:leading-tight md:leading-tight lg:leading-tight text-white">
            Empowering <span className="text-beige">Minds</span>, Shaping <span className="text-beige">Future</span>
          </h1>
          <p className="xs:text-sm xs:text-center lg:text-base md:text-justify mb-8 text-light-white">
            Join a community that inspires excellence, fosters creativity, and nurtures lifelong learners.
          </p>
          <Link to="/admissions"><a
            href=""
            className="xs:px-3 xs:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 my-3 xs:text-base md:text-lg lg:text-xl text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
          >
            Apply for Admission
          </a></Link>
        </div>
        <div className="spin-container overflow-visible xs:-mt-6 sm:-mt-16 md:-mt-0 xs:w-[40vw] sm:w-1/3 md:w-1/4">
          <img src={heroImage} alt="Hero" className="xs:drop-shadow[1px_1px_0_black]"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
