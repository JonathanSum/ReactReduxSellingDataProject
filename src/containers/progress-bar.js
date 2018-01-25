import React, {Component} from 'react'
import circleBar from './CircleBar'
class ProgressBar extends React.Component{

componentDidMount() {
  this.timerID = setInterval(() => this.updateCanvas(), 1000);
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
updateCanvas() {
  const ctx = this.refs.canvas.getContext('2d');

  ctx.canvas.height = window.innerWidth*30/750
  ctx.canvas.width=window.innerWidth;
const cW = ctx.canvas.width
const cH = ctx.canvas.height
  let center1=cW*0.2
  let center2=cW*0.8
  ctx.beginPath();
  ctx.arc(cW* 60 / 750+cW*6/750, cH/2, cW*6/750,  0.5 * Math.PI, -0.5 * Math.PI)
ctx.arc(cW*(1-60 / 750)-cW*1.5*6/750, cH / 2, cW*6/750 , -0.5 * Math.PI, 0.5 * Math.PI)
ctx.lineWidth = 0.5;
ctx.strokeStyle = '#fff3cf';
ctx.closePath();
ctx.stroke();
ctx.beginPath();
const P=0.25

const calP = (P) => {
  let endBar = (((cW * (1 - 60 / 750) - cW *1.5* 6 / 750) + -cW * 60 / 750) * P + cW * 60 / 750)
  if(P>0.01){    //Setting min 1%
      ctx.arc(cW * 60 / 750 + cW * 5 / 750, cH / 2, cW * 7 / 750, 0.5 * Math.PI, -0.5 * Math.PI)
      //end of the bar
      ctx.arc(endBar, cH / 2, cW * 7 / 750, -0.5 * Math.PI, 0.5 * Math.PI)
      ctx.strokeStyle = '#FF867D';
      ctx.fillStyle = '#FF867D';
      ctx.fill()
  }else{
    return;
  }
}
calP(P)
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
export default ProgressBar;