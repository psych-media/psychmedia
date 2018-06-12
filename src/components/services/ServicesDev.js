import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import devIcon from '../../images/Bantam-Media-Template.png';
import { ServicesDiv } from '../../theme/Grid';
import { Button } from 'mdbreact';
import  { ServicesTitle, ServicesSubtitle, ServicesText } from '../../theme/Type';
import { Link } from 'react-router-dom';

class ServicesDev extends Component {
	render() {
		return (
      <ServicesDiv>

        <ServicesTitle>DEVELOPMENT</ServicesTitle>
        <div className="row">
        <div className="col col-md-8">
        <ServicesText>
        Psych Media is a full service agency that helps businesses best represent their brands across all digital platforms. We assist companies
        and individuals gain more traction and visibility by researching your market, assessing your competition, while analyzing
        your website trac and aligning your outreach campaigns with a consistent and targeted brand image.
        </ServicesText>
        <ServicesSubtitle>Website Development</ServicesSubtitle>
        <ServicesText>
        Webtwo ipsum jabber joyent convore zoosk zillow plaxo, waze xobni balihoo doostang, sclipo heroku wikia cotweet. Napster
        skype divvyshot wikia, stypi jibjab zapier joyent, lijit sclipo. Zappos blyve hipmunk kippt wufoo palantir, koofers dogster lijit.
        Zanga wufoo chegg chartly, imvu twitter. Rovio ifttt xobni oovoo, ideeli imeem.
        </ServicesText>
        <ServicesSubtitle>Maintenance and Security</ServicesSubtitle>
        <ServicesText>
        Webtwo ipsum jabber joyent convore zoosk zillow plaxo, waze xobni balihoo doostang, sclipo heroku wikia cotweet. Napster
        skype divvyshot wikia, stypi jibjab zapier joyent, lijit sclipo. Zappos blyve hipmunk kippt wufoo palantir, koofers dogster lijit.
        Zanga wufoo chegg chartly, imvu twitter. Rovio ifttt xobni oovoo, ideeli imeem.
        </ServicesText>
        </div>
        <div className="col-6 col-md-4">
          <img src={devIcon} className="servicesImg" alt="Psych Media"/>
          <Link to="/services/development">
          <Button size="lg" gradient="blue" to="/services/development">
          More Info
          </Button>
          </Link>

          <Button size="lg" gradient="purple">
          Request a Quote
          </Button>
        </div>
        </div>
      </ServicesDiv>

    );
	}
}

export default ServicesDev;
