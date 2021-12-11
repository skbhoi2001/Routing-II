import React from 'react'
import CartProduct from './CartProduct'
// import styled from 'styled-components'
import axios from 'axios'
// import {Link} from 'react-router-dom'

function CartItem() {
    const [state,setState] = React.useState([])
    const [amount,setAmount] = React.useState(0)
    const [refresh,setRefresh] = React.useState(false)

    function changeAmount(data){
        data.forEach((ele) => {
            setAmount((prev) => prev+ele.count*ele.price)
        })
    }

    async function fetchData(){
        const config = {
            url:'http://localhost:3000/cart',
            method:"get"
        }
        const data = await axios(config)
        changeAmount(data.data)
        setState(data.data)
    }
    
    React.useEffect(() => {
        (async () => {
            fetchData()
        })()
        
    },[refresh])

    function handleRefresh(){
        refresh===false?setRefresh(true):setRefresh(false)
    }


    return (
      <>
            {
                state.map((ele) => {
                    return(

                      <CartProduct id={ele.id} key={ele.id} price={ele.price} image_url={ele.image_url} description={ele.description} product_name={ele.product_name} ele_count={ele.count} 
                      handleRefresh={handleRefresh}
                      />
                    )
                })
            }
            <div>
                {
                  refresh === true ? <h3>Total Amount : 0</h3> :<h3>Total Amount : {amount}</h3>
                }
            </div>
            </>
    )
}

export default CartItem

