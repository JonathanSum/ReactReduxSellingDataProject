import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import List from './SearchList'


export default class SearchIcon extends React.Component{
constructor(props) {
  super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
render() {
  return (
    <div>
    <List/>
    </div>
  );
}

}


