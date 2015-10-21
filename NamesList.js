import React, { Component } from 'react';
import model from './model';

export default class NamesList extends Component {

  constructor() {
    super();
    this.state = {names: {}};
  }

  let update = () => {
    model.getValue(['names', 'length'])
      .then(legth => model.get(['names', {from: 0, to: length - 1}, 'name']))
      .then(response => this.setState({names: response.json.names}));
  }

  componentWillMount() {
    update();
  }

  render() {
    let names = Object.keys(this.state.names).map(idx => {
      return <li key={idx}>{this.state.names[idx].name}</li>;
    });
    return (
      <ul>{names}</ul>
    );
  }

}
