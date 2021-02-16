import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';


import { connect } from 'react-redux';
import { getIsLogged, getAll } from '../../../redux/postsRedux';
import { NavLink } from 'react-router-dom';


import styles from './Homepage.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import qwe from '../../../../public/img/qwe.jpg';

const useStyles = makeStyles({
  container: {
    padding: '5px',
  },
});

function Component({className, products}){

  const classes = useStyles();

  return (
    <Grid container spacing={3} className={clsx(className, styles.root)}>
      {products.map(product => (
        <Grid key={product.id} item lg={4} xs={12} sm={6} md={6} >
          <Paper  elevation={5} className={clsx(className, styles.root)}>
            <Card variant="outlined">
              <CardActionArea component={NavLink} to={`/post/${product._id}`}>
                <CardMedia
                  component="img"
                  alt="product"
                  height="170"
                  title={product.title}
                  image={'../images/' + product.photo}
                />
                <CardContent className={classes.container} >
                  <Typography  variant="h5" component="h2">
                    {product.title}
                  </Typography>
                </CardContent>
                <CardContent className={classes.container}>
                  <Typography variant="overline" >
                    {product.publishDate} in {product.location}
                  </Typography>
                </CardContent>
                <CardContent className={classes.container}>
                  <Typography align="right" color="primary" gutterBottom variant="h6" component="h4">
                    $ {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
