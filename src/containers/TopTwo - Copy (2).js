import React, {Component} from 'react'
import Chart from 'chart.js';
import circleBar from './CircleBar'
// import {Doughnut} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import './secondChart.css';
import sCircle from './sCircle'
class TopTwo extends Component {
  constructor() {
    super();
    this.state = {
      width:  window.innerWidth ,
      height: window.innerWidth * 1320 / 1700,
      wH:window.innerHeight,
      wW:window.innerWidth,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateCanvas(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    // let cW=ctx.canvas.width;
    // let cH=ctx.canvas.height;
    ctx.canvas.width =  window.innerWidth
    ctx.canvas.height =   ctx.canvas.width*380/750
    const cW=ctx.canvas.width
    const cH=ctx.canvas.height
    let center = cW / 2
ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx.stroke();
    let c1 = new sCircle(0, "#c4574d",cW,cH,ctx)
    c1.draw()
    let c2 = new sCircle(1, "#ffc500", cW, cH,ctx)
    c2.draw()
    let c3 = new sCircle(2, "#1ad5de", cW, cH,ctx)
    c3.draw()
    ctx.beginPath();
    ctx.font=cW*35/750+"px Arial";
    ctx.fillText(this.state.height+" and: "+cH, 10, 50);
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("HOODIE", cW * (64 / 750 + 50 / 750), cH*(212/380))
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("Fitted Cap", cW * (64 / 750 + 50 / 750), cH*(212/380+37/380))
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("Bracelet", cW * (64 / 750 + 50 / 750), cH*(212/380+2*37/380))
    ctx.fillText("$74.00", cW * (93 / 750), cH * cH * (212 / 380 + 0 * 75 / 380))
    ctx.fillText("$69.50", cW * (93 / 750), cH * cH * (212 / 380 + 1 * 75 / 380))
    ctx.fillText("$39.50", cW * (93 / 750), cH * cH * (212 / 380 + 2 * 75 / 380))
    ctx.beginPath();
    ctx.fillStyle = "##c4574d";
    ctx.fill();

  }
  render() {
    const drawing = <canvas ref="canvas" width={this.state.width} height={this.state.height}/>

    return (drawing);
  }}
export default TopTwo;


// ctx.fillText("$74.00", cW * (93 / 750), cH * cH * (212 / 380 + 0 * 75 / 380))
// ctx.fillText("$69.50", cW * (93 / 750), cH * cH * (212 / 380 + 1 * 75 / 380))
// ctx.fillText("$39.50", cW * (93 / 750), cH * cH * (212 / 380 + 2 * 75 / 380))
// ctx.beginPath();
// ctx.fillStyle = "##c4574d";
// ctx.fill();