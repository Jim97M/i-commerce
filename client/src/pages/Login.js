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
     url("https://res.cloudinary.com/dqpsoxe38/image/upload/v1636994959/nore/background_icdahv.jpg");
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;

   `;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Input = styled.input`
   flex:1 ;
   min-width: 40%;
   margin: 10px 0px;
   padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        e.preventDefault();
    }

    return (
        <Container>
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
             <Form>
                 <Input name="" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
                 <Input name="" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                 <Button onClick={handleClick}>Sign In</Button>
            </Form>
          
             <Link>Don't Remember Password?</Link>
             <Link>Create New Account</Link>
        </Wrapper>
    </Container>
)
    
}

export default Login;
