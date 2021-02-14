import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { changeAdmin, changeStatus, getIsLogged, getIsAdmin, getAccount } from '../../../redux/postsRedux';

import styles from './MenuNav.module.scss';
import { Avatar, Typography } from '@material-ui/core';


function Component({className, changeStatus, changeAdmin, logged, isAdmin, account}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={clsx(className, styles.root)}>

      <Button onClick={()=>changeAdmin(isAdmin)} size="small" variant={isAdmin ? 'contained' : 'text'} color={isAdmin ? 'primary' : 'default'}  >ADMIN</Button>
      <Button color='primary' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountBoxIcon fontSize='large'/>
      </Button>
      { logged  ? (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={NavLink} to='/account' onClick={handleClose}>
            <div>
              <p>Your account:</p>
              <div>
                <Avatar>{account.name[0]}</Avatar>
                <p>{account.name}</p>
              </div>
            </div>
          </MenuItem>
          <MenuItem component={NavLink} to='/post/add' onClick={handleClose}>Add new</MenuItem>
          <MenuItem onClick={()=>{changeStatus(logged); handleClose();}}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem dense={true} onClick={()=>{changeStatus(logged); handleClose();}}>
            <Typography align="center" >Log in <br/> <VpnKeyOutlinedIcon  color='primary' fontSize='large' /></Typography>
          </MenuItem>
        </Menu>
      )}


    </div>
  );
}



Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  isAdmin: PropTypes.bool,
  changeStatus: PropTypes.func,
  changeAdmin: PropTypes.func,
  account: PropTypes.object,
};

const mapStateToProps = state => ({
  logged: getIsLogged(state),
  isAdmin: getIsAdmin(state),
  account: getAccount(state),
});

const mapDispatchToProps = dispatch => ({
  changeStatus: newState => dispatch(changeStatus(newState)),
  changeAdmin: newState => dispatch(changeAdmin(newState)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export {
  // Component as MenuNav,
  Container as MenuNav,
  Component as MenuNavComponent,
};
