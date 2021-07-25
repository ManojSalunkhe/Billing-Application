import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SetPostBill } from '../../actions/billAction'
import { addData, resetData, incrementQunatity, decrementQunatity,removeProduct } from '../../actions/mycartAction'
import { SetGetCustomers } from '../../actions/customerAction'
import { SetGetProducts } from '../../actions/productAction'
import { Button, Container, CardGroup, Row, Col, Card } from 'react-bootstrap'
import swal from 'sweetalert'
import { withRouter } from 'react-router'
import Selection from './Selection'
import MyCartSubmit from './MyCartSubmit'
import {FaCartArrowDown} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const MyCartList = (props) => {

    const dispatch = useDispatch()

    const [date, setDate] = useState(new Date())
    const [selectedCustomer, setSelectedCustomer] = useState('')
    const [toggle, setToggle] = useState(false)
    const [showMyCart, setShowMyCart] = useState(false)
    const [showCheckItemButton,setshowCheckItemButton] =useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(SetGetCustomers(token))
        dispatch(SetGetProducts(token))
    }, [])

    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const myCart = useSelector((state) => {
        return state.myCart
    })

    // let x = 1
    // const result = myCart.map((item) => {
    //     x += item.quantity
    // })

    const handleSelectedCustomers = (value) => {
        setSelectedCustomer(value.value)
        setToggle(true)
    }

    const cName = customers.find((c)=>{
       return c._id === selectedCustomer
    })

    const handleIncrement = (id) => {
        dispatch(incrementQunatity(id))
    }

    const handleDecrement = (id) => {
        dispatch(decrementQunatity(id))
    }

    const handleRemoveProduct = (id)=>{
        dispatch(removeProduct(id))
    }

    const handleClick = (id) => {
        swal('', 'succesfully added', "success")
        const data = {
            product: id,
            quantity: 1
        }
       // console.log(data)
        dispatch(addData(data))
        setshowCheckItemButton(false)
    }

    const handleSubmit = () => {
        const data = {
            date: date,
            customer: selectedCustomer,
            lineItems: myCart
        }
        const token = localStorage.getItem('token')
        dispatch(SetPostBill(data, token, props.history))
        dispatch(resetData())
        setToggle(false)
    }

    const handleShowMycart = () => setShowMyCart(!showMyCart)

    const options = customers.map((customer) => {
        return { value: customer._id, label: customer.name }
    })

    return (
        <div>
            <Container>
                {
                    customers &&
                    <div>
                        <h2>MyCart</h2>
                        <DatePicker selected={date} onChange={(date)=>setDate(date)} dateFormat="dd/MM/yyyy" minDate = {new Date()}/>
                        <Selection options={options} handleSelectedCustomers={handleSelectedCustomers} placeholder={"search by name"}/>
                        {
                            toggle &&
                            <div><br />
                            <h2 style={{color : "blue",textAlign : "center"}}>Welcome {cName.name.toUpperCase()}</h2>
                                <CardGroup>
                                    <Row>
                                        {
                                            products.map((product) => {
                                                return (
                                                    <Col>
                                                        <Card key={product._id}>
                                                            <Card.Body>
                                                                <Card.Img variant="top" src="https://www.farmacapsulas.com/wp-content/uploads/2017/03/blue_white_capsules.jpg" />
                                                                <Card.Title>{product.name}</Card.Title>
                                                                <Card.Text>{product.price}₹</Card.Text>
                                                                <Button onClick={() => handleClick(product._id)} variant="success"><FaCartArrowDown/>Add to cart</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </CardGroup><br/>
                                <Button onClick={handleShowMycart} disabled={showCheckItemButton}><FaShoppingBag/>Check out</Button>
                            </div>
                        }
                    </div>
                }
            </Container>
            {
                showMyCart &&
                <MyCartSubmit
                    showMyCart={showMyCart} myCart={myCart}
                    handleShowMycart={handleShowMycart}
                    products={products}
                    handleSubmit={handleSubmit}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleRemoveProduct={handleRemoveProduct}
                />
            }
        </div >
    )
}

export default withRouter(MyCartList)