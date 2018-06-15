import React, { Component } from 'react';
import Homedesc from './home-desc';
import Homeform from './home-form';
import ReactPlayer from 'react-player'
import { HomeContainer } from '../theme/Grid';
import VideoPlayer from 'react-simple-video-player';
import psychBanner from '../images/psych-banner.gif';
import psychVideo from '../images/psych-banner.mp4';

class Home extends Component {
	render() {
		return (
      <HomeContainer>
      <div className='player-wrapper'>

              <ReactPlayer
                className='react-player'
                url={psychVideo}
                width='100%'
                height='100%'
                playing
              />

            </div>
        <div className="row">
          <div className="col">
            <Homedesc />
          </div>
          <div className="col">
            <Homeform />
          </div>
        </div>
      </HomeContainer>
    );
  }
}

export default Home;
