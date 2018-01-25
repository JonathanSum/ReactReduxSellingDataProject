import {combineReducers} from 'redux';
import UserReducer from './reducer-users'
import AmmoCreate from'./ammo'
import ActiveUserReducer from './reducer-active-user'
import ActiveWeaponReducer from './reducer-active-ammo'
const allReducers = combineReducers({
  users: UserReducer,
  weapons: AmmoCreate,
  activeUser: ActiveUserReducer,
  activeWeapon:ActiveUserReducer
})
export default allReducers