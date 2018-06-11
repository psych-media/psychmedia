import React, { Component } from 'react';
import { ProjectDiv } from '../theme/Grid';
import { Button } from 'mdbreact';
import  { ProjectTitle, ProjectDesc } from '../theme/Type';

class Homedesc extends Component {
	render() {
		return (
      <ProjectDiv>
        <ProjectTitle>DIGITAL WITH A BRAIN</ProjectTitle>
        <ProjectDesc>Psych Media is a full service agency that helps businesses best
represent their brands across all digital platforms. We assist
companies and individuals gain more traction and visibility by
researching your market, assessing your competition, while
analyzing your website trac and aligning your outreach
campaigns with a consistent and targeted brand image.</ProjectDesc>

<Button size="lg" gradient="blue">
More Info
</Button>

<Button size="lg" gradient="purple">
More Info
</Button>
      </ProjectDiv>

    );
	}
}

export default Homedesc;
