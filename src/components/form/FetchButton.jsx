import React from 'react';
import {FetchData} from '../../services/github';

export default class FetchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      inProgress: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.fetched && !this.state.inProgress) {
      this.setState({inProgress: true});

      FetchData(this.props.repo)
        .then((response) => {
          this.setState({
            fetched: true,
            inProgress: false
          });
          console.log(response);
        })
        .catch((error) => {
          this.setState({
            fetched: false,
            inProgress: false
          });
          console.log(error);
        });
    }
  }

  render() {
    return (
      <button className="fetch-button" onClick={this.handleClick} disabled={this.state.fetched}>
        {this.state.inProgress ? 'download in progress...' : this.state.fetched ? 'fetched' : 'fetch data'}
      </button>
    );
  }
}
