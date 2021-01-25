import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  bannerRequest: ["data"],
  bannerSuccess: ["data"],
  bannerFailure: ["error"],
});

export const BannerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

/* Reducers */

export const requestBanner = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successBanner = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const failureBanner = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANNER_REQUEST]: requestBanner,
  [Types.BANNER_SUCCESS]: successBanner,
  [Types.BANNER_FAILURE]: failureBanner,
});
