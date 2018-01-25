import React, {Component} from 'react'
import Chart from 'chart.js';
// import {Doughnut} from 'react-chartjs-2'
const a1 = <canvas ref="canvas" width={300} height={300}/>
class Draw extends Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this
      .refs
      .canvas
      .getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange"
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [
              12,
              19,
              3,
              5,
              2,
              3
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    const drawing = <canvas ref="canvas" width={300} height={300}/>

    return (drawing);
  }
}
export default Draw;