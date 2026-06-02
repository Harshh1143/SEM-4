import { createContext } from "react";
import Comp2 from './Comp2'
const mycss={backgroundColor:'tomato',color:'cyan'}
const Data=createContext()
function Comp1(){
    return(
        <>
        <Data.Provider value={mycss}>
            <Comp2/>
        </Data.Provider>
        </>
    )
}
export default Comp1;
export {Data}