import React from 'react';
import github from './github';
import FetchButton from '../components/form/FetchButton.jsx';

const technologies = {
  parse: function(list) {
    return list.map((item, index) => {
      const link = github.link(item.repo);
      return {
        title: item.name,
        subtitle: <a href={link} target="_blank">{item.repo}</a>,
        content: <FetchButton repo={item.repo} />
      };
    });
  }
};

export default technologies;
