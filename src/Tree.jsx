import React, { PureComponent } from 'react';
import { Tree } from 'antd';
import Node from './TreeNode';

const TreeNode = Tree.TreeNode;

export default class  extends PureComponent {
  render() {
    const nodes = [1, 2, 3, 4].map(i => {
      return (
        <TreeNode title={<Node name={`name-${i}`} />} key={i} />
      );
    });
    return (
      <Tree>
        {nodes}
      </Tree>
    );
  }
}
