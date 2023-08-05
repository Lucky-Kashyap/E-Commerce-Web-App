import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const arr = useRouteError();
  return (
    <div>
        <h1>Oops!!!</h1>

        <h2>Some thing went wrong</h2>
        <h2>{arr.status + "  : " + arr.statusText}</h2>
    </div>
  )
}

export default Error;