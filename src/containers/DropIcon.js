import React, {Component} from 'react';
export default class DropIcon extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
  //   window.addEventListener('resize', function () {
  // ctx.canvas.height = window.innerWidth*100/750
  // ctx.canvas.width=window.innerWidth;
  // })
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#fff3cf'
    ctx.fill();
    ctx.fillRect(0,  1*window.innerWidth/750, 28*window.innerWidth/750,  3*window.innerWidth/750);
    ctx.fillRect(0, (3+5+1)*window.innerWidth/750, 28*window.innerWidth/750,3*window.innerWidth/750);
    ctx.fillRect(0, (2*(3+5)+1)*window.innerWidth/750,28*window.innerWidth/750, (3)*window.innerWidth/750)

  }
  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width={window.innerWidth * 28 / 750}
          height={window.innerWidth * 21 / 750}/>
      </div>
    )
  }
}
