import { createContext } from "react"
import Comp2 from "./Comp2"

const CC = createContext()
const mycss={backgroundColor:"yellow",color:"red",fontSize:'45px'}
export default function Comp1() {
  return (
    <>
        <CC.Provider value={mycss}>
            <Comp2/>
        </CC.Provider>
    </>
  )
}
export {CC}