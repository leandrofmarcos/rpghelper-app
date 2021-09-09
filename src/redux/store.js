import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",
  storage,
  //whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function stateStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
