import React, { useEffect } from 'react'
import { SetCreateProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import { SetGetProducts } from '../../actions/productAction'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Col, Row, Container } from 'react-bootstrap'
import {SiBigcartel} from 'react-icons/si'
import { AiTwotoneEdit } from 'react-icons/ai'

const ProductsForm = (props) => {

    const { addProduct, editProduct, product } = props

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(SetGetProducts(token))
    }, [])

    const products = useSelector((state) => {
        return state.products
    })

    const validationSchema = yup.object({
        name: yup.string().required(),
        price: yup.string().required()
    })


    return (
        <div>
            {product ? <h2>Edit Product <AiTwotoneEdit/></h2> : <h2>Add Product <SiBigcartel/></h2>}
                <Formik
                    initialValues={{
                        name: product ? product.name : '',
                        price: product ? product.price : ''
                    }}

                    validationSchema={validationSchema}

                    onSubmit={(data, { resetForm }) => {
                        //console.log(data)
                        if (addProduct) {
                            addProduct(data)
                        }
                        if (editProduct) {
                            editProduct(data)
                        }
                        resetForm()
                    }}
                >
                    {({ values, error }) => (
                        <div>
                            <Form>
                                <Row>
                                    <Col>
                                        <Field name="name" type="input" placeholder="enter name" />
                                        <ErrorMessage name="name">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                    </Col>
                                    <Col>
                                        <Field name="price" type="input" placeholder="enter price" />
                                        <ErrorMessage name="price">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                    </Col>
                                </Row><br />
                                <Field type="submit" value="submit" />
                            </Form>
                        </div>
                    )}
                </Formik>
        </div>
    )
}

export default ProductsForm