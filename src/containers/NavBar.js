import React, {Component} from 'react'
import circleBar from './CircleBar'
class NavBar extends React.Component{

constructor(props) {
  super(props);
  this.state = {
   W:window.innerWidth*100/750,
    H:window.innerHeight,
    text:'OMG'
  }
   this.handleClick = this.handleClick.bind(this);
  this.updateDimensions=this.updateDimensions.bind(this)
}
handleClick() {
this.setState({text: 'Yea'})
const ctx = this.refs.canvas.getContext('2d')
ctx.arc(50,80,80,0,6)
}
componentWillMount() {
  this.updateDimensions();
}
componentDidMount() {
  window.addEventListener('resize', this.updateDimensions)
  this.updateCanvas()

}
componentWillUnmount() {
  window.addEventListener('resize', this.updateCanvas
)
}
updateDimensions() {
  this.setState({
    W:window.innerWidth*100/750,
    H:window.innerHeight

  })}

updateCanvas() {
  const ctx = this.refs.canvas.getContext('2d');

  ctx.canvas.height = window.innerWidth*100/750
  ctx.canvas.width=window.innerWidth;
let cW = ctx.canvas.width
let cH = ctx.canvas.height
window.addEventListener('resize', function () {
  ctx.canvas.height = window.innerWidth*100/750
  ctx.canvas.width=window.innerWidth;
    print()

  })

let print =()=>{
let cW = ctx.canvas.width
let cH = ctx.canvas.height
ctx.beginPath();
ctx.arc(cW * 60 / 750 + cW * 45 / 750, cH / 2, cW *45 / 750, 0.5 * Math.PI, -0.5 * Math.PI)
//Total Rectangle is (cW * (1 - 60 / 750) - cW * 1.05 * 45 / 750-cW * 60 / 750 + cW * 45 / 750
let tLen = (cW * (1 - 60 / 750) - cW * 1.05 * 45 / 750-cW * 60 / 750 + cW * 45 / 750)*0.8560
ctx.arc(cW * (1 - 60 / 750) - cW * 1.05 * 45 / 750, cH / 2, cW * 45 / 750, -0.5 * Math.PI, 0.5 * Math.PI)
ctx.lineWidth =2;
ctx.strokeStyle = '#fff3cf';
ctx.closePath();
ctx.stroke();
ctx.beginPath()

ctx.moveTo(cW * 60 / 750 + cW * 45 / 750, cH / 2 - cW * 45 / 750);

ctx.rect(cW * 60 / 750 + cW * 45 / 750, cH / 2 - cW * 45 / 750, tLen / 3, 2 * cW * 45 / 750);

ctx.rect(cW * 60 / 750 + cW * 45 / 750 + tLen / 3, cH / 2 - cW * 45 / 750, tLen / 3, 2 * cW * 45 / 750);
ctx.rect(cW * 60 / 750 + cW * 45 / 750 +2* tLen / 3, cH / 2 - cW * 45 / 750, tLen / 3, 2 * cW * 45 / 750);
ctx.moveTo(cW * 60 / 750 + cW * 45 / 750, cH / 2);
ctx.lineTo(cW * (1 - 60 / 750) - cW * 1.05 * 45 / 750, cH / 2)

ctx.stroke();



ctx.font = "30px Arial";
ctx.fillText(this.state.W+" and high is: cH "+this.state.H, ctx.canvas.width/2, ctx.canvas.height/2)
ctx.fillText(cW+ " and Chigh is: cH " +cH,100, 100);
ctx.beginPath();
ctx.arc(this.state.W / 2, this.state.H / 2, this.state.W*0.3, 0, 2 * Math.PI)
ctx.stroke();

}
ctx.font = "30px Arial";
ctx.fillText(this.state.W + " and high is: cH! " + this.state.text, ctx.canvas.width / 4, ctx.canvas.height / 4)
print()


}
render() {
  const drawing = <canvas ref="canvas"/>

return (<div><canvas ref="canvas"/><h1 onClick={this.handleClick}>
        CLick {this.state.text}
      </h1></div>);
}
}


const Order={
  paddingLeft:window.innerWidth*55/750,
  paddingRight:window.innerWidth*55/750,
  margin:0
}
export default NavBar;