import React, { Component } from 'react';
import Homedesc from './home-desc';
import Homeform from './home-form';
import ReactPlayer from 'react-player'
import { HomeContainer } from '../theme/Grid';

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
                playing='true'
              />
            </div>
        <div class="row">
          <div class="col">
            <Homedesc />
          </div>
          <div class="col">
            <Homeform />
          </div>
        </div>
      </HomeContainer>
    );
  }
}

export default Home;
