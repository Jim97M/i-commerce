import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../Navbar/Footer';
import Newsletter from '../Navbar/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
`;

const ImgContainer = styled.div`
   flex: 1;
`;

const Image = styled.img`
   width: 100%;
   height: 70%;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`;

const Description = styled.p`
   
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;
`;

const Announcement = styled.div``;

const FilterContainer = styled.div`
   width: 50%;
   display: flex;
   margin: 30px 0px;
   justify-content: space-between;
`;

const Filter = styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
     width: 30px;
     height: 30px;
     border-radius: 10px;
     border: 1px solid teal;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 5px;
`;

const Button = styled.button`
     padding: 15px;
     border: 2px solid teal;
     background-color: white;
     cursor: pointer;
     font-weight: 500;

     &:hover{
         background-color: #f8f4f4;
     }
`;

// const Remove = styled.div``;

// const Add = styled.div``;


const Product = () => {
    return (
      <Container>
          <Announcement />
            <Wrapper>
                  <ImgContainer>
                     <Image src="https://res.cloudinary.com/dqpsoxe38/image/upload/v1636815756/nore/product5_dydrl0.jpg"/>
                  </ImgContainer>
                  <InfoContainer>
                      <Title>HP Laptop</Title>
                      <Description>
                        This product is for users refined with test to have quality products to their displosal
                        and can ultimately have more to check and announce that the quality of their product and
                        the product shop have more test and offers quality service.
                        This product is for users refined with test to have quality products to their displosal
                        and can ultimately have more to check and announce that the quality of their product and
                        the product shop have more test and offers quality service.
                      </Description>
                      <Price> $20</Price>
                    <FilterContainer>
                        <Filter>
                           <FilterTitle>Color</FilterTitle>
                           <FilterColor color="black"/>
                           <FilterColor color="darkblue"/>
                           <FilterColor color="gray"/>
                           <FilterColor />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                               <FilterSize>
                                   <FilterSizeOption>XS</FilterSizeOption>
                                   <FilterSizeOption>S</FilterSizeOption>
                                   <FilterSizeOption>M</FilterSizeOption>
                                   <FilterSizeOption>L</FilterSizeOption>
                                   <FilterSizeOption>XL</FilterSizeOption>
                                   <FilterSizeOption>XS</FilterSizeOption>
                               </FilterSize>
                        </Filter>
                    </FilterContainer>
                   <AddContainer >
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add/>
                        <Button>ADD TO CART</Button>
                    </AmountContainer>
                   </AddContainer>
                  </InfoContainer>
            </Wrapper>    
          <Newsletter />
          <Footer />
      </Container>
    )
}

export default Product
