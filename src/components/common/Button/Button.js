import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/Add';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { connect } from 'react-redux';
import { changeStatus, getStatus } from '../../../redux/postsRedux';

import styles from './Button.module.scss';

const Component = ({name, status, changeStatus}) => (
  <div className='button-root'>
    {/* {name === 'Add new' ? (
      <Button startIcon={<AddIcon/>} color='primary' size='large' variant='contained' color="primary" component={NavLink} className={styles.link} exact to='/post/add' >{name}</Button>
    ) : (<Button startIcon={name==='Log in' ? <VpnKeyIcon/> : <AccountBoxIcon/>} color='primary' size='large' variant="contained" color="primary" component={NavLink} className={styles.link} exact to='/' onClick={() => changeStatus(status)}>{name}</Button>)} */}
  </div>
);


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  to: PropTypes.string,
  status: PropTypes.string,
  changeStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  changeStatus: newState => dispatch(changeStatus(newState)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Button,
  Container as Button,
  Component as ButtonComponent,
};
