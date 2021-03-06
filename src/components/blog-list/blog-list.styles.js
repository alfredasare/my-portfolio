import styled from "styled-components";
import {motion} from "framer-motion";

export const BlogListContainer = styled(motion.section)`
  height: auto;
  width: 80%;
  border-top: 2px solid rgba(0,0,0,0.02);
  padding-top: 50px;
  margin: 40px auto 150px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  justify-items: center;
  align-items: stretch;
  
  @media screen and (max-width: 349px) {
    width: 90%;
  }
  
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;