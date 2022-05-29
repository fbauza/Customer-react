import { handleAction, handleActions  } from "redux-actions";
import { FETCH_CUSTOMERS } from "../constants";

// const customers = handleAction(FETCH_CUSTOMERS, state => state);

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload], 
}, []);
