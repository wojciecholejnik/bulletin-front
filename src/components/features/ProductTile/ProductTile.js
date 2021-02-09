import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductTile.module.scss';

const Component = ({className, product}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.photoAndTitle}>
      <img alt='product' src={product.photo}/>
      <h2>{product.title}</h2>
    </div>
    <div className={styles.price}>
      $ {product.price}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  product: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductTile,
  // Container as ProductTile,
  Component as ProductTileComponent,
};
