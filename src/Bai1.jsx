import React from 'react'
import Count from './Bai1/Count'
import FoodList from './Bai1/FoodList'
import InputRef from './Bai1/InputRef'
const Bai1 = () => {
  return (<><Count className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto"} />
            <InputRef className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto mt-4"} />
            <FoodList className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto mt-4"} /></>
  )
    
}

export default Bai1