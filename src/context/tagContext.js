import {createContext} from 'react';

const TagContext = createContext({
  tag: 'All',
  changeTag: () => {},
  allTags: []
});

export default TagContext;