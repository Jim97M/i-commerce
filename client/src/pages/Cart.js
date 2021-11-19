import React from 'react'
import styled from 'styled-components'
import Announcement from '../Navbar/Announcement'
import Footer from '../Navbar/Footer'
import Navbar from '../Navbar/Navbar'

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;

const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Bottom = styled.div`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const TopButton = styled.button``;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
              <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                   <TopTexts>
                     <TopText>Shopping Bag(2)</TopText>
                     <TopText>Your Wishlist(0)</TopText>
                   </TopTexts>    
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
              </Wrapper>    
            <Footer />
        </Container>
    );
};

export default Cart
