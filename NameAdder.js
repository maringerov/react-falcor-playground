import React, { Component, PropTypes } from 'react';
import model from './model.js';

export default class NameAdder extends Component {

  static propTypes = {
    onAdded: PropTypes.func.isRequired
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    let input = this.refs.input;
    model.
      call(['names', 'add'],
          [input.value],
          ['name']).
      then(() => {
        input.value = null;
        input.focus();
        this.props.onAdded();
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit()}>
        <input ref='input' />
        <button>add name</button>
      </form>
    );
  }

}
