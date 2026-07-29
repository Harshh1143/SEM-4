import { createContext } from "react"
import Comp3 from "./Comp3"

const CC2 =createContext()
export default function Comp2() {
  return (
    <div>
        <CC2.Provider value="students">
            <Comp3 />
        </CC2.Provider>
    </div>
  )
}
export {CC2}