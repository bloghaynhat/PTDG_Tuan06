import React, { useRef, useState } from 'react'

const TodoApp1 = () => {
    const [data, setData] = useState([
        "Cong viec 1", "Cong viec 2"
    ]);
    const ip = useRef(null)

    const handleThem = () => {
        if(ip.current.value != ""){
            setData([...data, ip.current.value]);
            ip.current.value = "";
        }
            
    }
    const handleXoa = () => {

    }
    return (
        <div className='max-w-4/5 m-auto mt-4 '>
            <div className='flex gap-5 items-center justify-center'>
                <input ref={ip} type="text" className='p-1 text-3xl border border-white rounded-lg' placeholder='Them cong viec' />
                <button onClick={handleThem} className='bg-green-600'>Them</button>
            </div>

            <div className='flex flex-col items-center justify-center mt-6'>
                <h2 className='text-4xl'>Danh sach cong viec</h2>
                {data.map((item) => {
                    return (
                        <div className='mt-5 border border-white rounded-lg w-full'><p>{item}</p>
                        </div>
                        
                    )
                })}
            </div>


        </div>
    )
}

export default TodoApp1