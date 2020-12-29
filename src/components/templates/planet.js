import React from "react"

const planet = ({ pageContext: { planetInfo } }) => {
  console.log("planetInfo: ", planetInfo)
  return <div>Planet name: {planetInfo.name} </div>
}

export default planet
