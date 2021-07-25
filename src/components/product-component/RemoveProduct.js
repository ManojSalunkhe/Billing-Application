import React from 'react'
import {SetRemoveProduct} from '../../actions/productAction'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { Button } from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'

const RemoveProduct = (props)=>{

    const {id} = props
    const dispatch = useDispatch()

    const handleRemove = ()=>{
        const token = localStorage.getItem('token')
        dispatch(SetRemoveProduct(id,token))
    }

    return(
        <div>
            <Button variant="danger" onClick={()=> swal({
                title : "Are you sure?",
                text: "Once deleted, you will not be able to recover this file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete)=>{
                if(willDelete){
                    handleRemove()
                    swal("Your file has been deleted!",{
                        icon : "success",
                    })
                }else{
                    swal("Your file is safe!")
                }
            })
            }><BsFillTrashFill/>delete</Button>
        </div>
    )
}
export default RemoveProduct