import Count from './Count'
import FoodList from './FoodList'
import InputRef from './InputRef'

function App() {
    return (
        <div className=''>
        <Count className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto"} />
        <InputRef className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto mt-4"} />
        <FoodList className={"border-amber-100 border rounded-lg p-8 w-4/5 m-auto mt-4"} />
        </div>
    )
}

export default App
