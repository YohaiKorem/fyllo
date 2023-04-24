import { utilService } from './util.service.js'

export const storageService = {
  query,
  getById,
  put,
  post,
  remove,
}

function query(key, filter) {
  var toys = utilService.loadFromStorage(key)
  if (!toys || !toys.length) toys = _createToys(key)
  if (!filter) return Promise.resolve(toys)
  return _filterToys(toys, filter)
}

function getById(key, toyId) {
  const toys = utilService.loadFromStorage(key)
  const toy = toys.find((toy) => toy._id === toyId)
  return Promise.resolve(toy)
}

function put(key, toyToSave) {
  const toys = utilService.loadFromStorage(key)
  const idx = toys.findIndex((toy) => toy._id === toyToSave._id)
  toys.splice(idx, 1, toyToSave)
  utilService.saveToStorage(key, toys)
  return Promise.resolve(toyToSave)
}

function post(key, toyToSave) {
  toyToSave._id = utilService.makeId()
  toyToSave.createdAt = Date.now()

  const toys = utilService.loadFromStorage(key)
  toys.unshift(toyToSave)
  utilService.saveToStorage(key, toys)
  return Promise.resolve(toyToSave)
}

function remove(key, toyId) {
  const toys = utilService.loadFromStorage(key)

  const idx = toys.findIndex((toy) => toy._id === toyId)
  if (idx === -1) return Promise.reject('no such toy')

  toys.splice(idx, 1)
  utilService.saveToStorage(key, toys)
  return Promise.resolve('removed')
}
