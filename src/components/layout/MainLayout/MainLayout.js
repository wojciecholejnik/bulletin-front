import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';

import { connect } from 'react-redux';
import { getIsLogged, getAll, loadProductsRequest } from '../../../redux/postsRedux';

import styles from './MainLayout.module.scss';

class Component extends React.Component {

  componentDidMount(){
    const { loadProducts } = this.props;
    loadProducts();
  }

  render(){
    const { className, children } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <Header/>
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  products: PropTypes.array,
  loadProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  logged: getIsLogged(state),
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
