import React from 'react'
import axios from "axios"
import { useState } from "react"

function CartProduct({id,price,product_name,ele_count,handleRefresh}){
    // const [count,setCount] = useState(ele_count)
    async function handleDelete(id){
        try{
            const config = {
                url:`http://localhost:3000/cart/${id}`,
                method: 'delete'
            }
            await axios(config)
            handleRefresh()
            alert(`Item removed from cart`)
        }
        catch(err){
            console.log(err)
        }
    }
    
    return <div>
        <div>
            <p>{id}</p>
            <p>{product_name}</p>
            <p>{ele_count}</p>
            <p>{price}</p>
            <button  onClick={()=> handleDelete(id)}>Delete</button>
        </div>
    </div>
}

export default CartProduct