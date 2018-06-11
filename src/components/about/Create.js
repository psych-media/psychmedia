import React, { Component } from 'react';
import createIcon from '../../images/Create.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Create extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={createIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Create</AboutTitle>
        <AboutText>Maximize your website&#39;s eciency by investing in User Interface and User Experience design (UI/UX). Website beauty vs. website usability. There may be several web standards and common templates - but there is always room for creativity that can make you stand apart from the rest.</AboutText>
      </AboutDiv>

    );
	}
}

export default Create;
