import React, {Component} from 'react'
import circleBar from './CircleBar'
import './NavBar.css'
class NavBar2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    isToggleOnT: false,
    isToggleOnM: false,
    isToggleOnW : false
    };
      this.handleClickT = this.handleClickT.bind(this);
      this.handleClickM = this.handleClickM.bind(this);
      this.handleClickW = this.handleClickW.bind(this);
  }
handleClickT() {
  this.setState({
    isToggleOnT: true,
    isToggleOnM: false,
    isToggleOnW: false
  })
}
handleClickM() {
  this.setState(prevState => ({
    isToggleOnT: false,
    isToggleOnM: true,
    isToggleOnW: false
  }))
}
handleClickW() {
this.setState(prevState => ({
    isToggleOnT: false,
    isToggleOnM: false,
    isToggleOnW:true,
  }))
}
  render(){
    return (

      <FlexContainer>
        <p className="Today" onClick={this.handleClickT} style={buttonOn(this.state.isToggleOnT)}>TODAY</p>
        <p onClick={this.handleClickW} style={buttonOn(this.state.isToggleOnW)}>WEEK</p>
        <p className="Month" onClick={this.handleClickM} style={buttonOn(this.state.isToggleOnM)}>MONTH</p>
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




export default NavBar2;