import styled from 'styled-components';
import { bitterSweet } from "../../utils/colors"

export const StyledBurger = styled.button`
  
  right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${bitterSweet};
    outline: none;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(43deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      height: 0;
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(27px)' : 'translateX(0)'};
    }
    :last-child {
      transform: ${({ open }) => open ? 'rotate(-43deg)' : 'rotate(0)'};
    }
  }
`;