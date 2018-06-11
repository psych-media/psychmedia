import React, { Component } from 'react';
import maintainIcon from '../../images/Maintain.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Maintain extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={maintainIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Maintain</AboutTitle>
        <AboutText>
        Your website will break if you don&#39;t give it some tender, loving care every so often. No matter what type of platform on which your website is coded - your language will eventually need to keep up with evolving browser technology and security enhancements.
        </AboutText>
        </AboutDiv>

    );
	}
}

export default Maintain;
