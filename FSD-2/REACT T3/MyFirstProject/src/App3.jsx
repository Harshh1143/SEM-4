
export default function App3() {
    const date1 = new Date().toLocaleTimeString()
    const d2 = new Date().toLocaleDateString()
  return (
    <>
      <ol className="a">
        <li>Fruit</li>
        <li>Vegetables</li>
        <li>Hello</li>
        <li>Dairy</li>
        <li>Grains</li>
        {d2}<br></br> 
        {date1}
      </ol>
    </>
  );
}
