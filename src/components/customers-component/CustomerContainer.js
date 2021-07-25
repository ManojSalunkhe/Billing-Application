import React from 'react'
import AddFrom from './AddForm'
import CustomersList from './CustomersList'
import { Container, Row, Col } from 'react-bootstrap'
import '../../style.css'

const CustomerContainer = (props) => {
    return (
        <div >
            <Container>
                <div className="AddForm">
                    <AddFrom />
                </div>
                <div className="CustomersList">
                    <CustomersList />
                </div>
            </Container>
        </div>
    )
}

export default CustomerContainer