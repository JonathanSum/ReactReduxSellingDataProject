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
            label: 'Amount Of Sells',
            data: [
              0, 10,50, 80,10,60,20,40,20,0,
            ],
            backgroundColor: ['rgba(36, 199, 211, 0.6)']
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
            text: "Total Sales " + this.props.location,
            fontSize: 25
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
        }}/></div></div>
    )
  }

}
export default Chart;