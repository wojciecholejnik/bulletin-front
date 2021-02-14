import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAccount, getIsAdmin, getAll } from '../../../redux/postsRedux';

import styles from './LoggedList.module.scss';
import { NotFound } from '../NotFound/NotFound';
import Card from '@material-ui/core/Card';
import { IconButton, CardContent, Typography, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  adverCont: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
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
  button: {
    margin: '5px',
  },
}));

function Component({className, account, admin, products}){

  const yourProducts = products.filter(product => product.email === account.email);
  const classes = useStyles();


  return (
    <div className={clsx(className, styles.root)}>
      {account.logged ? (
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >Your advertisements: </Typography>
          </CardContent>
          {yourProducts.map(product => (
            <Paper elevation={3} key={product.id}>
              <CardContent className = {classes.root} >
                <div className={classes.adverCont}>
                  <Avatar className={classes.large} src={'../images/' + product.photo}/>
                  <Typography>{product.title}</Typography>
                </div>
                <div>
                  <IconButton className={classes.button} size="small" component={NavLink} to={'/post/' + product.id} variant="contained" color="primary"><VisibilityIcon/></IconButton>
                  <IconButton className={classes.button} size="small" component={NavLink} to={'/post/' + product.id + '/edit'} variant="contained" color="primary"><CreateIcon/></IconButton>
                  <IconButton className={classes.button} size="small"  variant="contained" color="secondary"><DeleteForeverOutlinedIcon/></IconButton>
                </div>
              </CardContent>
            </Paper>
          ))}
        </Card>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

Component.propTypes = {
  className: PropTypes.string,
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
  // Component as LoggedList,
  Container as LoggedList,
  Component as LoggedListComponent,
};
