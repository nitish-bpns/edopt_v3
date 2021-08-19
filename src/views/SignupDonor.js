import React from 'react';
// import sections
import Donorsign from '../components/sections/Donorsign';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = (props) => {

  return (
    <>
      <Donorsign {...props} className="illustration-section-01" />
    </>
  );
}

export default Home;