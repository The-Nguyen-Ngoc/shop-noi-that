import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <div
          style={{
            backgroundColor: '#fff565',
            textAlign: 'center',
            height: '400px',
            fontSize: '30px',
          }}
        >
          Loading...
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  .page {
    background-color: #fff565;
  }
`;
export default CheckoutPage;
