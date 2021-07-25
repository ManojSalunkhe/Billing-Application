import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {RiDeleteBin6Line} from 'react-icons/ri'

const MyCartSubmit = (props) => {

    const { showMyCart, myCart, products, handleShowMycart, handleSubmit, handleDecrement, handleIncrement ,handleRemoveProduct} = props

    let result = []

    for (let i = 0; i < myCart.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (myCart[i].product === products[j]._id) {
                result.push({ ...products[j], quantity: myCart[i].quantity })
            }
        }
    }

    console.log(result)


    return (
        <div>
            <Modal show={showMyCart} onHide={handleShowMycart} className="editModal" >
                <h3>My Cart ({result.length})</h3>
                {
                    result.map((product) => {
                        return (
                            <div key={product._id}>
                                <Modal.Header>
                                    <b>Product Name :  {product.name}</b>
                                </Modal.Header>
                                <Modal.Body>
                                    <b>Price : {product.price}₹</b><br/>
                                    <b>Quantity :{product.quantity}</b> <br/>
                                    <b>Total : {product.price * product.quantity}</b>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => handleDecrement(product._id)} variant="danger">-</Button> {product.quantity} <Button onClick={() => handleIncrement(product._id)}>+</Button>
                                    <Button onClick={()=>handleRemoveProduct(product._id)}><RiDeleteBin6Line/>Remove</Button>
                                </Modal.Footer>
                            </div>
                        )
                    })
                }
                <Button onClick={handleSubmit}>Place Order</Button>
                <Button onClick={handleShowMycart} variant="danger">cancel</Button>
            </Modal>
        </div>
    )
}

export default MyCartSubmit