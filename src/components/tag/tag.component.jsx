import React from "react"
import { TagWrapper } from "./tag.styles"

const Tag = ({name, active, changeTag}) => {
  return (
    <TagWrapper className="tag" active={active} onClick={() => changeTag(name)}>
      {name}
    </TagWrapper>
  )
}

export default Tag
