import React, { Component } from 'react';
import Homedesc from './home-desc';
import Homeform from './home-form';
import ReactPlayer from 'react-player'
import { HomeContainer } from '../theme/Grid';
import VideoPlayer from 'react-simple-video-player';

class Home extends Component {
	render() {
		return (
      <HomeContainer>
      <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='./images/Comp_1.mp4'
                width='100%'
                height='100%'
              />
              <VideoPlayer
               url="./images/Comp_1.mp4"
               poster="./Psych-Media_Logo.jpg"
               width={400}
               height={300}
               autoplay
             />
<video ref="vidRef" src="./images/Comp_1.mp4" type="video/mp4"></video>
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
