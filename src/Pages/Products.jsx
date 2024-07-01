import React from 'react'
import Productcard from '../components/Productcard'
import { data } from '../Temprorydata/data'
import { useState, useEffect } from 'react'
import { getProducts } from '../Services/Index'
const Products = () => {
const [products, setProducts] = useState([]);
const fetchData= async()=>{
   const data = await getProducts();
   setProducts(data);
}
useEffect(()=>{
  fetchData()
}, [])

  return (
    <div className='grid-cols-3 grid'>
      {products.map((element, index)=>{
        return <Productcard {...element} key={index}/>
      })}
    </div>
  )
}

export default Products