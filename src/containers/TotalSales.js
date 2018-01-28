// import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import './TotalSales.css';
import { Container, Row, Col } from 'reactstrap';


class Status1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Order: {
				color: 'rgb(255, 243, 207)',
				paddingLeft: window.innerWidth * 55 / 750,
				textAlign: 'left'
			},
			CO: {
				color: 'rgb(255, 243, 207)',
				paddingRight: window.innerWidth * 57 / 750,
				textAlign: 'right'
      }

    };
    this.updateDimensions=this.updateDimensions.bind(this)
	}
	updateDimensions() {
		this.setState({ 

			Order: {
				color: 'rgb(255, 243, 207)',
				paddingLeft: window.innerWidth * 55 / 750,
				textAlign: 'left'
			},
			CO: {
				color: 'rgb(255, 243, 207)',
				paddingRight: window.innerWidth * 57 / 750,
				textAlign: 'right'
			}
     });
	}
	componentWillMount() {
		this.updateDimensions();
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	render() {
		return (
			<div id="main">
				<div id="Order" style={this.state.Order}>
					Order
				</div>
				<div id="CO" style={this.state.CO}>
					Completed Orders
				</div>
			</div>
		);
	}
}
class Status1Number extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OrderN: {
				color: '#c4574d',
				paddingLeft: window.innerWidth * 55 / 750,
				textAlign: 'left'
			},
			CON: {
				color: '#c4574d',
				paddingRight: window.innerWidth * 57 / 750,
				textAlign: 'right'
			}
		};this.updateDimensions = this.updateDimensions
.bind(this)

  }


updateDimensions() {
this.setState({

OrderN: {
  color: '#c4574d',
  paddingLeft: window.innerWidth * 55 / 750,
  textAlign: 'left'
},
CON: {
  color: '#c4574d',
  paddingRight: window.innerWidth * 57 / 750,
  textAlign: 'right'
}
});
}
	componentWillMount() {
		this.updateDimensions();
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	render() {
		return (
			<div id="main">
				<div id="Order" style={this.state.Order}>
					Order
				</div>
				<div id="CO" style={this.state.CO}>
					Completed Orders
				</div>
			</div>
		);
	}
	render() {
		return (
			<div id="main">
				<div id="OrderN" style={this.state.OrderN}>
					31
				</div>
				<div id="CON" style={this.state.CON} id="shadow">
					124
				</div>
			</div>
		);
	}
}

const data = {
	order: 135,
	completed: 124
};
export default class TotalSale extends Component {
	render() {
		return (
			<div>
				<Status1 />
				<Status1Number />
				<p id="TotalSales" style={TotalSales}>Total Sales</p>
				<p style={TotalSalesAmount}>$448.50</p>
			</div>
		);
	}
}
const TotalSalesAmount = {
	paddingBottom: window.innerWidth * 70 / 1680,
	paddingTop: 0,
	margin: 0,
	fontFamily: 'Open Sans',
	fontSize: window.innerWidth * 82 / 1680,
	color: 'rgb(194, 103, 115)'
};
const TotalSales = {
	paddingTop: window.innerWidth * 70 / 1680,
	margin: 0,
	fontSize: window.innerWidth * 120 / 1680,
	textAlignVertical: 'bottom',
	color: 'rgb(255, 243, 207)'
};
const list2Style = {
	color: '#c4574d'
};

const list2Style2 = {
	color: '#c4574d'
};
const list1Style = {
	color: 'rgb(255, 243, 207)'
};
// const Order={
//   color:'rgb(255, 243, 207)',
//   paddingLeft:window.innerWidth*55/750,
//   textAlign:'left'
// }
// const CO={
//   color:'rgb(255, 243, 207)',
//   paddingRight:window.innerWidth*57/750,
//   textAlign:'right'
// }
// const OrderN={
// color : "#c4574d",
//   paddingLeft:window.innerWidth*55/750,
//   textAlign:'left'
// }
// const CON={
// color : "#c4574d",
//   paddingRight:window.innerWidth*57/750,
//   textAlign:'right'
// }
