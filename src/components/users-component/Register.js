import React from 'react'
import LogIn from './LogIn'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { SetPostRegister } from '../../actions/userAction'
import { Link, Route } from 'react-router-dom'
import '../../style.css'


const Register = (props) => {

    const dispatch = useDispatch()

    const validationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
        businessName: yup.string().required(),
        address: yup.string().required()
    })

    return (
        <div className="login">
            <h1>Register With Us</h1>
            <Formik
                initialValues={{
                    username: '',
                    email: "",
                    password: "",
                    businessName: "",
                    address: ""
                }}

                validationSchema={validationSchema}

                onSubmit={(data, { resetForm }) => {
                    console.log(data)
                    dispatch(SetPostRegister(data, props))
                    resetForm()
                }}
            >
                {
                    ({ values, errors }) => (
                        <div>

                            <Form>
                                <div className="text-feild">
                                    <Field name="username" placeholder="enter username" type="input" />
                                    <ErrorMessage name="username">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                </div>
                                <div className="text-feild">
                                    <Field name="email" placeholder="email" type="input" />
                                    <ErrorMessage name="email">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                </div>
                                <Field name="password" placeholder="password" type="password" />
                                <ErrorMessage name="password">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                <div className="text-feild">
                                    <Field name="businessName" placeholder="business name" type="input" />
                                    <ErrorMessage name="businessName">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                </div>
                                <div className="text-feild"> 
                                    <Field name="address" placeholder="address" type="input" />
                                    <ErrorMessage name="address">{(msg) => <p style={{ color: 'red' }}>{msg}</p>}</ErrorMessage>
                                </div>
                                <Field type="submit" value="submit" /><br />
                                 Already a member ? <Link to="/login">Log In</Link>
                            </Form>
                        </div>
                    )
                }
            </Formik>
            <Route path="/login" component={LogIn} exact={true}/>
        </div >
    )
}

export default Register