import React, { useState } from 'react'
import Register from './Register'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { SetPostLogIn } from '../../actions/userAction'
import { Link, Route } from 'react-router-dom'
import '../../style.css'

const LogIn = (props) => {

    const dispatch = useDispatch()

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(6)
    })

    return (
        <div className="login">
            <h2 className="m-5">LogIn Here</h2>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}

                onSubmit={(data, { resetForm }) => {
                    // console.log('login',data)
                    dispatch(SetPostLogIn(data, props))
                    resetForm()
                }}
            >
                {
                    ({ values, errors }) => (
                        <div>
                            <Form>
                                <div className="text-feild">
                                <Field name="email" placeholder="email" type="input" />
                                <ErrorMessage name="email">{(msg) => <p style={{ color: "red" }}>{msg}</p>}</ErrorMessage>
                                </div>
                                <div className="text-feild">
                                <Field name="password" placeholder="password" type="password" />
                                <ErrorMessage name="email">{(msg) => <p style={{ color: "red" }}>{msg}</p>}</ErrorMessage><br/>
                                </div>
                                <Field type="submit" value="Log In" /><br/>
                                Not Registered yet ? <Link to="/register">Sign UP</Link>
                            </Form>
                        </div>
                    )
                }
            </Formik>
            <Route path="/register" component={Register} exact={true}/>
        </div>
    )
}

export default LogIn


