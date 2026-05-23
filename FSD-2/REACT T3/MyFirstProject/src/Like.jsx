export default function Like() {
  var like = 0;
  const b = () => {
    var like = like + 1;
    document.getElementById("data22").innerText = "Like count : " + like;
  };

  return (
    <>
      <button onClick={b}>Like Here</button>
      <h2 id="data22">Like count : {like}</h2>
    </>
  );
}
