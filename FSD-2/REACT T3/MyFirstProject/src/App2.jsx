import img1 from './assets/hero.png'
export default function App2() {
  return (
    <>
      <p>Resusable component</p>
      <img src="Shelby.jpeg" height='200' width='300'></img>
      <img src={img1} height='200' width='300'></img>
    </>
  );
}
