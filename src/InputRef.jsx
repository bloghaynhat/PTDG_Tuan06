import React, { useRef, useState } from 'react'

const InputRef = ({className}) => {
    const ip = useRef(null);
    const [value, setValue] = useState("Nothing...");
  return (
    <div className={`${className} flex flex-col items-center justify-center gap-4`}>
        <input type="text" ref={ip} className='border border-white text-3xl p-1'/>
        <button className='bg-amber-50 text-black' onClick={() => setValue(ip.current.value)}>Click</button>
        <div className='text-2xl'>{value}</div>
    </div>
  )
}

export default InputRef