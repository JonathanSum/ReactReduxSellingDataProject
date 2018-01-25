import React, {Component} from 'react'
import Chart from 'chart.js';
import circleBar from './CircleBar'
// import {Doughnut} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import './secondChart.css';
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
    let cW=window.innerWidth
    let cH=window.innerWidth * 1320 / 1700
  let w = window.innerWidth
    let center = ctx.canvas.width / 2
    ctx.beginPath();
    ctx.arc(cW*64/750, cH*205/380, cW*14/750, 0, 2 * Math.PI);

    ctx.fillStyle = "#c4574d";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cW*64/750, cH*(205/380+75/380), cW*14/750, 0, 2 * Math.PI);

    ctx.fillStyle = "#ffc500";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cW*64/750, cH*(205/380+2*75/380), cW*14/750, 0, 2 * Math.PI);

    ctx.fillStyle = "#1ad5de";
    ctx.fill();
    ctx.font=cW*35/750+"px Arial";
    ctx.fillText(this.state.height+" and: "+cH, 10, 50);
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("HOODIE", cW * (64 / 750 + 50 / 750), cH*(212/380))
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("Fitted Cap", cW * (64 / 750 + 50 / 750), cH*(212/380+75/380))
    ctx.beginPath();
    ctx.fillStyle = "#fff3cf";
    ctx.fill();
    ctx.fillText("Bracelet", cW * (64 / 750 + 50 / 750), cH*(212/380+2*75/380))


  }
  render() {
    const drawing = <canvas ref="canvas" width={this.state.width} height={this.state.height}/>

    return (drawing);
  }}
export default TopTwo;