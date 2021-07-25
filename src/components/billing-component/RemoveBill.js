import React from 'react'
import {SetRemoveBill} from '../../actions/billAction'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import swal from 'sweetalert'
import {AiFillDelete} from 'react-icons/ai'

const RemoveBill = (props)=>{

    const dispatch = useDispatch()

    const {id} = props

    //console.log(id)

    const handleRemove = (id)=>{
        const token = localStorage.getItem('token')
        dispatch(SetRemoveBill(id,token))
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
                    handleRemove(id)
                    swal("Your file has been deleted!",{
                        icon : "success",
                    })
                }else{
                    swal("Your file is safe!")
                }
            })
            } 
            ><AiFillDelete/>delete</Button>
        </div>
    )
}

export default RemoveBill