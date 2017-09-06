import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from './../sagas';

// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [createLogger(), applyMiddleware(sagaMiddleware)];
//   return {
//     ...createStore(
//       rootReducer,
//       undefined,
//       compose(
//         applyMiddleware(...middlewares),
//         window.devToolsExtension ? window.devToolsExtension() : f => f,
//       ),
//     ),
//     runSaga: sagaMiddleware.run(rootSaga),
//   };
// };

// export default configureStore;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      ),
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
