export default function Ev() {
  const a = (e) => {
    alert(e.preventDefault());
    document.getElementById("text").value;
  };

  const b = (e) => {
    document.getElementById("data").innerHTML = e.target.value;
  };

  const c = () => {
    document.getElementById("data2").innerHTML = "Single Clicked";
  };

  const e = () => {
    document.getElementById("data2").innerHTML = "Double Click";
  };
  return (
    <>
      <form onSubmit={a}>
        <input type="text" id="text" onChange={b} />
        <input type="submit" />
      </form>
      <h1 id='data'></h1>
      <button onClick={c} onDoubleClick={e}>
        Click/Double Click
      </button>
      <h3 id="data2">Change as per click</h3>
    </>
  );
}
