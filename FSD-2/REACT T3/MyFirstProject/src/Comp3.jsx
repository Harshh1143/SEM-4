import { useContext } from "react";
import {Data} from './Comp1'
import {Str} from './Comp2'
function Comp3(){
    const mycss=useContext(Data)
    const txt=useContext(Str)
    return(
        <>
        <h1 style={mycss}>
            Welcome {txt}
        </h1>
        </>
    )
}
export default Comp3;