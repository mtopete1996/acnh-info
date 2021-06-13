const axiosService = require('./axiosService');
const shared = require('../config.json');
const moment = require('moment');

const getAllFish = async () => {
  const { apiUrl } = shared
  const fishes = await axiosService.requestGet(`${apiUrl}/fish`);
  return cleanFishes(fishes)
}

const cleanFishes = fishes => {
  const fishesArray = Object.values(fishes);
  return fishesArray.map(fish => {
    return cleanFish(fish)
  })
}

const cleanFish = fish => {
  const inCurrentDate = fish.availability['month-array-northern'].includes((moment().month()) + 1)
  const inCurrentTime = fish.availability['time-array'].includes(moment().hour())

  if (inCurrentDate && inCurrentTime) {
    return {
      name: fish['file-name'],
      shadow: fish['shadow'],
      icon: fish['icon_uri'],
    }
  }
}

module.exports = { getAllFish }
