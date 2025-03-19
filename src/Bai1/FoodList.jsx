import React, { useEffect, useState } from 'react'

const FoodList = ({className}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        var url = "https://67c7c637c19eb8753e7ab0ce.mockapi.io/che";

        fetch(url).then((res)=>{
            return res.json();
        }).then((dataApi) => {
            setData(dataApi);
        })
    }, [])
  return (
    <div className={`${className} flex items-center justify-between`}>
        {data.map((item)=>{
            return(<div className='flex flex-col items-center justify-center'>
                <img src={item.img} alt="" className='size-[90px] object-cover'/>
                <h3>{item.name}</h3>
                </div>)
        })}
    </div>
  )
}

export default FoodList