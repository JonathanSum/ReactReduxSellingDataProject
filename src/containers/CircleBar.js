
export default class circleBar {
constructor(r, endP, rgb, ctx,center) {
    this.r = r;
    this.endP = endP;
    this.rgb = rgb;
    this.ctx=ctx;
    this.center=center
  }

  draw = () => {
    this.ctx.lineCap = 'round'
    this.ctx.beginPath();
    this.ctx.strokeStyle = `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]},1)`;
    this.ctx.arc(this.center, this.center, this.r, -0.5 * Math.PI, -0.5 * Math.PI + this.endP);
    this.ctx.stroke();
    this.ctx.lineCap = 'round'
    this.ctx.beginPath();
    this.ctx.strokeStyle = `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]},0.2)`;
    this.ctx.arc(this.center, this.center, this.r, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.lineCap = 'round'

  }

}