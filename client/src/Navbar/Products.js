import React, {useState, useEffect } from 'react'
import styled from "styled-components";
import { popularProduct } from '../data';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async() => {
         try{ const res = await axios.get(cat ? `http://localhost:5000/api/v1/product?category=${cat}` : "http://localhost:5000/api/v1/product")
         setProducts(res.data)
        } catch(err){
            console.log(err)
        }
        };
        getProducts()
    },[cat])

    useEffect(() => {
        cat && setFilteredProducts(
            //Check if every product has color size key value
            products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))
        ));
    },[products,cat, filters]);
    return (
        <Container>
            {filteredProducts.map((item) => (
               <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
