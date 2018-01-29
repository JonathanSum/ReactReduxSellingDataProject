import {combineReducers} from 'redux';
import DataSet from './reducer-data'
import ActiveDataReducer from './reducer-active-data'
const allReducers = combineReducers({
  datas: DataSet,
activeData : ActiveDataReducer
})
export default allReducers