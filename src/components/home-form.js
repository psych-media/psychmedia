import React, { Component } from 'react';
import { ContactDiv, ContactForm  } from '../theme/Grid';
import  { ContactTitle } from '../theme/Type';
import { Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class Homeform extends Component {
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
   this.state = {
     dropdownOpen: false,
   };
 }
 toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }
	render() {
		return (

            <ContactDiv>
              <ContactTitle>CONTACT</ContactTitle>
              <ContactForm>
              <form>
                <Input label="Type your name" group type="text" validate error="wrong" success="right"/>
                <Input label="Type your email" group type="email" validate error="wrong" success="right"/>
                <Input type="textarea" label="Additional notes"/>

                <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
                         <DropdownToggle caret color="primary">
                           Select a topic
                         </DropdownToggle>
                         <DropdownMenu>
                           <DropdownItem>Design</DropdownItem>
                           <DropdownItem>Development</DropdownItem>
                           <DropdownItem>Marketing</DropdownItem>
                           <DropdownItem>Monthly Maintenance</DropdownItem>
                           <DropdownItem>Domain & Hosting</DropdownItem>
                           <DropdownItem>App Design</DropdownItem>
                           <DropdownItem>Other</DropdownItem>
                         </DropdownMenu>
                       </Dropdown>
                <Button onClick={this.addName}>Contact Us</Button>
              </form>
              </ContactForm>
            </ContactDiv>
    );
	}
}

export default Homeform;
