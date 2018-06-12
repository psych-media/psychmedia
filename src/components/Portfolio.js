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
import { Link } from 'react-router-dom';

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
<div className="container">
 <Link to="/portfolio/bantam" className="portfolioLink">
  <img src={BantamSq} alt='Bantam Bagels' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Bantam Bagels</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/megpies" className="portfolioLink">
  <img src={MegpiesSq} alt='Megpies' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Megpies</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/concentric" className="portfolioLink">
  <img src={ConcentricSq} alt='Concentric' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Concentric</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/everlast" className="portfolioLink">
  <img src={EverlastSq} alt='Everlast Climbing' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Everlast Climbing</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/hanys" className="portfolioLink">
  <img src={HanySq} alt='Hanys Fire Tonic' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Hanys Fire Tonic</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/leadership" className="portfolioLink">
  <img src={LeadershipSq} alt='Leadership Roundtable' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Leadership Roundtable</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/kumiki" className="portfolioLink">
  <img src={KumikiSq} alt='Kumiki Climbing' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Kumiki Climbing</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/rutherford" className="portfolioLink">
  <img src={RutherfordSq} alt='Rutherford and Meyer' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Rutherford & Meyer</div>
  </div>
 </Link>
 </div>
</PortfolioItem>
<PortfolioItem>
<div className="container">
 <Link to="/portfolio/litfest" className="portfolioLink">
  <img src={LitfestSq} alt='Chicago Tribunes Lit Fest' className="portfolioImg" />
  <div className="overlay">
    <div className="text">Lit Fest</div>
  </div>
 </Link>
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
