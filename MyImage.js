import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {

  return (
    <Wrapper>   
      <div className="grid grid-four-column">
        <div className="main-screen">
          <img src={imgs[0].url} alt={imgs.filename} />
        </div>
        <div className="bottom-screen">
          {imgs.map((curElm, index) => {
            return (
              <figure>
                <img
                  src={curElm.url}
                  alt={curElm.filename}
                  className="box-image--style"
                  key={index}
                />
              </figure>
            );
          })}
        </div>      
      </div>      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display:flex;
  .grid {
   display:flex;
   flex-direction:column;
   gap:5rem;
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .bottom-screen{
    display:flex;
    flex-direction:row;
    gap:1.5rem;
    margin-top:1rem;
    order:2;
  }
  .main-screen {
    display:flex;
    order: 1;
    justify-content:center;
    img {
      width: 50rem;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;