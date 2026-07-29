import {CC2} from './Comp2'
import {CC} from './Comp1'
import { useContext } from 'react'
export default function Comp3() {
    const mycss = useContext(CC)
    const data = useContext(CC2)
  return (
    <div>
        <h1 style={mycss}>Welcome to useContext {data}</h1>
    </div>
  )
}
