import React, { Component } from 'react';
import logo from './Psych-Media_Logo.jpg';
import Home from './components/Home';
import About from './components/about';
import Portfolio from './components/Portfolio';
import Bantam from './components/portfolio/Bantam';
import Megpies from './components/portfolio/Megpies';
import Concentric from './components/portfolio/Concentric';
import Everlast from './components/portfolio/Everlast';
import Kumiki from './components/portfolio/Kumiki';
import Leadership from './components/portfolio/Leadership';
import Litfest from './components/portfolio/Litfest';
import Rutherford from './components/portfolio/Rutherford';
import Hanys from './components/portfolio/Hanys';
import Services from './components/Services';
import Development from './components/services/Development';
import Maintenance from './components/services/Maintenance';
import AppDesign from './components/services/AppDesign';
import Marketing from './components/services/Marketing';
import FooterPage from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mdb.css';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { PageContent } from './theme/Grid';
import { Route } from 'react-router-dom';

import './App.css';

class UpdateBlocker extends React.PureComponent {
  render() {
    return this.props.children
  }
}



class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


  render() {
    return (

      <div className="App">

          <Navbar color="unique-color-gray" light expand="lg" fixed="top" scrolling>
    <NavbarBrand href="/">
        <img src={logo} height="30" className="d-inline-block align-top App-logo" alt="Psych Media"/>
        </NavbarBrand>

        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar>
        <NavbarNav right>
        <UpdateBlocker>

        <NavItem active>
                             <NavLink to="/">Home</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink to="/about">About</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink to="/portfolio">Portfolio</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink to="/services">Services</NavLink>
                         </NavItem>
                         </UpdateBlocker>
                         </NavbarNav>


    </Collapse>

</Navbar>

<PageContent>

                  <Route exact={true} path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route exact={true} path="/portfolio" component={Portfolio}/>
                  <Route path="/portfolio/bantam" component={Bantam}/>
                  <Route path="/portfolio/megpies" component={Megpies}/>
                  <Route path="/portfolio/concentric" component={Concentric}/>
                  <Route path="/portfolio/everlast" component={Everlast}/>
                  <Route path="/portfolio/kumiki" component={Kumiki}/>
                  <Route path="/portfolio/leadership" component={Leadership}/>
                  <Route path="/portfolio/litfest" component={Litfest}/>
                  <Route path="/portfolio/rutherford" component={Rutherford}/>
                  <Route path="/portfolio/hanys" component={Hanys}/>
                  <Route exact={true} path="/services" component={Services}/>
                  <Route path="/services/development" component={Development}/>
                  <Route path="/services/maintenance" component={Maintenance}/>
                  <Route path="/services/appdesign" component={AppDesign}/>
                  <Route path="/services/marketing" component={Marketing}/>

</PageContent>
<FooterPage />

<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/popper.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/mdb.min.js"></script>
      </div>
    );
  }
}

export default App;
