"use client";

import { useEffect } from "react";

const error = ({error, reset}) => {
    useEffect(() =>  {
        console.log("something went wrong")
        console.log(error)
    }, [error])
  return <div>
    <h1>error</h1>
    <p>something went wrong</p>

    <button onClick={() => reset()}>reset</button>

  </div>;
};
export default error;
