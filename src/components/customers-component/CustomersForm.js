import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SetGetCustomers } from '../../actions/customerAction'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Col, Row, Container } from 'react-bootstrap'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiTwotoneEdit } from 'react-icons/ai'

const CustomersForm = (props) => {

    const { addCustomer, editCustomer, customer } = props

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(SetGetCustomers(token))
    }, [])

    const customers = useSelector((state) => {
        return state.customers
    })

    const validationSchema = yup.object({
        name: yup.string().required(),
        mobile: yup.string().required().min(10).max(10),
        email: yup.string().email().required()
    })

    return (
        <div >
            <Container>
                {customer ? <h2>Edit Customer <AiTwotoneEdit /></h2> : <h2>Add Customer <BsFillPeopleFill /></h2>}
                <Formik
                    initialValues={{
                        name: customer ? customer.name : '',
                        mobile: customer ? customer.mobile : '',
                        email: customer ? customer.email : ''
                    }}

                    validationSchema={validationSchema}

                    onSubmit={(data, { resetForm }) => {
                        //console.log(data)
                        if (addCustomer) {
                            addCustomer(data)
                        }
                        if (editCustomer) {
                            editCustomer(data)
                        }
                        resetForm()
                    }}
                >
                    {({ values, error }) => (
                        <div>
                            <Form >
                                <Row className="mb-3">
                                    <Col>
                                        <Field name="name" type="input" placeholder="enter name" />
                                        <ErrorMessage name="name">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                    </Col>
                                    <Col>
                                        <Field name="mobile" type="input" placeholder="enter mobile" />
                                        <ErrorMessage name="mobile">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                    </Col>
                                    <Col>
                                        <Field name="email" type="input" placeholder="enter email" />
                                        <ErrorMessage name="email">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                    </Col>
                                </Row><br />
                                <Field type="submit" value="submit" />
                            </Form>
                        </div>
                    )}
                </Formik>
            </Container>
        </div>
    )
}
export default CustomersForm