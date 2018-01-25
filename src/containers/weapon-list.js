import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './user-list.css';
import {selectWeapon} from '../actions/index'

class WeaponList extends Component {
  createListItems() {
    return this.props.weapons.map((weapon) => {
        return (
          <li className="user-list" key={weapon.id} onClick={() => this.props.selectWeapon(weapon)}>{weapon.name}</li>
        )
      })
  }
  render() {
    // console.log(this.props.users)
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {weapons: state.weapons}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectWeapon: selectWeapon
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(WeaponList);
