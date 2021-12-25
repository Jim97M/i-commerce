import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement.js'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import { Add, Remove } from '@material-ui/icons'

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
   padding: 20px;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
`;


const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Info = styled.div`
    flex: 3;
`;


const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none "};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Product = styled.div`
     display: flex;
     justify-content: space-between;    
`;

const ProductName = styled.span`
margin-bottom: 3;
  `;

const Image = styled.img`
width: 200px;
`;

const ProductID = styled.span`
margin-bottom: 3;
  `;
const ProductColor = styled.div`
width: 20px;
height: 20px;
margin-bottom: 3;
border-radius: 50%;
background-color: ${props => props.color}
`;
const ProductSize = styled.span`
  `;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
`;

const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 60vh;
`;

const SummaryTitle = styled.h1`

`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "650"};
  font-size: ${props => props.type === "total" && "24px"}
`;

const SummaryItemPrice = styled.span`

`;

const SummaryItemText = styled.span`

`;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  font-weight: 600;
`;


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
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636815692/nore/product9_juofuw.jpg" />

                <Details>
                  <ProductName> <b>Product:</b> Tag Heuer Watch</ProductName>
                  <ProductID> <b>ID: 527362476 </b> </ProductID>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> 36</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Ksh. 120</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636815692/nore/product9_juofuw.jpg" />

                <Details>
                  <ProductName> <b>Product: </b> Tag Heuer Watch</ProductName>
                  <ProductID> <b>ID: 527362476 </b> </ProductID>
                  <ProductColor color="black" />
                  <ProductSize><b>Size: </b> 36</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Ksh.120</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Ksh. 500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Ksh. 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Ksh. 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>Ksh. 650</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart
