import React from 'react';
import { DiDatabase, DiReact, DiCss3, DiBootstrap, DiHtml5, DiJavascript1, DiPython, DiJava, DiFirebase } from 'react-icons/di';
import { IoLogoVue, IoLogoVercel } from "react-icons/io5";
import { SiMysql, SiFlask, SiSpring, SiFigma } from 'react-icons/si'
import { HiDesktopComputer } from 'react-icons/hi'
import { GiPencilRuler } from 'react-icons/gi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, InnerList, ListInnerItem, ListInnerLibrary } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world thus far.
      From Back-End to Front-End to Full-Stack Development with a hint of Design Thinking as well.
    </SectionText>
    <List>
      <ListItem>
        <HiDesktopComputer size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with:</ListParagraph>
          <InnerList>
            <ListInnerItem>
              HTML
              <DiHtml5 style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              CSS
              <DiCss3 style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Bootstrap
              <DiBootstrap style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem> 
            <ListInnerItem>
              Javascript
              <DiJavascript1 style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Vue.js
              <IoLogoVue style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem> 
            <ListInnerItem>
              React
              <DiReact style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Vercel
              <IoLogoVercel style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
          </InnerList>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with:</ListParagraph>
          <InnerList>
            <ListInnerItem>
              Python
              <DiPython style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Java
              <DiJava style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              MySQL
              <SiMysql style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem> 
            <ListInnerItem>
              NoSQL Firebase
              <DiFirebase style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Flask Framework
              <SiFlask style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem> 
            <ListInnerItem>
              Spring Framework
              <SiSpring style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              SQLAlchemy
              <DiPython style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Pandas
              <DiPython style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Openpyxl
              <DiPython style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
            <ListInnerItem>
              Streamlit
              <DiPython style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
          </InnerList>
        </ListContainer>
      </ListItem>

      <ListItem>
        <GiPencilRuler size='3rem' />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>Experience with:</ListParagraph>
          <InnerList>
            <ListInnerItem>
              Figma
              <SiFigma style={{marginBottom: '-2px', marginLeft: '5px'}} />
            </ListInnerItem>
          </InnerList>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
