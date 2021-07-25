import axios from "axios"
import swal from 'sweetalert'

// const postRegister = (data)=>{
//     return {
//         type : "REGISTER",
//         payload : data
//     }
// }

export const SetPostRegister = (formData,props)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                swal('',"successfully registered","success")
                props.history.push('/login')
            }
        })
        .catch((error)=>{
            alert(error)
        })
    }
}


export const SetPostLogIn = (formData,props)=>{

    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('error')){
                alert(result.error)
            }else{
                 localStorage.setItem('token',result.token)
                props.handleAuth()
                swal('','successfully logged in',"success")
                props.history.push('/')
            }
        })
        .catch((error)=>{
            alert(error)
        })
    }
}


const addUserInfo = (data)=>{
    return {
        type : "ADD_USER_DATA",
        payload : data
    }
}

export const SetGetData = (token)=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers :{
                'Authorization' : `Bearer ${token}`  
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(addUserInfo(result))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}