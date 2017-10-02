import axios from 'axios';

const github = {
  link: function(repo) {
    return `https://github.com/${repo}`;
  },
  apiLink: function(repo) {
    return `https://api.github.com/repos/${repo}`;
  },
  fetchData: function(repo) {
    console.log('fetchData', this.apiLink(repo));
    return axios.get(this.apiLink(repo));
  }
};

export default github;
