import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Sean's Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello! I am Teo Sean, an aspiring Full Stack Developer.
        I am passionate about building products that bring about meaning, 
        benefits and a positive impact on the users that use them.
        <br /><br />
        Feel free to take a look at my portfolio and do not hesitate to connect with me via
        any of my socials at the top right corner of the web page! Alternatively, you may
        drop me an email for anything under the sun by clicking on the 
        About button in the navbar 😎, thank you for your time!
      </SectionText>
      {/* to update this pointer to email form page at bottom of webpage when done */}
      <Button onClick={() => window.location = '#project'}>
        Learn more about my projects!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;