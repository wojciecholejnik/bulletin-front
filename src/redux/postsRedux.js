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
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const TOGGLE_STATUS = createActionName('TOGGLE_STATUS');
const TOGGLE_ADMIN = createActionName('TOGGLE_ADMIN');


/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeStatus = payload => ({payload, type: TOGGLE_STATUS});
export const changeAdmin = payload => ({payload, type: TOGGLE_ADMIN});


/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case TOGGLE_STATUS: {
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
