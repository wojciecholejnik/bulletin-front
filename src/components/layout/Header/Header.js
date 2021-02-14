import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



import clsx from 'clsx';

// import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';
import { changeStatus, getIsLogged } from '../../../redux/postsRedux';

import styles from './Header.module.scss';
import { MenuNav } from '../../common/MenuNav/MenuNav';
import { Button } from '@material-ui/core';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Button color="secondary" component={NavLink} to='/' className={styles.logo}>Bulletin</Button>
    <nav className={styles.buttons}>
      <MenuNav/>
    </nav>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  logged: getIsLogged(state),
});

const mapDispatchToProps = dispatch => ({
  changeStatus: newState => dispatch(changeStatus(newState)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};

