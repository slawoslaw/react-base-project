import React from 'react';
import Box from './Box.jsx';

export default class BoxList extends React.Component {
  constructor(props) {
    super(props);

    this.boxItems = this.props.items.map((item, index) => {
      return <Box key={index} title={item.title} subtitle={item.subtitle} content={item.content} />
    });
  }

  render() {
    return (
      <div className="box-list">
        {this.boxItems}
      </div>
    );
  }
}
