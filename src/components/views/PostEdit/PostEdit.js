/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAccount, getIsAdmin, getAll } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';
import { CardContent, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { NotFound } from '../NotFound/NotFound';
import ImageUploader from 'react-images-upload';
import { v4 } from 'uuid';



class Component extends React.Component {

  state = {
    title: '',
    content: '',
    publicDate: '',
    lastUpdate: '',
    status: 'draw',
    price: '',
    phone: '',
    email: '',
    id: v4(),
    photo: '',
    location: '',
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    this.setState({ [id]: value });
  }

  setPhoto = (files) => {
    if(files)
      this.setState({ photo: files[0]});
    else
      this.setState({ photo: null });
  }

  setOtherInfo = () => {
    const today = new Date();
    const parsedDate = today.getDate() + '.' + (1 + today.getMonth()) + '.' + today.getFullYear();
    const product = this.props.products.find(element => element.id == this.props.match.params.id);
    this.setState({
      publicDate: parsedDate, lastUpdate: parsedDate,
      content: product.content,
      location: product.location,
      phone: product.phone,
      price: product.price,
      title: product.title,
      photo: product.photo,
      email: product.email,
    });
  }

  componentDidMount(){
    this.setOtherInfo();
  }


  render (){
    const { className, account, admin, products, match } = this.props;
    const { handleChange, setPhoto } = this;
    // eslint-disable-next-line eqeqeq
    const product = products.find(element => element.id == match.params.id);


    return (
      admin || (account.logged && product.email === account.email) ? (
        <div className={clsx(className, styles.root)}>
          <div className={styles.headingContainer}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
              Edit advertisement
              </Typography>
            </CardContent>

            <form className={'classes.root'} autoComplete="off">
              <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
                withPreview={true}
                onChange={setPhoto}
                singleImage={true}
                className='animated fadeInUp'
              />
              <CardContent>
                <TextField
                  required
                  fullWidth
                  multiline
                  rowsMax={4}
                  color="primary"
                  id="title"
                  label="Title"
                  variant="filled"
                  onChange={handleChange}
                  defaultValue={this.state.title}
                />
              </CardContent>
              <CardContent>
                <TextField
                  required
                  fullWidth
                  multiline
                  rowsMax={6}
                  rows={6}
                  color="primary"
                  id="content"
                  label="Description"
                  variant="filled"
                  onChange={handleChange}
                  defaultValue={this.state.content}
                />
              </CardContent>
              <CardContent>
                <TextField
                  required
                  fullWidth
                  multiline
                  rowsMax={4}
                  color="primary"
                  id="location"
                  label="Location"
                  variant="filled"
                  onChange={handleChange}
                  defaultValue={this.state.location}

                />
              </CardContent>
              <CardContent>
                <TextField
                  required
                  fullWidth
                  multiline
                  rowsMax={4}
                  color="primary"
                  id="phone"
                  label="Phone"
                  variant="filled"
                  onChange={handleChange}
                  defaultValue={this.state.phone}
                />
              </CardContent>
              <CardContent>
                <TextField
                  required
                  fullWidth
                  color="primary"
                  id="price"
                  label="Price in $"
                  variant="filled"
                  onChange={handleChange}
                  defaultValue={this.state.price}
                />
              </CardContent>

              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={'classes.button'}
                  startIcon={<SaveIcon />}
                  // component={NavLink}
                  // to='/account'
                  type="submit"

                > Save
                </Button>
              </CardContent>
            </form>

          </div>

        </div>
      ) :
        <NotFound/>
    );
  }

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

const Container = connect(mapStateToProps )(Component);// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
