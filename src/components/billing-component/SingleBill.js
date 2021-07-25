import React  from 'react'
import PrintBill from './PrintBill'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

const SingleBill = (props) => {


    const bills = useSelector((state) => {
        return state.bills
    })

    const { id, date, name, mobile, email, lineItems, products, toggle, handleToggle, total } = props

    let result = []

    for (let i = 0; i < lineItems.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (lineItems[i].product === products[j]._id) {
                result.push({ ...products[j], customerName: name, Mobile: mobile, quantity: lineItems[i].quantity, total: total })
            }
        }
    }

    return (
        <div border="2px" >
            <Modal show={toggle} onHide={handleToggle} className="editModal">
                <Modal.Header>
                    <h2>Bill</h2>
                </Modal.Header>
                <Modal.Body>
                    <b>Name : {name}</b><br/>
                    <b>Phone : {mobile}</b>
                    {
                        result.map((ele) => {
                            return (
                                <div key={ele._id}>
                                    <b>Product : {ele.name}</b>
                                    <p>Price : {ele.price} x {ele.quantity} = {ele.price * ele.quantity} ₹</p>
                                </div>
                            )
                        })
                    }
                    <b>Total : {total}₹</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleToggle}>cancel</Button>
                    <PrintBill id={id} name={name} mobile={mobile} email={email} date={date} result={result} total={total} />
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SingleBill