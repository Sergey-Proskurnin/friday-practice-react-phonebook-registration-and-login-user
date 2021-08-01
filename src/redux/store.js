import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./reducers";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-redusers";

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfigs, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const configs = {
  store,
  persistor,
};

export default configs;
