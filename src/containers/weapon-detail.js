import React, {Component} from 'react'
import {connect} from 'react-redux'

class WeaponDetail extends Component {
  render() {
    if (!this.props.weapon) {
      return (
        <h2>Please Select</h2>
      )
    }
    return (
      <div>
        <img src={this.props.weapon.thumbnail}/>
        <h2>{this.props.weapon.name}</h2>
        <h3>{this.props.weapon.range}</h3>
        <h3>{this.props.weapon.description}</h3>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {weapon: state.activeWeapon}
}
export default connect(mapStateToProps)(WeaponDetail);
