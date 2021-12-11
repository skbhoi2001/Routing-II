import React, { useEffect, useState } from "react";
import axios from 'axios'
import ProductCard from "./ProductCard";
function Products() {
    const [data,setData] = useState([])

    async function fetchData(){
      const config = {
        url:'http://localhost:3000/data',
        method:"get"
      }
      const data = await axios(config)
      setData(data.data)
    }

    useEffect(()=>{
      fetchData()
    },[])

    return <div>

        {
          data.map((item)=>{
            return(
              <ProductCard id={item.id} 
              key={item.id} 
              price={item.price} 
              image_url={item.image_url} 
              description={item.description} 
              product_name={item.product_name}  />
            )
          })
        }

    </div>;
  }
  
  export default Products;