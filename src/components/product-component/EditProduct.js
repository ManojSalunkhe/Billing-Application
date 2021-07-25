import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal,Button } from 'react-bootstrap'
import ProductsForm from './ProductsForm'
import { SetEditProducts } from '../../actions/productAction'

const EditProduct = (props) => {

    const { toggle, handleToggle, product } = props
    const dispatch = useDispatch()

    const editProduct = (data) => {
        const token = localStorage.getItem('token')
        dispatch(SetEditProducts(product._id, data, token, handleToggle))
    }

    return (
        <div>
            <Modal show={toggle} onHide={handleToggle} className="editModal">
                <Modal.Body>
                    <ProductsForm editProduct={editProduct} handleToggle={handleToggle} product={product} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleToggle}>cancel</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditProduct