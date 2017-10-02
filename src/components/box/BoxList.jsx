import React from 'react';
import Box from './Box.jsx';

export default class BoxList extends React.Component {
  render() {
    const items = this.props.items;
    const boxItems = items.map((item, index) => {
      return <Box key={index} title={item.title} subtitle={item.subtitle} content={item.content} />
    });

    return (
      <div className="box-list">
        {boxItems}
      </div>
    );
  }
}
