import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import SearchForm from './SearchForm'
class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      collapse: false
    };
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {

    //   window.addEventListener('resize', function () { ctx.canvas.height =
    // window.innerWidth*100/750 ctx.canvas.width=window.innerWidth; })
    const ctx = this
      .refs
      .canvas
      .getContext('2d');
    ctx.beginPath();
    ctx.arc(13 * window.innerWidth / 750, 13 * window.innerWidth / 750, 10 * window.innerWidth / 750, 1 * Math.PI / 8, -1.5 * Math.PI - Math.PI / 4, true);
    ctx.lineTo(27 * window.innerWidth / 750, 27 * window.innerWidth / 750)
    ctx.lineWidth = 3 * window.innerWidth / 750;
    ctx.strokeStyle = '#fff3cf'
    ctx.stroke();
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div style={{
        color: 'black'
      }}>
        <canvas
          onClick={this.toggle}
style = {{backgroundColor:'rgb(76, 42, 79)',
          marginBottom: '1rem'
        }}
          ref="canvas"
          style={{
          paddingTop: window.innerWidth * 15 / 750
        }}
          width={window.innerWidth * 30 / 750}
          height={window.innerWidth * 30 / 750}/>
        <Collapse isOpen={this.state.collapse}>

              <Form>
                <FormGroup>
                  <Col><Input
                    type="name"
                    name="month"
                    id="monthSearchBar"
                    placeholder="Enter Month"/>
                  </Col>
                </FormGroup>
              </Form>

        </Collapse>
      </div>
    );
  }
}

export default Example;