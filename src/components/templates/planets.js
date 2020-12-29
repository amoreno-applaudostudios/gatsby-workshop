import React from "react"
import { Link } from "gatsby"

const planets = ({
  pageContext: {
    planetsData: { results },
  },
}) => {
  return (
    <div className="w-full h-screen justify-center flex-col items-center text-white font-sans flex-wrap  bg-blue-700">
      <h1 className=" pt-10 pl-10">Planets</h1>
      <div className="w-auto bg-blue-600 py-20 pl-10 font-bold">
        Select a planet:
        <ul className="p-10">
          {results.map((planet, index) => (
            <li key={`${index + 1}-key`}>
              <Link to={planet.name}>{planet.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default planets
