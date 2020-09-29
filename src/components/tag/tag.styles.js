import styled from "styled-components"

export const TagWrapper = styled.span`
  padding: 5px 25px;
  border: ${({active, theme}) => active ? '2px solid #FFF0D3' : `2px solid ${theme.tagColor}`};
  border-radius: 20px;
  background-color: ${({active}) => active ? '#FFF0D3' : 'none'};
  color: ${({active, theme}) => active ? 'black' : theme.tagColor};
  margin-right: 30px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  opacity: ${({active}) => active ? 1.0 : 0.8};
  
  &:hover {
    opacity: 1.0;
  }
`;