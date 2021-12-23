import { Badge } from "@material-ui/core";
import { Search, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
   height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
   flex:1;
   display: flex;
   align-items: center;
`
const Center = styled.div`
   flex:1
`
const Right= styled.div`
   flex:1;
   display:flex;
   align-items:center;
   justify-content:end;
` 

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
   border: 0.5px solid lightgrey;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;

`

const Input = styled.input`
   border: none;

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;

`
const Logo = styled
const Navbar = () => {
    return (
        <Container>
             <Wrapper>
              <Left>
                  <Language>EN</Language>
                    <SearchContainer>
                      <Input />
                      <Search style={{color: "gray", fontSize:16}} />  
                  </SearchContainer>
              </Left>
              <Center>Center</Center>
              <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGNIN</MenuItem>
                <MenuItem>
                  <Badge
                    badgeContent={5}
                    color="primary"
                  >
                     
                     <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Right>
            </Wrapper> 
        </Container>
          
      
    )
}

export default Navbar
