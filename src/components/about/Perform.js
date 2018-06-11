import React, { Component } from 'react';
import performIcon from '../../images/Perform.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Perform extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={performIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Perform</AboutTitle>
        <AboutText>
        What would be the use of having a website and an ecient marketing campaign with proper analytical tools? Make sure you are tracking all of your website activity and evaluating performance in order to adapt to your viewer base and deliver exactly what they are seeking.</AboutText>
      </AboutDiv>

    );
	}
}

export default Perform;
