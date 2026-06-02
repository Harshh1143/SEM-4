import {useContext} from 'react';
import {Fname, Lname} from './UC1';

function UC4 () {
    const fname = useContext(Fname);
    const last = useContext(Lname);
    return (
        <>
            <h1>Your name is {fname} {last} by old king</h1>

        </>
    )
}
export default UC4;