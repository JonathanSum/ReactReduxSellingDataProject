import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './user-list.css';
import {selectUser} from '../actions/index'

class UserList extends Component{
  createListItems(){
    return this.props.users.map((user)=>{
      return(
        <li className="user-list" key={user.id} onClick={()=>this.props.selectUser(user)}>{user.first} {user.last}</li>)
    })
  }
  render(){
    // console.log(this.props.users)
    return(
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return{
    users: state.users
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectUser: selectUser
  },dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
