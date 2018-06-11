import React, { Component } from 'react';
import { FullWrapper, PortfolioDiv, PortfolioItem } from '../theme/Grid';
import  { Title, Subtitle, AboutDesc } from '../theme/Type';
import BantamSq from '../images/BantamSq.jpg';
import MegpiesSq from '../images/MegpiesSq.jpg';
import ConcentricSq from '../images/ConcentricSq.jpg';
import EverlastSq from '../images/EverlastSq.jpg';
import HanySq from '../images/HanySq.jpg';
import LeadershipSq from '../images/LeadershipSq.jpg';
import KumikiSq from '../images/KumikiSq.jpg';
import RutherfordSq from '../images/RutherfordSq.jpg';
import LitfestSq from '../images/LitfestSq.jpg';
import { Route,  Link } from 'react-router-dom';

class Portfolio extends Component {
	render() {
		return (
			<FullWrapper>
				<Title>Portfolio</Title>
				<AboutDesc>
				Psych Media is a full service agency that helps businesses best represent their
				brands across all digital platforms. We assist companies and individuals gain more
				traction and visibility by researching your market, assessing your competition, while
				analyzing your website trac and aligning your outreach campaigns with a consistent
				and targeted brand image.</AboutDesc>
<Subtitle>OUR WORK</Subtitle>
<PortfolioDiv>

<PortfolioItem>
<div class="container">
 <Link to="/portfolio/bantam" class="portfolioLink">
  <img src={BantamSq} alt='Bantam Bagels' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Bantam Bagels</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/megpies" class="portfolioLink">
  <img src={MegpiesSq} alt='Megpies' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Megpies</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/concentric" class="portfolioLink">
  <img src={ConcentricSq} alt='Concentric' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Concentric</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/everlast" class="portfolioLink">
  <img src={EverlastSq} alt='Everlast Climbing' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Everlast Climbing</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/hanys" class="portfolioLink">
  <img src={HanySq} alt='Hanys Fire Tonic' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Hanys Fire Tonic</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/leadership" class="portfolioLink">
  <img src={LeadershipSq} alt='Leadership Roundtable' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Leadership Roundtable</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/kumiki" class="portfolioLink">
  <img src={KumikiSq} alt='Kumiki Climbing' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Kumiki Climbing</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/rutherford" class="portfolioLink">
  <img src={RutherfordSq} alt='Rutherford and Meyer' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Rutherford & Meyer</div>
  </div>
 </a>
 </div>
</PortfolioItem>
<PortfolioItem>
<div class="container">
 <a href="/portfolio/litfest" class="portfolioLink">
  <img src={LitfestSq} alt='Chicago Tribunes Lit Fest' class="portfolioImg" />
  <div class="overlay">
    <div class="text">Lit Fest</div>
  </div>
 </a>
 </div>
</PortfolioItem>
</PortfolioDiv>

<Subtitle>MORE SITES</Subtitle>
<div className="row">
    <div className="col"><a href="#">Indiemediary</a></div>
    <div className="col"><a href="#">Indiemediary</a></div>
    <div className="col"><a href="#">Indiemediary</a></div>
</div>
<div className="row">
    <div className="col"><a href="#">ENB Coaching</a></div>
    <div className="col"><a href="#">ENB Coaching</a></div>
    <div className="col"><a href="#">ENB Coaching</a></div>
</div>
<div className="row">
    <div className="col"><a href="#">Musicians for Musicians</a></div>
    <div className="col"><a href="#">Musicians for Musicians</a></div>
    <div className="col"><a href="#">Musicians for Musicians</a></div>
</div>
			</FullWrapper>
		);
	}
}

export default Portfolio;
