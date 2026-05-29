import {useState} from 'react'

export default function Task5() {
    const [brand,setBrand] = useState({brand:'audi',color:'gray',model:'tt'})
    function set() {
        if(brand.brand === 'audi') {
            setBrand({brand:'bmw',color:'black',model:'i8'})
        }
        else {
            setBrand({brand:'audi',color:'gray',model:'tt'})
        }
    }
  return (
    <div>
        <h1>My car {brand.brand} color {brand.color} model {brand.model}</h1>
        <button onClick={set}>Change Car</button>
    </div>
  )
}
