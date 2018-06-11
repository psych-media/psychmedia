import React, { Component } from 'react';
import { ProjectDiv } from '../theme/Grid';
import { Button } from 'mdbreact';
import  { ProjectTitle, ProjectDesc } from '../theme/Type';
import { Link } from 'react-router-dom';
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

<Link to="/portfolio">
<Button size="lg" gradient="blue">
See Our Work
</Button>
</Link>

<Link to="/about">
<Button size="lg" gradient="purple">
More About Us
</Button>
</Link>
      </ProjectDiv>

    );
	}
}

export default Homedesc;
