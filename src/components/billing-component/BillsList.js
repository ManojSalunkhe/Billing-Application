import React, { useState } from 'react'
import RemoveBill from './RemoveBill'
import { useDispatch } from 'react-redux'
import { SetGetSingleBill } from '../../actions/billAction'
import SingleBill from './SingleBill'
import { Card, Button } from 'react-bootstrap'
import {HiViewList} from 'react-icons/hi'
import '../../style.css'

const BillsList = (props) => {

    const dispatch = useDispatch()
    const { _id, date, name, mobile, total, email, lineItems, handleIncrement, products } = props
    const [receivedBill, setReceivedBill] = useState('')
    const [toggle, setToggle] = useState(false)

    let result = []

    for (let i = 0; i < lineItems.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (lineItems[i].product === products[j]._id) {
                result.push({ ...products[j], customerName: name, mobile: mobile, quantity: lineItems[i].quantity, total: total })
            }
        }
    }

    const handleToggle = () => setToggle(!toggle)

    const singleBillData = (data) => {
        setReceivedBill(data)
        if (receivedBill._id === _id) {
            handleToggle()
        }
    }

    const handleClick = () => {
        const token = localStorage.getItem('token')
        dispatch(SetGetSingleBill(_id, token,setToggle, singleBillData))
    }

    return (
        <div className="Billlist">
            <Card>
                <Card.Body>
                    <Card.Title>
                        Date :<b>{date}</b><br />
                        Customer Name : <b>{name}</b><br />
                        Mobile : <b>{mobile}</b><br />
                        Email : <b>{email}</b>
                        {
                            result.map((ele) => {
                                return (
                                    <div key={ele._id}>
                                        <p>Product  Name : <b>{ele.name}</b></p>
                                        <p>Price : <b>{ele.price} x {ele.quantity} = {ele.price * ele.quantity} ₹</b> </p>
                                    </div>
                                )
                            })
                        }
                        Total : <b>{total}₹</b>
                    </Card.Title>
                </Card.Body>
                <Card.Footer>
                    <RemoveBill id={_id} /><br/>
                    <Button onClick={handleClick}>view more<HiViewList/></Button>
                </Card.Footer>
            </Card><br/>
            {
                toggle &&
                <SingleBill id={_id} date={date} name={name} mobile={mobile}
                    total={total} email={email} lineItems={receivedBill.lineItems}
                    products={products} toggle={toggle} handleToggle={handleToggle}
                    total={total} />
            }
        </div>
    )
}

export default BillsList