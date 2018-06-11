import React, { Component } from 'react';
import { FullWrapper, ProcessDiv } from '../theme/Grid';
import  { Title, Subtitle, AboutDesc } from '../theme/Type';
import Think from './about/Think';
import Create from './about/Create';
import Develop from './about/Develop';
import Share from './about/Share';
import Perform from './about/Perform';
import Maintain from './about/Maintain';


class About extends Component {
	render() {
		return (
			<FullWrapper>
				<Title>About Us</Title>
				<AboutDesc>
				Psych Media is a full service agency that helps businesses best represent their
				brands across all digital platforms. We assist companies and individuals gain more
				traction and visibility by researching your market, assessing your competition, while
				analyzing your website trac and aligning your outreach campaigns with a consistent
				and targeted brand image.</AboutDesc>
        <Subtitle>OUR PROCESS</Subtitle>
          <ProcessDiv>
          <Think />
          <Create />
          <Develop />
          <Share />
          <Perform />
          <Maintain />
        </ProcessDiv>

			</FullWrapper>

		);
	}
}

export default About;
