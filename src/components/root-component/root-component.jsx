import React, { useState } from "react"
import TagContext from "../../context/tagContext"

const RootComponent = ({ children }) => {

  const [tag, setTag] = useState('All');
  const allTags = ['All', 'React', 'Algorithms'];
  const changeTag = tag => setTag(tag);

  return (
    <TagContext.Provider value={{
      tag,
      changeTag,
      allTags
    }}>
      {children}
    </TagContext.Provider>
  );
}

export default RootComponent;