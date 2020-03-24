import { createStore, combineReducers, applyMiddleware } from "redux";
//Insert reducers
import LOGINR from "../_reducers/LoginR";
import REGISR from "../_reducers/RegisterR";
import ADDTIKETR from "../_reducers/AddTiketR";
import GETTIKETR from "../_reducers/GetTiketR";
import DashRe from "../_reducers/DashR";
import USERTIKETR from "../_reducers/UserTiketGetR";
import GetTiketIdR from "../_reducers/GetTiketIdR";
import { getPaymentR } from "../_reducers/PaymentR";

import { logger, promise } from "./middleware";

const reducers = combineReducers({
  LOGINR,
  REGISR,
  ADDTIKETR,
  GETTIKETR,
  DashRe,
  USERTIKETR,
  GetTiketIdR,
  getPaymentR
});

const store = createStore(reducers, applyMiddleware(logger, promise));

export default store;
