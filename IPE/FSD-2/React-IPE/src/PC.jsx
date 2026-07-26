// Sample UseContext Hook
// Example: ( Single File Provide data)
// Write a reactJS program to perform the tasks as asked below.
// • Create one main file (parent file) name PC.jsx and other 2 component files C1.jsx
// and C2.jsx
// • Pass First name and Last name from PC.jsx file to C2.jsx file. And display
// Welcome ABC XYZ (suppose firstname is ABC and Last name is XYZ) in
// browser. 

import { createContext } from 'react'
import C1 from './C1'

const Fname = createContext()
const Lname = createContext()

export default function PC() {
  return (
    <>
        <Fname.Provider value="ABC" >
            <Lname.Provider value="XYZ">
                <C1 />
            </Lname.Provider>
        </Fname.Provider>
    </>
  )
}

export{Lname,Fname}