import { Route, Routes } from 'react-router-dom'
import Bai1 from './Bai1'
import TodoApp1 from './TodoApp1'


function App() {
    return (
        <Routes>
            <Route path='/' element={<Bai1/>}></Route> 
            <Route path='/Todo' element={<TodoApp1/>}></Route>
        </Routes>
        
    )
}

export default App
