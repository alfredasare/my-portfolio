import React from 'react';
import {StyledBurger} from './burger.styles';

const Burger = ({open, setOpen}) => {

  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={open} open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
};


export default Burger;