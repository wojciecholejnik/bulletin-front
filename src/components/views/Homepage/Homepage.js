import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { ProductTile } from '../../features/ProductTile/ProductTile';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, products}) => (
  <div className={clsx(className, styles.root)}>
    {products.map(product => (
      <ProductTile key={product.id} product={product}/>
    ))}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
