import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   flex: 1;
   display: flex;
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding:20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Right = styled.div`
  flex:1;
  flex-direction: column;
`;

const Logo = styled.h2`

`;

const Description = styled.div`
   margin: 20px 0px;
`;

const SocialContainer = styled.div`
   display: flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius:50%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${props =>props.color};
`;


const List = styled.ul`
   margin: 0;
   padding:0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`;

const Title = styled.h3`

`;

const ContactItem = styled.p`
   display: flex;
   margin-bottom: 20px;
   align-item: center;
`;

const Payment = styled.img`
   width: 50px;
   height: 40px;
`;



const Footer = () => {
    return (
        <Container>
            <Left>
               <Logo>
                  I-COMMERCE 
               </Logo>
               <Description>
                   Buy From Our Online Shops 
               </Description>
               <SocialContainer>
                   <SocialIcon color="385999">
                      <Facebook />
                   </SocialIcon>
                   <SocialIcon color="E4405F">
                      <Twitter />
                   </SocialIcon>
                   <SocialIcon color="55ACEE">
                      <Instagram />
                   </SocialIcon>
                   <SocialIcon color="E60023">
                      <WhatsApp />
                   </SocialIcon>
               </SocialContainer>
            </Left>
            <Center>
               <Title>Useful Links</Title>
               <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Women Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wish List</ListItem>
                  <ListItem>Terms</ListItem>
               </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem ><Room style={{marginRight: "10px"}} /> 00100 Nairobi, DownTown 123</ContactItem>
                <ContactItem> <Phone style={{marginRight: "10px"}} /> +254 7123454678 </ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/> icommerce@info.co.ke </ContactItem>

                <Payment src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636901411/nore/mastercard_ikkjuk.jpg"/>
                <Payment src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636901410/nore/visa_j2oyac.png"/>
                <Payment src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636901410/nore/stripe_rejj4l.png"/>
                <Payment src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636901410/nore/paypal_yrsclg.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer
