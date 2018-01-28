import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets1: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};
//hartData: props.chartData
const tenDays = [];
const pDaysList = (Days, list) => {
  for (let i = 0; i < Days; i++) {
    list[i] = i + 1
  }
  return list
}
pDaysList(10, tenDays)
console.log(tenDays)
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: tenDays,
        datasets: [
{
  borderWidth:1,
             label: 'Bracelet',
            data: [
              0, 20,40, 30,25,50,20,40,20,0,
            ],
            backgroundColor: ['rgba(36, 199, 211, 0.6)']
          },
                    {
            label: 'Fitted Cap',
            data: [
              0, 10,25, 40,30,50,30,20,5,0,
            ],
            backgroundColor: ['rgba(194, 136, 56, 0.6)']
          },
                    {
            label: 'Hoodie',
            data: [
              0, 5,10, 20,30,54,70,50,20,0,
            ],
            backgroundColor: ['rgba(181, 87, 101, 0.6)']
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: false,
    legendPosition: 'bottom',
    location: "Sales"
  }
  render() {
    return (
      <div className="container">
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
          title: {
            display: this.props.displayTitle,
            // text: "Total Sales " + this.props.label,
            fontSize: 25
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
          },
          scales: {
    xAxes: [{display:false,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
    yAxes: [{display:false,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
    }

        }

      }/></div></div>
    )
  }

}
export default Chart;