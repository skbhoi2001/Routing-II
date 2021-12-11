import React, { useEffect, useState } from "react";
import axios from 'axios'
function ProductCard({id,product_name,description,price,image_url}) {
    const [count,setCount] = useState(0)

    async function handleClick(id){
        if(count===0){
            return
        }

        const config = {
            url:`http://localhost:3000/data/${id}`,
            method: 'GET'
        }
        const updateConfig = {
            url:`http://localhost:3000/cart/${id}`,
            method:'get'
        }

        // useEffect(()=>{
        //     extractData()
        //     updateData()
        // })

        let fetchedData
        try {
         fetchedData = await axios(config)
        } catch (error) {
            console.log(error);
        }

        

        try {
            const newData = await axios(updateConfig)
            const newConfig = {
                url:`http://localhost:3000/cart/${id}`,
                method: 'PATCH',
                data:{count:newData.data.count+count}
            }
            await axios(newConfig)
        } catch (error) {
            // console.log(error);
            const newConfig = {
                url:`http://localhost:3000/cart`,
                method: 'POST',
                data:{...fetchedData.data,count:count}
            }
            try{
                await axios(newConfig)
                alert(`Item added to cart`)
            }catch(error){
                console.log(error);
            }
        }
    }    
    function handleChange(value){
        if(value === "add"){
            setCount(prev=>prev+1)
        }
        else if(value === "remove"){
            setCount((prev)=>prev === 0 ?0:prev-1)
        }
    }
    return <div style={{display:"flex",width:"50%",margin:"auto",gap:"20px",border:"1px solid black"}}>

        <div>
            <img src={image_url} alt={product_name} />
        </div>
        <div>
            <div>
                <p>{product_name}</p>
                <p>{description}</p>
                <h3>₹{price}</h3>
                <div>
                    <button onClick={()=>handleChange("add")}>+</button>
                    <p>{count}</p>
                    <button onClick={()=>handleChange("remove")}>-</button>
                </div>
            </div>
            <button onClick={()=>handleClick(id)}>Add to Cart</button>
        </div>

    </div>;
  }
  
  export default ProductCard;