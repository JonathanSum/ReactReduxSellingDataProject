import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'



const pDaysList = (Days) => {
  const list = [];
  for (let i = 0; i < Days; i++) {
    list[i] = i + 1
  }
  return list
}
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: false,
    legendPosition: 'bottom',
    location: "Sales"
  }
  render() {
    let dataSale=[]
    if(!this.props.date){
dataSale = [this.props.data[0]['dataWeek'], this.props.data[1]['dataWeek'], this.props.data[2]['dataWeek'], pDaysList(10)]
    }else{
      dataSale=[this.props.date[0],this.props.date[1],this.props.date[2],this.props.date[3]]
    }
    return (
      <div className="container">
      <div className="chart">
        <Line
          data={{
  labels: dataSale[3],
  datasets: [
    {
      borderWidth: 1,
label : this.props.data[0]['label'],
      data: dataSale[0],
      backgroundColor: this.props.data[0]['backgroundColor']
    }, {
      label: this.props.data[1]['label'],
      data: dataSale[1],
      backgroundColor: this.props.data[1]['backgroundColor']
    }, {
      label: this.props.data[2]['label'],
      data: dataSale[2],
      backgroundColor: this.props.data[2]['backgroundColor']
    }
  ]
}}

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
    xAxes: [{display:true,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
    yAxes: [{display:false,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                                ticks: {
                    suggestedMin: 10,
                    suggestedMax:10
                }
            }]
    }

        }

      }/>
      </div></div>
    )
  }

}

function mapStateToProps(state){
  return{
    data:state.datas,
    date:state.activeData
  }
}
function matchDispatchToProps(dispatch){

}
export default connect(mapStateToProps)(Chart)
