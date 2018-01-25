import React, {Component} from 'react'
import circleBar from './CircleBar'
class NavBar extends React.Component{

constructor(props) {
  super(props);
  this.state = {
    H:0,
    W:0
  }
  this.updateDimensions=this.updateDimensions.bind(this)
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
    W:window.innerWidth,
    H:window.innerHeight

  })}
updateCanvas() {
  const ctx = this.refs.canvas.getContext('2d');

  ctx.canvas.height = window.innerWidth*90/750
  ctx.canvas.width=window.innerWidth;
let cW = ctx.canvas.width
let cH = ctx.canvas.height
window.addEventListener('resize', function () {
    cW = 2 * window.innerWidth * 200 / 750 //0.258
    ctx.canvas.height = ctx.canvas.width
    print()

  })

let print =()=>{
ctx.font = "30px Arial";
ctx.fillText(this.state.W+" and high is: cH "+this.state.H, ctx.canvas.width/2, ctx.canvas.height/2)
ctx.fillText(cW+ " and Chigh is: cH " +cH,

100, 100);
ctx.beginPath();
ctx.arc(this.state.W / 2, this.state.H / 2, this.state.W*0.3, 0, 2 * Math.PI)
ctx.stroke();
}


//   ctx.beginPath();
//   ctx.arc(cW* 60 / 750+cW*6/750, cH/2, cW*6/750,  0.5 * Math.PI, -0.5 * Math.PI)
// ctx.arc(cW*(1-60 / 750)-cW*1.5*6/750, cH / 2, cW*6/750 , -0.5 * Math.PI, 0.5 * Math.PI)
// ctx.lineWidth = 0.5;
// ctx.strokeStyle = '#fff3cf';
// ctx.closePath();
// ctx.stroke();
// ctx.beginPath();
// const P=0.1

// const calP = (P) => {
//   let endBar = (((cW * (1 - 60 / 750) - cW *1.5* 6 / 750) + -cW * 60 / 750) * P + cW * 60 / 750)
//   if(P>0.01){    //Setting min 1%
//       ctx.arc(cW * 60 / 750 + cW * 5 / 750, cH / 2, cW * 7 / 750, 0.5 * Math.PI, -0.5 * Math.PI)
//       //end of the bar
//       ctx.arc(endBar, cH / 2, cW * 7 / 750, -0.5 * Math.PI, 0.5 * Math.PI)
//       ctx.strokeStyle = '#FF867D';
//       ctx.fillStyle = '#FF867D';
//       ctx.fill()
//   }else{
//     return;
//   }
// }
// calP(P)
}
render() {
  const drawing = <canvas ref="canvas"/>

  return (drawing);
}
}


const Order={
  paddingLeft:window.innerWidth*55/750,
  paddingRight:window.innerWidth*55/750,
  margin:0
}
export default NavBar;