import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Announcement from '../Navbar/Announcement';
import Products from '../Navbar/Products';
import Newsletter from '../Navbar/Newsletter';
import Footer from '../Navbar/Footer';

const Container = styled.div`

`;

const Title = styled.h1`margin: 20px;`;

const FilterContainer = styled.div`
     display: flex;
     justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText =styled.span`
    font-size: 20px;
    font-weight: 600;
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
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                </Filter>
            </FilterContainer>
           <Products />
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default ProductList
