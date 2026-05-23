import "./App.css";
import App2 from "./App2";
import App3 from "./App3";
import CN from "./CN";
import M2 from "./M2";
import Ev from './Ev';
import Like from './Like';
export default function App() {
  const name = 'abc';
  const mark = [1,2,3]
  return (
    <>
      <h3>Welcome {name.toUpperCase()}</h3>
      <h3>{mark.join(', ')}</h3>
      <h3>My first code </h3>
      <CN name='value' age='23'/>
      <CN name={name} age={23}/>
      <M2 />
      <App2 />
      <App2 />
      <App3 />
      <App3 />
      <Ev />
      < Like />
    </>
  );
}
