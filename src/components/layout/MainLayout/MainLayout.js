import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';
import { Homepage } from '../../views/Homepage/Homepage';

import { connect } from 'react-redux';
import { getStatus, getAll } from '../../../redux/postsRedux';

import styles from './MainLayout.module.scss';

const Component = ({className, status, products}) => (
  <div className={clsx(className, styles.root)}>
    <Header status={status}/>
    <Homepage products={products}/>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  status: getStatus(state),
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
