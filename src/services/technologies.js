import React from 'react';
import {Link, FetchData} from './github';
import FetchButton from '../components/form/FetchButton.jsx';

function onFetch(data) {
  console.log(data);
}

export function TechnologiesParser(list) {
  return list.map((item, index) => {
    const link = Link(item.repo);
    const fetchFn = () => {
      return FetchData(item.repo);
    };

    return {
      title: item.name,
      subtitle: <a href={link} target="_blank">{item.repo}</a>,
      content: <FetchButton fetchFn={fetchFn} onFetch={onFetch} />
    };
  });
};
