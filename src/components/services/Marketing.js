import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import { ServicesDiv } from '../../theme/Grid';
import  { Title, AboutDesc, ServicesTitle, ServicesText } from '../../theme/Type';

class Marketing extends Component {
	render() {
		return (
      <ServicesDiv>

        <Title>Marketing & Advertising</Title>

<AboutDesc>Psych Media offers comprehensive marketing services to suit your needs. Whether you need hands on content creation and management or strategy oversight and training, our attentive marketing strategists are ready to listen and deliver.
</AboutDesc>

<ServicesTitle>SEO & Paid Advertising</ServicesTitle>
        <ServicesText>
        Place Content Here
        </ServicesText>

        <ServicesTitle>Email & Social Outreach</ServicesTitle>
        <ServicesText>
        Place Content Here
        </ServicesText>

        <ServicesTitle>Enrich Your Content</ServicesTitle>
        <ServicesText>
        Place Content Here
        </ServicesText>



      </ServicesDiv>

    );
	}
}

export default Marketing;
