import React, { useContext } from "react"
import { TagListContainer } from "./tag-list.styles"
import Tag from "../tag/tag.component"
import TagContext from "../../context/tagContext"

const TagList = () => {

  const {tag, changeTag, allTags} = useContext(TagContext);

  return (
    <TagListContainer>
        {
          allTags.map(currentTag => {
            return (<Tag active={currentTag === tag} name={currentTag} changeTag={changeTag}/>)
          })
        }
    </TagListContainer>
  )
}

export default TagList
