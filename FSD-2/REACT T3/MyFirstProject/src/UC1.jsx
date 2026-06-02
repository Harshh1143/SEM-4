import { createContext } from "react";
import UC2 from "./UC2";
const Fname = createContext();
const Lname = createContext();

function UC1() {
  return (
    <>
      <Fname.Provider value={"George"}>
        <Lname.Provider value={"Smith"}>
          <UC2 />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
}
export default UC1;
export { Fname, Lname };
