import {Link, ApiLink, FetchData} from '../../services/github';

const repo = 'facebook/react';

describe('Github service', () => {
  describe('Link', () => {
    it('should render proper github link', () => {
      expect(Link(repo)).toEqual('https://github.com/facebook/react');
    });
  });

  describe('ApiLink', () => {
    it('should render github api link', () => {
      expect(ApiLink(repo)).toEqual('https://api.github.com/repos/facebook/react');
    });
  });

  describe('FetchData', () => {
    it('should return promise', () => {
      expect(FetchData(repo).constructor).toEqual(Promise);
    });
  });
});
