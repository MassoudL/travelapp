import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import user from './user.png';


class Login extends React.Component {
  state = {
    anchorEl: null,
    name: ''
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLoginClick = () => {
      console.log(this.getState.name);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
         <img src={user} alt="User" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.name}
          margin="normal"
        />
        <TextField
         id="standard-password-input"
         label="Password"
         type="password"
         autoComplete="current-password"
         margin="normal"
       />
       <Button
         onClick={this.handleLoginClick}
       >
        Submit
       </Button>
        </Menu>
      </div>
    );
  }
}

export default Login;
