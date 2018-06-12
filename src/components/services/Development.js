import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import { ServicesDiv } from '../../theme/Grid';
import  { Title, AboutDesc, Subtitle } from '../../theme/Type';

class Development extends Component {
	render() {
		return (
      <ServicesDiv>

        <Title>DEVELOPMENT</Title>

        <AboutDesc>
        Psych Media is a full service agency that helps businesses best represent their brands across all digital platforms. We assist companies
        and individuals gain more traction and visibility by researching your market, assessing your competition, while analyzing
        your website trac and aligning your outreach campaigns with a consistent and targeted brand image.
        </AboutDesc>
<Subtitle>WHAT WE OFFER</Subtitle>
      </ServicesDiv>

    );
	}
}

export default Development;
