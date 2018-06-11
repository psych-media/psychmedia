import React, { Component } from 'react';
import shareIcon from '../../images/Share.png';
import { AboutDiv } from '../../theme/Grid';
import  { AboutTitle, AboutText } from '../../theme/Type';

class Share extends Component {
	render() {
		return (
      <AboutDiv>
        <img src={shareIcon} className="AboutIcons" alt="logo" />

        <AboutTitle>Share</AboutTitle>
        <AboutText>
Market research and content strategy are crucial components in putting your website in front of the right users. You only have one chance to impress your target audience - don&#39;t blow it! Aligning your social profiles and email marketing campaigns will guarantee some buzz.
      </AboutText>
      </AboutDiv>

    );
	}
}

export default Share;
