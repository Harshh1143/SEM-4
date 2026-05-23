function M2() {
  const arr = [2, 3, 6, 8, 10];
  return (
    <>
      {arr.map((item, index) => (
        <div key={index}>
          <h3>{item}*5 = {item * 5}</h3>
        </div>
      ))}
    </>
  );
}
export default M2;