import React, { Component } from 'react';
import developIcon from '../../images/Develop.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Develop extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={developIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Develop</AboutTitle>
        <AboutText>Your website must be clean, fast, mobile friendly, and compatible across all browser platforms. Thorough website quality assurance testing will ensure your build is optimized and ready to be crawled by search engines. Your site&#39;s successful launch and execution relies on good code.</AboutText>
      </AboutDiv>

    );
	}
}

export default Develop;
