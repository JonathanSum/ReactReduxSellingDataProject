import React, {Component} from 'react'
import Chart from 'chart.js';
import circleBar from './CircleBar'
// import {Doughnut} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import './secondChart.css';

class Draw extends Component {
constructor() {
  super();
  this.state = {
    width : 2 * window.innerWidth * 200 / 750,
    height : 2 * window.innerWidth * 200 / 750
  }
}

  componentDidMount() {
this.timerID = setInterval(() =>
  this.updateCanvas());
  }
componentWillUnmount() {
  clearInterval(this.timerID);
}
tick() {
  this.setState({date: new Date()});
}
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    ctx.canvas.width = 2 * window.innerWidth * 200/750//0.258
    ctx.canvas.height =  ctx.canvas.width
const w = window.innerWidth
const center = ctx.canvas.width / 2

ctx.lineWidth = w * (42 / 750)

let R3 = window.innerWidth * 172.5 / 750
let R2 = R3 - w * 42 / 750 - w * 3 / 750
let R1 = R2 - w * 42 / 750 - w * 3 / 750
let wCircle = w * (42 / 750) * 14 / 41
const drawAll=()=>{

    let R3Circle = new circleBar(R3, 0.6 * Math.PI * 2, [196, 87, 77],ctx,center)
    R3Circle.draw()
    ctx.beginPath();
    ctx.arc(center,center-R3,wCircle,0,2*Math.PI); //drawing the first small white circle
    ctx.fillStyle = "white";
    ctx.fill();
    let R2Circle = new circleBar(R2, 0.4 * Math.PI * 2, [255, 197, 0],ctx,center)
    R2Circle.draw()
    ctx.beginPath();
    ctx.arc(center,center-R2,wCircle,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    let R1Circle = new circleBar(R1, 0.6 * Math.PI * 2, [26, 213, 222],ctx,center)
    R1Circle.draw()
    ctx.beginPath();
    ctx.arc(center, center - R1, wCircle, 0, 2 * Math.PI, ctx, center)
    ctx.fillStyle = "white";
    ctx.fill();



    }
let printLabels = () => {
  ctx.font = 2 * wCircle + "px Arial";
  ctx.beginPath();
  ctx.fillStyle = "#c4574d";
  ctx.fill();
  ctx.fillText("HOODIE", ctx.canvas.width * 100 / 750, center - R3 + w * (42 / 750) * 10 / 41)

  ctx.beginPath();
  ctx.fillStyle = "#ffc500";
  ctx.fill();
  ctx.fillText("FITTED CAP", 0, center - R2 + wCircle)

  ctx.beginPath();
  ctx.fillStyle = "#1ad5de";
  ctx.fill();
  ctx.fillText("BRACELET", w * 20 / 750, center - R1 + wCircle)

}
drawAll()
printLabels()
// var r=0
// var dx=0.05



}
  render() {
const drawing = <canvas id="Sales" ref="canvas" width={this.state.width} height={this.state.height}/>

    return (drawing);
  }
}
export default Draw;