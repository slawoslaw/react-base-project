import React from 'react';
import {FetchData} from '../../services/github';
import FetchButton from '../form/FetchButton.jsx';

export default class RepoInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      stars: null,
      watchers: null
    };

    this.fetch = this.fetch.bind(this);
    this.onFetch = this.onFetch.bind(this);
  }

  fetch() {
    return FetchData(this.props.repo);
  };

  onFetch(res) {
    this.setState({
      fetched: true,
      stars: res.data.stargazers_count,
      watchers: res.data.watchers_count
    });
  };

  render() {
    return (
      <div className="repo-info">
        <FetchButton fetchFn={this.fetch} onFetch={this.onFetch} />
        {this.state.fetched &&
          <div className="repo-details">
            stars: {this.state.stars}<br />
            watchers: {this.state.watchers}
          </div>
        }
      </div>
    );
  }
}
