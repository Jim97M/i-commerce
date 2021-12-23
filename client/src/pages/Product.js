import { Add, Remove } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethod";

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

const Description = styled.p``;

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
  background-color: ${(props) => props.color};
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

  &:hover {
    background-color: #f8f4f4;
  }
`;

// const Remove = styled.div``;

// const Add = styled.div``;

const Product = () => {
   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const [product, setProduct] = useState({});
  
  useEffect(()=> {
    const getProduct = async() => {
     try{
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(res.data);
      console.log(res.data);
     }catch{}
    }
    getProduct();
  }, [id])

  

  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="{product.img}" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product}</Title>
          <Description>
            {product}
          </Description>
          <Price> {product}</Price>
          <FilterContainer>
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
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
              <Button>ADD TO CART</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
