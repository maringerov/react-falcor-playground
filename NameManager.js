import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NameAdder from './NameAdder';
import NamesList from './NamesList';

class NameManager extends Component {

  let handleNameAdded = () => {
    this.refs.namesList.update();
  };

  render() {
    return (
      <div>
        <NameAdder onAdded={this.handleNameAdded()} />
        <NamesList ref='namesList' />
      </div>
    );
  }

}

ReactDom.render(<NameManager />, document.getElementById('demo'));
