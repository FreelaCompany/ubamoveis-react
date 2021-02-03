import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  trabalheConoscoRequest: ["data"],
  trabalheConoscoSuccess: ["data"],
  trabalheConoscoFailure: ["error"],
});

export const TrabalheConoscoTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
  success: null,
};

/* Reducers */

export const requestTrabalheConosco = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successTrabalheConosco = (state, action) =>
  update(state, {
    loading: { $set: false },
    success: { $set: true },
    data: { $set: action.data },
  });

export const failureTrabalheConosco = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRABALHE_CONOSCO_REQUEST]: requestTrabalheConosco,
  [Types.TRABALHE_CONOSCO_SUCCESS]: successTrabalheConosco,
  [Types.TRABALHE_CONOSCO_FAILURE]: failureTrabalheConosco,
});
