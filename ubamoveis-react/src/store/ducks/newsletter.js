import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  newsRequest: ["data"],
  newsSuccess: ["data"],
  newsFailure: ["error"],
});

export const NewsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

/* Reducers */

export const requestNews = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successNews = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const failureNews = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NEWS_REQUEST]: requestNews,
  [Types.NEWS_SUCCESS]: successNews,
  [Types.NEWS_FAILURE]: failureNews,
});
