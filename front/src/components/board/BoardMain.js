import React from 'react';
import EdgeLayout from '../commonsComponents/EdgeLayout';
import FilteringBar from './FilteringBar';
import PostList from './PostList';

const BoardMain = () => {
  return (
    <EdgeLayout>
      <FilteringBar />
      <PostList />
    </EdgeLayout>
  );
};

export default BoardMain;
