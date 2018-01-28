import React, { Component } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropOnly from './DropDownOnly';
import SearchIcon from './SearchIcon';
class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="d-flex justify-content-between" style={styleMainBox}>
					<div className="d-flex align-items-start"><DropOnly /></div>
					<div  style={DashBoard} >DASHBOARD</div>
					<div className="d-flex align-items-start"><SearchIcon/></div>
				</div>
			</div>
		);
	}
}

let DashBoard = {
	height: '100%',
	// border: '1px solid',

	fontSize: 40 * window.innerWidth / 750,
	color: 'rgb(255, 243, 207)'
};

let fItem = {
	display: 'flex',
	flex: 1,
	height: '100%',
	// border: '1px solid',
	justifyContent: 'space-between',
	alignItems: 'center',
	fontSize: 90 / 750 * window.innerWidth * 1 / 3,
	// fontFamily: 'Open Sans',
	color: 'rgb(255, 243, 207)'
};

class FlexContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				style={{
					height: 90 / 750 * window.innerWidth,
					display: 'flex',
					// marginBottom: window.innerWidth*47/750,
					// paddingTop:40*window.innerWidth/750,
					// paddingBottom:35*window.innerWidth/750,
					fontSize: 40 * window.innerWidth / 750,
					// border: '2px solid',
					color: 'rgb(255, 243, 207)',
					justifyContent: 'space-between',
					// // borderColor: 'rgb(255, 243, 207)',
					// marginLeft: window.innerWidth * 28 / 750,
					// marginRight: window.innerWidth * 28 / 750,
					paddingLeft: 27 * window.innerWidth / 750,
					paddingRight: 27 * window.innerWidth / 750
				}}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Title;



let styleMainBox = {
					height: 90 / 750 * window.innerWidth,
					display: 'flex',
					// marginBottom: window.innerWidth*47/750,
					// paddingTop:40*window.innerWidth/750,
					// paddingBottom:35*window.innerWidth/750,
					fontSize: 40 * window.innerWidth / 750,
					// border: '2px solid',
					color: 'rgb(255, 243, 207)',

					// // borderColor: 'rgb(255, 243, 207)',
					marginLeft: window.innerWidth * 10 / 750,
					// marginRight: window.innerWidth * 28 / 750,
					paddingLeft: 27 * window.innerWidth / 750,
					paddingRight: 27 * window.innerWidth / 750
				}

// <DropdownItem href="#TotalSales">Total Sales</DropdownItem> <DropdownItem
// href="#Earning">Progress</DropdownItem> <DropdownItem
// href="#Sales">Sales</DropdownItem> <DropdownItem divider/> <DropdownItem
// href="AboutMe">About Me</DropdownItem>