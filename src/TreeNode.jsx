import React, { PureComponent } from 'react';
import { DragSource } from 'react-dnd';

class TreeNode extends PureComponent {
  render() {
    return this.props.connectDragSource(
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default DragSource(
  'test',
  {
    beginDrag(props) {
      return {
        name: props.name,
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(TreeNode);
