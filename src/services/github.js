import axios from 'axios';

export function Link(repo) {
  return `https://github.com/${repo}`;
};

export function ApiLink(repo) {
  return `https://api.github.com/repos/${repo}`;
};

export function FetchData(repo) {
  return axios.get(ApiLink(repo));
};
