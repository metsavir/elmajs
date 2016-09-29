const fs = require('fs')
const TOP10 = require('./const')

/**
 * Class containing all level attributes.
 */
class Level {
  constructor () {
    this.version = 'Elma'
    this.link = 0
    this.integrity = [0.0, 0.0, 0.0, 0.0]
    this.lgr = 'Default'
    this.name = 'New level'
    this.ground = 'ground'
    this.sky = 'sky'
    this.polygons = []
    this.objects = []
    this.pictures = []
    this.top10 = {
      single: [],
      multi: []
    }
  }

  /**
   * Loads a level from file.
   * @param {string} filePath Path to file
   * @returns {Promise} Promise
   */
  static load (filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (error, buffer) => {
        if (error) reject(error)
        let level = new Level()
        resolve(level)
      })
    })
  }

  /**
   * Internal convinience method.
   * @returns {Promise} Promise
   */
  _update () {
    return new Promise((resolve, reject) => {
      if (true) resolve()
      reject()
    })
  }

  /**
   * Toplogy check
   * @returns {Promise} Promise
   */
  _checkTopology () {
    return new Promise((resolve, reject) => {
      if (true) resolve()
      reject()
    })
  }

  /**
   * Returns raw buffer data
   * @returns {Promise} Promise
   */
  toBuffer () {
    return new Promise((resolve, reject) => {
      if (true) resolve()
      reject()
    })
  }

  /**
   * Generate new link number.
   */
  generateLink () {
    let max32 = Math.pow(2, 32) - 1
    this.link = Math.floor(Math.random() * max32)
  }

  /**
   * Saves a level to file.
   * @param {string} filePath Path to file
   * @returns {Promise} Promise
   */
  save (filePath) {
    return new Promise()
  }
}

module.exports = Level