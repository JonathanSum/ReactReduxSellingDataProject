import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropIcon from './DropIcon';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import SearchForm from './SearchForm'
class List extends React.Component {
constructor(props) {
  super(props);

  this.toggle = this
    .toggle
    .bind(this);
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

    //   window.addEventListener('resize', function () { ctx.canvas.height =
    // window.innerWidth*100/750 ctx.canvas.width=window.innerWidth; })
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(13 * window.innerWidth / 750, 13 * window.innerWidth / 750, 10 * window.innerWidth / 750, 1 * Math.PI / 8, -1.5 * Math.PI - Math.PI / 4, true);
    ctx.lineTo(27 * window.innerWidth / 750, 27 * window.innerWidth / 750)
    ctx.lineWidth = 3 * window.innerWidth / 750;
    ctx.strokeStyle = '#fff3cf'
    ctx.stroke();
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle style={{backgroundColor:'rgb(76, 42, 79)',
      marginBottom: 10*window.innerWidth/750
      }}>
        <canvas
          style={{
          backgroundColor: 'rgb(76, 42, 79)',
          marginBottom: '1rem'
        }}
          ref="canvas"
          style={{
          paddingTop: window.innerWidth * 15 / 750
        }}
          width={window.innerWidth * 30 / 750}
          height={window.innerWidth * 30 / 750}/>
        </DropdownToggle>
        <DropdownMenu>
          <Form>
            <FormGroup>
              <Col><Input type="name" name="month" id="monthSearchBar" placeholder="Enter Month"/>
              </Col>
            </FormGroup>
          </Form>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default List;

