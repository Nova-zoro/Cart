import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = (props) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{props.val}
    </Wrapper>
  );
};


const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  ${'' /* padding-left: 1.2rem; */}
  NavLink {
    font-size: 2rem;
  }
`;


export default PageNavigation;