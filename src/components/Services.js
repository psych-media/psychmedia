import React, { Component } from 'react';
import { ServicesDiv } from '../theme/Grid';
import  { Title, Subtitle, AboutDesc } from '../theme/Type';
import ServicesDev from './services/ServicesDev';
import ServicesDesign from './services/ServicesDesign';

class Services extends Component {
	render() {
		return (
			<ServicesDiv>
				<Title>Services</Title>
				<AboutDesc>
        Psych Media is a full service agency that helps businesses best represent their
brands across all digital platforms. We assist companies and individuals gain more
traction and visibility by researching your market, assessing your competition, while
analyzing your website trac and aligning your outreach campaigns with a consistent
and targeted brand image.</AboutDesc>
<Subtitle>WHAT WE OFFER</Subtitle>
<ServicesDev />
<ServicesDesign />
<div className="row">
    <div className="col servicesSq light-blue">Monthly Maintenance</div>
    <div className="col servicesSq blue">Domain & Hosting</div>
    <div className="col servicesSq purple">App Design</div>
    <div className="col servicesSq magenta">Marketing</div>
</div>
			</ServicesDiv>
		);
	}
}

export default Services;
