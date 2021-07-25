// hoc - higer order component 
// a component that takes another component as a value or return as component is called as a higher order component
import { Redirect ,Route} from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={(props) => {
                return localStorage.getItem('token') ? (
                    <Component {...props} /> 
                ) : (
                    <Redirect 
                        to={{
                            pathname: '/login'
                        }}
                    /> 
                )
            }}
        />
    )
}

export default PrivateRoute 