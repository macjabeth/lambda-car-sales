import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const configureStore = () => (
  createStore(rootReducer, devToolsEnhancer())
);

export default configureStore;