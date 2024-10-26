
import React from 'react'

function Content({src,p}) {
  return (
    <>
        <img className="hover" src={src}/>
        <p>{p}</p>
    </>
  )
}

export default Content
