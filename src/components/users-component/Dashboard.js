import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { BsFillPeopleFill } from 'react-icons/bs'
import {HiCurrencyRupee} from 'react-icons/hi'
import {SiBigcartel} from 'react-icons/si'
import {FaMoneyBillAlt} from 'react-icons/fa'

const Dashboard = (props) => {

    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const bills = useSelector((state) => {
        return state.bills
    })
    //console.log(bills)

    let totalAmount = 0

    for (let i = 0; i < bills.length; i++) {
        totalAmount += bills[i].total
    }

    // console.log(totalAmount)
    return (
        <div>
            <Container>
                <Row xs={2}>
                    <Alert variant="success" >
                        <Col><h1> <BsFillPeopleFill/> Customers ({customers.length})</h1></Col>
                    </Alert >
                    <Alert variant="warning">
                        <Col><h1> <SiBigcartel/> Products ({products.length})</h1></Col>
                    </Alert>
                </Row>
                <Row xs={2}>
                    <Alert variant="info">
                        <Col><h1><FaMoneyBillAlt/> Bills ({bills.length})</h1></Col>
                    </Alert>
                    <Alert variant="primary">
                        <Col><h1> <HiCurrencyRupee/>Total Amount ({totalAmount})</h1></Col>
                    </Alert>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard