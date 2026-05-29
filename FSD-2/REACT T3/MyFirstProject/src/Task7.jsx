import {useState} from 'react'

export default function Task7() {
    const [res,setRes] = useState(0)
    const [data,setData] = useState({n1:'',n2:''})

    function h1 (e) {
        const {name,value } = e.target
        setData({...data,[name]:value})
    }
    function calc(op) {
        const n1 = Number(data.n1)
        const n2 = Number(data.n2)
        if (op =='add') {
            setRes(n1+n2)
        }
        else if(op=='sub') {
            setRes(n1-n2)
        }
        else if(op=='mul') {
            setRes(n1*n2)
        }
        else if(op=='div') {
            setRes(n1/n2)
        }

    }
  return (
    <div>
        <form>
            <input type='number' name='n1' value={data.n1} onChange={h1}></input>
            <input type='number' name='n2' value={data.n2} onChange={h1}></input>
            <br></br>
            <button type='button' onClick={() => calc('add')}>Add</button>
            <br></br>
            <button type='button' onClick={() => calc('sub')}>Sub</button>
            <br></br>
            <button type='button' onClick={() => calc('mul')}>Mul</button>
            <br></br>
            <button type='button' onClick={() => calc('div')}>Div</button>
        </form>
        <h1>Answer of {data.n1} & {data.n2} is {res}</h1>
    </div>
  )
}
