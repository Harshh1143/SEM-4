import {useState} from 'react'

export default function Task7() {
    const [res,setRes] = useState(0)
    const [data,setData] = useState({})

    function h1 (e) {
        const {name,value } = e.target
        setData({...data,[name]:value})
    }
    function calc(e) {
        console.log(e)
        const n1 = parseInt(e.target.n1)
        const n2 = parseInt(e.target.n2)
        if (e.target.name =='add') {
            setRes(n1+n2)
        }
        else if(e.target.name=='sub') {
            setRes(n1-n2)
        }
        else if(e.target.name=='mul') {
            setRes(n1*n2)
        }
        else if(e.target.name=='div') {
            setRes(n1/n2)
        }

    }
  return (
    <div>
        <form>
            <input type='number' name='n1' onChange={h1}></input>
            <input type='number' name='n2' onChange={h1}></input>
            <button onClick={calc} name='add'>Add</button>
            <button onClick={calc} name='sub'>Sub</button>
            <button onClick={calc} name='mul'>Mul</button>
            <button onClick={calc} name='div'>Div</button>
        </form>
        <h1>Answer of {data.n1} & {data.n2} is {res}</h1>
    </div>
  )
}
