const axiosService = require('./axiosService')
const shared = require('../config.json')
const moment = require('moment')
const stringTools = require('./stringTools')

const sanitizeFishes = fishes => {
  const fishesArray = Object.values(fishes)
  return fishesArray.map(fish => {
    return sanitizeFish(fish)
  })
}

const sanitizeFish = fish => {
  const inCurrentDate = fish.availability['month-array-northern'].includes((moment().month()) + 1)
  const inCurrentTime = fish.availability['time-array'].includes(moment().hour())

  if (inCurrentDate && inCurrentTime) {
    const { location } = fish.availability

    return {
      icon: fish['icon_uri'],
      location,
      name: fish['name']['name-USen'],
      shadow: fish['shadow'],
    }
  }
}

const getAllFish = async () => {
  const { apiUrl } = shared
  const fishes = await axiosService.requestGet(`${apiUrl}/fish`)
  return sanitizeFishes(fishes)
}

const fishTableObject = async () => {
  const collection = await getAllFish()
  return {
    headers: ['Icon', 'Location', 'Name', 'Shadow'],
    body: collection
  }
}

module.exports = { fishTableObject }
