import React from "react";
import { Hearts } from "react-loader-spinner";

export default function Lmb() {
  alert(`Beijos procê! 😘`);

  return (
    <Hearts
      height="80"
      width="200"
      color="pink"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
