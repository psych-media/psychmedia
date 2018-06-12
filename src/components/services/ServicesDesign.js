import React, { Component } from 'react';
//import devIcon from '../../images/Development.png';
import { ServicesDiv } from '../../theme/Grid';
import  { ServicesTitle, ServicesSubtitle, ServicesText } from '../../theme/Type';
import { Button } from 'mdbreact';
import devIcon from '../../images/Bantam-Media-Template.png';

class ServicesDesign extends Component {
	render() {
		return (
      <ServicesDiv>

        <div className="row">

        <div className="col-6 col-md-4">

          <img src={devIcon} className="servicesImg" alt="Psych Media"/>

          <Button size="lg" gradient="blue">
          More Info
          </Button>
          <Button size="lg" gradient="purple">
          Request a Quote
          </Button>
        </div>
        <div className="col col-md-8">

        <ServicesTitle>DESIGN</ServicesTitle>
        <ServicesText>
        We create graphics that perfectly suit your needs. Establishing a brand identity can be the most crucial part of any development
project! We also design presentations, infographics, and digital banner ads.
        </ServicesText>

        <ServicesSubtitle>Print Design</ServicesSubtitle>
        <ServicesText>
        Webtwo ipsum jabber joyent convore zoosk zillow plaxo, waze xobni balihoo doostang, sclipo heroku wikia cotweet. Napster
        skype divvyshot wikia, stypi jibjab zapier joyent, lijit sclipo. Zappos blyve hipmunk kippt wufoo palantir, koofers dogster lijit.
        Zanga wufoo chegg chartly, imvu twitter. Rovio ifttt xobni oovoo, ideeli imeem.
        </ServicesText>

        <ServicesSubtitle>Website & Email Design</ServicesSubtitle>
        <ServicesText>
        Webtwo ipsum jabber joyent convore zoosk zillow plaxo, waze xobni balihoo doostang, sclipo heroku wikia cotweet. Napster
        skype divvyshot wikia, stypi jibjab zapier joyent, lijit sclipo. Zappos blyve hipmunk kippt wufoo palantir, koofers dogster lijit.
        Zanga wufoo chegg chartly, imvu twitter. Rovio ifttt xobni oovoo, ideeli imeem.
        </ServicesText>

        <ServicesSubtitle>Advertising & Commercial Design</ServicesSubtitle>
        <ServicesText>
        Webtwo ipsum jabber joyent convore zoosk zillow plaxo, waze xobni balihoo doostang, sclipo heroku wikia cotweet. Napster
        skype divvyshot wikia, stypi jibjab zapier joyent, lijit sclipo. Zappos blyve hipmunk kippt wufoo palantir, koofers dogster lijit.
        Zanga wufoo chegg chartly, imvu twitter. Rovio ifttt xobni oovoo, ideeli imeem.
        </ServicesText>

        </div>
</div>
      </ServicesDiv>

    );
	}
}

export default ServicesDesign;
