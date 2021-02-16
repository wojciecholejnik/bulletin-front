import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAccount, getIsAdmin, getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  logoContent: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  avatarRoot: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


function Component({className, match, products, admin, account}){
  // eslint-disable-next-line eqeqeq
  const product = products.find(element => element._id == match.params.id);
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="space-around" className={clsx(className, styles.root)}>
      <Grid item lg={8} xs={12} sm={8} md={8} >
        <div className={styles.photoWrapper}>
          <img alt='selling product' src={'../images/' + product.photo}></img>
        </div >
      </Grid>
      <Grid item lg={3} xs={12} sm={4} md={4} >
        <Card>
          <CardContent className={styles.sellerHeader}>
            <Typography variant="subtitle2">
              Seller:
            </Typography>
          </CardContent>
          <CardContent className={classes.logoContent}>
            <div className={classes.avatarRoot}>
              <Avatar className={classes.large}>{product.name[0]}</Avatar>
            </div>
            <Typography >
              {product.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom>
              E-mail: <br/><strong>{product.email}</strong>
            </Typography >
            <Typography>
              Phone: <br/> <strong>{product.phone}</strong>
            </Typography>
          </CardContent>
          {admin || (account.logged && account.email === product.email) ? (
            <CardContent>
              <IconButton className={classes.button} component={NavLink} to={'/post/' + product._id + '/edit'} variant="contained" color="primary"><CreateIcon/></IconButton>
              <IconButton className={classes.button} variant="contained" color="secondary"><DeleteForeverOutlinedIcon/></IconButton>
            </CardContent>
          ) : ''}
        </Card>
      </Grid>
      <Grid item lg={12}>
        <Card>
          <CardContent>
            <Typography align="left" variant="overline">
              public date: {product.publishDate}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h4">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6">
              Description:
            </Typography>
            <Typography gutterBottom>
              {product.content}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography align="right" variant="h6">
              $ {product.price}
            </Typography>
            <Typography align="left" variant="overline">
              last update: {product.lastUpdate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object,
  admin: PropTypes.bool,
  products: PropTypes.array,
  account: PropTypes.object,
};

const mapStateToProps = state => ({
  account: getAccount(state),
  admin: getIsAdmin(state),
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps )(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
