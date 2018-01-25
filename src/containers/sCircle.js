
export default class sCircle {
  constructor(rank, color, cW, cH,ctx) {
    this.color = color;
    this.rank = rank
    this.cW = cW;
    this.cH = cH;
    this.ctx=ctx
  }
  draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.cW * 64 / 750, this.cH * (205 / 380 + this.rank * 70 / 380), this.cW * 14 / 750, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}