import React from 'react';

export default class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="subtitle">
          <h2>{this.props.subtitle}</h2>
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}
