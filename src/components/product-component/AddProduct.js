import React from 'react'
import { useDispatch } from 'react-redux'
import ProductsForm from './ProductsForm'
import { SetCreateProduct } from '../../actions/productAction'
import '../../style.css'

const AddProduct= (props) => {

    const dispatch = useDispatch()

    const addProduct = (data) => {
        const token = localStorage.getItem('token')
        dispatch(SetCreateProduct(data, token))
    }

    return (
        <div className="Addproduct">
            <ProductsForm addProduct={addProduct}/>
        </div>
    )
}
export default AddProduct