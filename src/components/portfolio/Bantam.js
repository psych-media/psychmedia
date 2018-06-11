import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import bantamPages from '../../images/Isometric-Web-Mockup.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, Subtitle, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';

import { Parallax, Background } from 'react-parallax';
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};

class Bantam extends Component {

	render() {
		return (
      <div>
      <Title>BANTAM BAGELS</Title>

      <AboutDesc>
      In conjuction with NYC based design agency Strong Studio our development team
launched the redesigned online storefront for Bantam Bagels. </AboutDesc>

<PortfolioDiv>
<ProjectsDiv>

<Parallax strength={-500} bgWidth="100%" bgHeight="500px">
     <div style={{height: 500, width: 1280}}> </div>
     <Background className="custom-bg" style={insideStyles}>
       <img src={bantamHome} alt="fill murray" />
     </Background>
   </Parallax>
   </ProjectsDiv><ProjectsDiv>
   <div class="row">
   <div class="col">

        <OverviewImg>
        <img src={devIcon} class="servicesImg" alt="Psych Media"/>

        </OverviewImg>
        </div>
        <div class="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
        What would be the use of having a website and an ecient marketing campaign with proper analytical tools? Make sure you are tracking all of your website activity and evaluating performance in order to adapt to your viewer base and deliver exactly what they are seeking.
        </PortfolioText>
        </OverviewText>
        </div>
        </div>
        </ProjectsDiv><ProjectsDiv>

        <Parallax strength={300} bgWidth="100%" bgHeight="300px">
             <div style={{height: 500, width: 1280}}> </div>
             <Background className="custom-bg" style={insideStyles2}>
               <img src={bantamPages} alt="Bantam Pages" />
             </Background>
           </Parallax>
</ProjectsDiv>
<ProjectsDiv>
<div class="row">
           <div className="col col-md-8">
           <PortfolioTitle>SITE DEVELOPMENT</PortfolioTitle>

           <PortfolioText>
           Psych Media developed an E-Commerce online store for Bantam Bagels to sell their products. The
           store was developed on the Shopify platform with a highly customized template. We added
           additional functionality with private apps and worked directly with a fulfillment center to allow for
           seamless integration of their ordering process.
           </PortfolioText>
           </div>
           <div className="col-6 col-md-4">
           <a href="https://www.bantambagels.com" target="_blank">
             <Button size="lg" gradient="blue">
             Visit the Site
             </Button>
          </a>
          </div>
          </div>
          </ProjectsDiv>
      </PortfolioDiv>
</div>
    );
	}
}

export default Bantam;
