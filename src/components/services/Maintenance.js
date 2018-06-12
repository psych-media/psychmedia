import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import { ServicesDiv } from '../../theme/Grid';
import  { Title, AboutDesc } from '../../theme/Type';

class Maintenance extends Component {
	render() {
		return (
      <ServicesDiv>

        <Title>MONTHLY MAINTENANCE</Title>

        <AboutDesc>
        Having a website developed is just like leasing or purchasing a car.

        You might spend a lot and include all of the bells and whistles – spare no expense and make sure your website has an efficient front and back-end. The Lamborghini of websites.

        Or you might be frugal and invest in a website that is strictly meant to perform and not so much meant to visually “please” or impress. Let’s say, the ’93 Toyota Corolla of a website.

        Either way, your website will not be successful if it sits idle collecting dust and it is not being promoted and updated. If no one sees your website, it will be effectively useless. Even worse – if you do not keep up with the evolving web standards, your website could go down and become invisible.

        Your website is your international business card that is always accessible, and it is your customer’s first impression of your services, brand and presentation. Don’t let your initial investment go to waste without maintaining your website.
        </AboutDesc>

      </ServicesDiv>

    );
	}
}

export default Maintenance;
