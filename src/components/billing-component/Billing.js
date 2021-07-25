import React, { useEffect } from 'react'
import BillsList from './BillsList'
import { useSelector, useDispatch } from 'react-redux'
import { SetGetData } from '../../actions/billAction'
import {SetGetCustomers} from '../../actions/customerAction'
import { SetGetProducts } from '../../actions/productAction'
import {Container} from 'react-bootstrap'
import '../../style.css'

const Billing = (props) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(SetGetData(token))
        dispatch(SetGetCustomers(token))
        dispatch(SetGetProducts(token))
    }, [])

    const bills = useSelector((state) => {
        return state.bills
    })

    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    let result = []

    for(let i =0;i<bills.length;i++){
        for(let j=0;j<customers.length;j++){
            if(bills[i].customer === customers[j]._id){
                result.push({...customers[j],...bills[i]})
            }
        }
    }

    return (
        <div className="bill">
            <Container >
            <h1 style={{textAlign : "center"}}>Total Bills ({result.length})</h1>
            {
                result.map((ele)=>{
                    return(
                        <div key={ele._id}>
                        <BillsList {...ele} products={products}/>
                        </div>
                    )
                })
            }
            </Container>
        </div>
    )
}
export default Billing