import "./App.css";
import App2 from "./App2";
import App3 from "./App3";
import CN from "./CN";
export default function App() {
  const name = 'abc';
  const mark = [1,2,3]
  return (
    <>
      <h1>Welcome {name.toUpperCase()}</h1>
      <h1>{mark.join(', ')}</h1>
      <h1>My first code </h1>
      <CN name='value' age='23'/>
      <CN name={name} age={23}/>
      <App2 />
      <App2 />
      <App2 />
      <App3 />
      <App3 />
    </>
  );
}
