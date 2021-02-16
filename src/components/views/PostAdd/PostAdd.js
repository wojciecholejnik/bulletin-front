import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAccount, getIsAdmin, getAll } from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';
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
    publishDate: '',
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
    this.setState({publishDate: parsedDate, lastUpdate: parsedDate});
  }

  componentDidMount(){
    this.setOtherInfo();
    this.setState({email: this.props.account.email});
  }


  render (){
    const { className, account } = this.props;
    const { handleChange, setPhoto } = this;


    return (
      account.logged ? (
        <div className={clsx(className, styles.root)}>
          <div className={styles.headingContainer}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
              New advertisement
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

const Container = connect(mapStateToProps )(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
