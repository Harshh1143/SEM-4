import { useContext } from "react";
import { Fname, Lname } from "./PC";
export default function C2() {
  const fn = useContext(Fname);
  const ln = useContext(Lname);
  return (
    <div>
      <h1>
        welcome {fn} {ln}
      </h1>
    </div>
  );
}
