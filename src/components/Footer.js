import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  const now = new Date();
  return (
    <Wrapper>
      <h5>
        &copy; {`${now.getDate()}`.padStart(2, '0')} /
        {`${now.getMonth() + 1}`.padStart(2, '0')} /{now.getFullYear()}
      </h5>
      <h5>thenguyenngochn@gmail.com</h5>
      <h5>Ngoc The - Shop </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
