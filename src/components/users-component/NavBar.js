import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import PrivateRoute from '../../helpers/PrivateRoute'
import * as ReactBootstrap from 'react-bootstrap'
import swal from 'sweetalert'
import Register from './Register'
import LogIn from './LogIn'
import Home from './Home'
import Account from './Account'
import CustomerContainer from '../customers-component/CustomerContainer'
import ProductsContainer from '../product-component/ProductsContainer'
import MyCartContainer from '../mycart-component/MyCartContainer'
import Billing from '../billing-component/Billing'
import Dashboard from './Dashboard'
import { useDispatch } from 'react-redux'
import '../../style.css'


const NavBar = (props) => {

    const dispatch = useDispatch()

    const { userLoggedIn, handleAuth } = props

    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="navBar">
                <ReactBootstrap.Navbar.Brand ><Link to="/">Home</Link></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">

                        {userLoggedIn ? (
                            <>
                                <ReactBootstrap.Nav.Link><Link to="/dashboard">Dashboard</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/account">Account</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/customers">Customers</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/products">Products</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/mycart">MyCart</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/billing">Billing</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link onClick={() => {
                                    localStorage.removeItem('token')
                                    swal('',"logged out","success")
                                    handleAuth()
                                    props.history.push('/')
                                    dispatch({type : "Clear_DATA"})
                                }} to={""}>Logout</Link></ReactBootstrap.Nav.Link>
                            </>
                        ) : (
                            <>
                                <ReactBootstrap.Nav.Link ><Link to="/register">Sign up</Link></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link ><Link to="/login">Log In</Link></ReactBootstrap.Nav.Link>
                            </>
                        )}
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>

            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/login" render={(props) => {
                return <LogIn {...props}
                    handleAuth={handleAuth}
                />
            }} />
            <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
            <PrivateRoute path="/account" component={Account} exact={true} />
            <PrivateRoute path="/customers" component={CustomerContainer} exact={true} />
            <PrivateRoute path="/products" component={ProductsContainer} exact={true} />
            <PrivateRoute path="/mycart" component={MyCartContainer} exact={true} />
            <PrivateRoute path="/billing" component={Billing} exact={true} />
        </div>
    )
}

export default withRouter(NavBar)