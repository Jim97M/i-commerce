import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Announcement from '../Navbar/Announcement';
import Products from '../Navbar/Products';
import Newsletter from '../Navbar/Newsletter';
import Footer from '../Navbar/Footer';
import Product from './Product';
import Cart from './Cart';


const Container = styled.div``;

const Title = styled.h1`margin: 20px;`;

const FilterContainer = styled.div`
     display: flex;
     justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    
`;

const Select = styled.select`
    
`;

const Option = styled.option`
  
`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <FilterContainer>

                <Filter>
                    <Title>Laptops</Title>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
            <Cart />
        </Container>
    );
}

export default ProductList
