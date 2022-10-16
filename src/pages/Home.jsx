

import React from 'react'
import { Container } from 'reactstrap'
import HeroSection from '../components/Layout/ui/HeroSection'
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