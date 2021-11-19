import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: 
   linear-gradient(
       rgba(255,255,255,0.5),
       rgba(255, 255, 255, 0.5)
   ),
   url("https://res.cloudinary.com/dqpsoxe38/image/upload/v1636994959/nore/background_icdahv.jpg") center;
     display: flex;
     align-items: center;
     justify-content: center;

   `;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;

const Input = styled.input`
   flex:1 ;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`;

const Agreement = styled.div`
   font-size: 12px;
   margin: 20px 0px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
                 <Form>

                     <Input name="" placeholder="First Name"/>
                     <Input name="" placeholder="First Name"/>
                     <Input name="" placeholder="Last Name"/>
                     <Input name="" placeholder="Email"/>
                     <Input name="" placeholder="Password"/>
                     <Input name="" placeholder="Confirm Password"/>
                 </Form>
                 <Agreement>
                     I agree to the terms and conditions of service use and  to <b>LICENCE</b> agreement
                 </Agreement>
                 <Button>Create Account</Button>
            </Wrapper>
        </Container>
    )
}

export default Register;
