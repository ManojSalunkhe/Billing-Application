import React from 'react'
import AddProduct from './AddProduct'
import ProductsList from './ProductsList'
import { Container } from 'react-bootstrap'

const ProductsContainer = (props) => {

    return (
        <div>
            <Container>
                    <AddProduct />
                    <ProductsList />
            </Container>
        </div>
    )
}
export default ProductsContainer