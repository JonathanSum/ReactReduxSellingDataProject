import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropIcon from './DropIcon';

class DropOnly extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

		componentDidMount() {
		this.updateCanvas();
	}
	updateCanvas() {
		//   window.addEventListener('resize', function () {
		// ctx.canvas.height = window.innerWidth*100/750
		// ctx.canvas.width=window.innerWidth;
		// })
		const ctx = this.refs.canvas.getContext('2d');
		ctx.fillStyle = '#fff3cf';
		ctx.fill();
		ctx.fillRect(0, 1 * window.innerWidth / 750, 28 * window.innerWidth / 750, 3 * window.innerWidth / 750);
		ctx.fillRect(
			0,
			(3 + 5 + 1) * window.innerWidth / 750,
			28 * window.innerWidth / 750,
			3 * window.innerWidth / 750
		);
		ctx.fillRect(
			0,
			(2 * (3 + 5) + 1) * window.innerWidth / 750,
			28 * window.innerWidth / 750,
			3 * window.innerWidth / 750
		);
	}
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={{backgroundColor:'rgb(76, 42, 79)'}}>
          				<canvas  onClick={this.handleClick}
          ref="canvas"
          width={window.innerWidth * 28 / 750}
          height={window.innerWidth * 21 / 750}/>

        </DropdownToggle>
        <DropdownMenu>
					<DropdownItem href="#TotalSales">Total Sales</DropdownItem>
					<DropdownItem href="#Earning">Progress</DropdownItem>
					<DropdownItem divider />
					<DropdownItem href="AboutMe">About Me</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default DropOnly