import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case "tang": return {...state, count: state.count + 1}
        case "giam": return {...state, count: state.count - 1}
        case "reset": return {...state, count: 0}
        default: return state
    }
}

const Count = ({className}) => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className='text-[100px]'>{state.count}</div>
        <div className='flex items-center justify-center gap-3'>
            <button onClick={() => {dispatch({type:"tang"})}} className='bg-green-500 text-black text-xl'>+</button>
            <button onClick={() => {dispatch({type:"giam"})}} className='bg-red-500 text-black text-xl'>-</button>
            <button onClick={() => {dispatch({type:"reset"})}} className='bg-gray-600 text-white text-xl'>Reset</button>
        </div>
    </div>
  )
}

export default Count