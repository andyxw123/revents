import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false,
  };

  onSignIn = () => this.setState({ authenticated: true });
  onSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item name='Events' as={NavLink} exact to='/events' />
          <Menu.Item name='People' as={NavLink} exact to='/people' />
          <Menu.Item>
            <Button
              as={Link}
              exact
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? <SignedInMenu onSignOut={this.onSignOut} /> : <SignedOutMenu onSignIn={this.onSignIn} />}
        </Container>
      </Menu>
    );
  }
}

//Using withRouter will allow NavBar to access this.props.history
export default withRouter(NavBar);
