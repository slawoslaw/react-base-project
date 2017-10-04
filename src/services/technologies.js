import React from 'react';
import {Link} from './github';
import FetchButton from '../components/form/FetchButton.jsx';

export function TechnologiesParser(list) {
  return list.map((item, index) => {
    const link = Link(item.repo);

    return {
      title: item.name,
      subtitle: <a href={link} target="_blank">{item.repo}</a>,
      content: <FetchButton repo={item.repo} />
    };
  });
};
