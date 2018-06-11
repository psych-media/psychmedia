import React, { Component } from 'react';
import thinkIcon from '../../images/Think.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Think extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={thinkIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Think</AboutTitle>
        <AboutText>It might sound obvious, but the first important step in producing a stellar website that will become successful is conceptualizing your project in as much detail and depth as possible. Rushing a site development without properly thinking things through will prove to be a waste of time.</AboutText>
      </AboutDiv>

    );
	}
}

export default Think;
