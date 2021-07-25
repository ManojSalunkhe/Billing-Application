import React from 'react'
import Select from 'react-select'

const Selection = (props)=>{
    const {options,handleSelectedCustomers,placeholder} = props

    return(
        <div>
            <Select options={options} onChange={handleSelectedCustomers} placeholder={placeholder}/>
        </div>
    )
}

export default Selection