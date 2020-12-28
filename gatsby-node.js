const ky = require("ky-universal")
const fs = require("fs")

const URL = "https://swapi.dev/api/planets/"
const planetsRoute = "./src/site_data/planets.json"
const planets = require(planetsRoute)

const getData = async () => {
  try {
    const response = await ky.get(URL).json()
    const data = JSON.stringify(response, null, 2)
    fs.writeFileSync(planetsRoute, data)
    console.log("=== data created, saved to:", planets)
  } catch (e) {
    console.log(e)
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  await getData()
  createPage({
    path: "/planets",
    component: require.resolve("./src/components/templates/planets"),
    context: {
      planetsData: planets,
    },
  })
  planets.results.forEach(planet => {
    createPage({
      path: `/planets/${planet.name}`,
      component: require.resolve("./src/components/templates/planet"),
      context: {
        planetInfo: planet,
      },
    })
  })
}
