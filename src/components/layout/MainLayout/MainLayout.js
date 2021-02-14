import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';

import { connect } from 'react-redux';
import { getIsLogged, getAll } from '../../../redux/postsRedux';

import styles from './MainLayout.module.scss';

const Component = ({className, children, logged}) => (
  <div className={clsx(className, styles.root)}>
    <Header/>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  logged: getIsLogged(state),
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
