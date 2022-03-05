// import { combineReducers } from 'redux';
// import authReducers from './auth/reducers';

// export default combineReducers({
//   auth: authReducers
// });
import { combineReducers } from 'redux';
import authReducers from './auth/reducers';
import sampleReducers from './sample/reducers'

export default combineReducers({
  auth: authReducers,
  sample: sampleReducers
});
