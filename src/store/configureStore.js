import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import productsReducer from '../reducers/productsReducer'
import customersReducer from '../reducers/customersReducer'
import usersReducer from '../reducers/usersReducer'
import billsReducer from '../reducers/billsReducer'
import cartReducer from '../reducers/cartReducer'

const configureStore = (props)=>{

    const store = createStore(combineReducers({
        users : usersReducer,
        customers : customersReducer,
        products : productsReducer,
        myCart : cartReducer,
        bills : billsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore