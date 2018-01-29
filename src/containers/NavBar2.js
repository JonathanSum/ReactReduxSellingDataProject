import React, {Component} from 'react'
import circleBar from './CircleBar'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './NavBar.css'
import {selectDataDay, selectDataMonth, selectDataWeek} from '../actions/index'
import {selectUser} from '../actions/index'

class NavBar2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    isToggleOnT: false,
    isToggleOnM: false,
    isToggleOnW : true
    };
      this.handleClickT = this.handleClickT.bind(this);
      this.handleClickM = this.handleClickM.bind(this);
      this.handleClickW = this.handleClickW.bind(this);
  }
handleClickT() {
  this.setState({
    isToggleOnT: true,
    isToggleOnM: false,
    isToggleOnW: false,
  })
  // console.log("Say Hi")
  this.props.selectDataDay(this.props.data)
}
handleClickM() {
  this.setState(prevState => ({
    isToggleOnT: false,
    isToggleOnM: true,
    isToggleOnW: false,
  }))
  this.props.selectDataMonth(this.props.data)
}
handleClickW() {
this.setState(prevState => ({
    isToggleOnT: false,
    isToggleOnM: false,
    isToggleOnW:true,
  }))
  this.props.selectDataWeek(this.props.data)
}
  render(){
    // console.log("I am a data function! ",this.props.selectDataDay)
    return (
      <FlexContainer>
        <p className="Today" 
        onClick={this.handleClickT}
          style={buttonOn(this.state.isToggleOnT)}>TODAY</p>
        <p onClick={this.handleClickW}  style={buttonOn(this.state.isToggleOnW)}>WEEK</p>
        <p className="Month" onClick={this.handleClickM}  style={buttonOn(this.state.isToggleOnM)}>MONTH</p>
      </FlexContainer>

    )
  }
}



const buttonOn= (isOn)=>{
  if(isOn){
    return fItemOn
  }else{
    return fItemOff
  }
}

let fItemOn = {
  display: 'flex',
  flex: 1,
  height: "100%",
  border: "1px solid",
  borderColor: 'rgb(255, 243, 207)',
  backgroundColor: 'rgb(255, 243, 207)',
  justifyContent: "center",
  alignItems: "center",
  fontSize: 110 / 750 *window.innerWidth*1 / 3,
  fontFamily: 'Open Sans',
  color: 'rgb(174, 88, 122)'
}
let fItemOff = {
  display: 'flex',
  flex: 1,
  height: "100%",
  // border: "1px solid",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 110 / 750 *window.innerWidth*1 / 3,
  fontFamily: 'Open Sans',
  color: 'white'
}

class FlexContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  }
  render() {
    return (
      <div
        style={{
        height:110/750*window.innerWidth,
        borderRadius:110/750*window.innerWidth/2,
        display: 'flex',
        marginBottom: window.innerWidth*47/750,
        border: "2px solid",
        justifyContent: "space-around",
        borderColor: 'rgb(255, 243, 207)',
        marginLeft: window.innerWidth * 55 / 750,
        marginRight: window.innerWidth * 57 / 750,
        paddingLeft: window.innerWidth * 40 / 750,
        paddingRight: window.innerWidth * 40 / 750,
      }}>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {data: state.datas}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDataDay: selectDataDay,
    selectDataMonth: selectDataMonth,
    selectDataWeek: selectDataWeek
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(NavBar2);