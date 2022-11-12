import React from 'react';
import HeroSection from '../components/Layout/ui/HeroSection';
import LiveAuction from '../components/Layout/ui/Live-auction/LiveAuction';

const Home = () => {
    return (
      <>
        <HeroSection></HeroSection>
        <LiveAuction></LiveAuction>
      </>
    );
};

export default Home