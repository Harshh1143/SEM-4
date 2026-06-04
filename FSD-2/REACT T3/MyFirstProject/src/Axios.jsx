import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
  const [pic, setPic] = useState(null);

  function fun() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setPic(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      {pic && (
        <img
          src={pic.message}
          height={300}
          width={300}
          alt="Random Dog"
        />
      )}
      <button onClick={fun}>Get New Dog</button>
    </div>
  );
}