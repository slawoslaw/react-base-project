import React from 'react';

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

      this.props.fetchFn()
        .then((response) => {
          this.setState({
            fetched: true,
            inProgress: false
          });

          this.props.onFetch(response);
        })
        .catch((error) => {
          this.setState({
            fetched: false,
            inProgress: false
          });

          this.props.onFetch(error);
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
