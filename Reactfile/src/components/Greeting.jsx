import React from 'react'

function Greeting({name,Course,Marks,name1,Course1,Marks1,name2,Course2,Marks2}) {
  return (
    <div class="container">
    <div id="first">
      <h4>{name}</h4>
      <p>{Course}</p>
      <p>{Marks}</p>
    </div>
    <div id="second">
      <h4>{name1}</h4>
      <p>{Course1}</p>
      <p>{Marks1}</p>
    </div>
    <div id="third">
      <h4>{name2}</h4>
      <p>{Course2}</p>
      <p>{Marks2}</p>
    </div>
    </div>
  )
}


export default Greeting
