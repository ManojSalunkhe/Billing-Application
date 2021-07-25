import React from 'react'
import {SetRemoveCustomer} from '../../actions/customerAction'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import swal from 'sweetalert'
import {BsFillTrashFill} from 'react-icons/bs'

const RemoveCustomer = (props)=>{

    const {id} = props
    const dispatch = useDispatch()

    const handleRemove = ()=>{
        const token = localStorage.getItem('token')
        dispatch(SetRemoveCustomer(id,token))
    }

    return(
        <div>
            <Button variant="danger" 
            onClick={()=> swal({
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
            }
            ><BsFillTrashFill/>delete</Button>
        </div>
    )
}

export default RemoveCustomer