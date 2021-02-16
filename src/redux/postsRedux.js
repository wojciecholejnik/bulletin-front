import axios from 'axios';
import { API_URL } from '../config';


/* selectors */
export const getAll = ({posts}) => posts.data;
export const getIsLogged = ({posts}) => posts.account.logged;
export const getIsAdmin = ({posts}) => posts.admin;
export const getAccount = ({posts}) => posts.account;
export const getOneProduct = ({posts, id}) => {
  const findedProduct = posts.data.find(product => product.id === id);
  return findedProduct;
};

const toggleLogged = logged => {
  logged = !logged;
  return logged;
};

const toggleAdmin = admin => {
  admin = !admin;
  return admin;
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const TOGGLE_STATUS = createActionName('TOGGLE_STATUS');
const TOGGLE_ADMIN = createActionName('TOGGLE_ADMIN');

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');


/* action creators */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const changeStatus = payload => ({payload, type: TOGGLE_STATUS});
export const changeAdmin = payload => ({payload, type: TOGGLE_ADMIN});

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });



/* thunk creators */

export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);

      dispatch(loadProducts(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {...statePart,
        data: action.payload,
      };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };    case TOGGLE_STATUS: {
      return {
        ...statePart,
        account: {
          logged: toggleLogged(action.payload),
          name: 'John',
          email: 'johndoe@example.com',
        },
        admin: toggleAdmin(action.payload),
      };
    }
    case TOGGLE_ADMIN: {
      return {
        ...statePart,
        admin: toggleAdmin(action.payload),
      };
    }

    default:
      return statePart;
  }
};
