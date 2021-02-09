import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Button } from '../../common/Button/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children, status}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.logo}>Bulletin</div>
    <div className={styles.buttons}>
      <Button name={'Log out'} to={'/'} status={status}></Button>
      {status === 'user' || status === 'admin' ? <Button name={'Add new'} to={'/'}></Button> : ''};
    </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};

