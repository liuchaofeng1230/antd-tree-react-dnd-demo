import React, { Component } from 'react';
import {
  DropTarget,
  DragDropContext,
} from 'react-dnd';
import * as antd from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import Tree from './Tree';


import 'antd/dist/antd.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('antd version: ' + antd.version);
  }

  renderContainer() {
    const { isOver } = this.props;
    let className = 'normal drop';
    let name = 'not hovered';
    if (isOver) {
      className = 'hover drop';
      name = 'can drop';
    }
    return this.props.connectDropTarget(
      (
        <div className={className}>
          {name}
        </div>
      )
    );
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <Tree />
        </div>
        <div className="right">
          {this.renderContainer()}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DropTarget(
  'test',
  {
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(App));
