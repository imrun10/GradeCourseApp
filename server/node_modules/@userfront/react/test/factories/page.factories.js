import _ from 'lodash'
import { mods } from './mod.factories.js'

const makePage = (mods = [], data = {}) => {
  let randomNumber = parseInt(Math.random() * 1000),
    cssAssets = [],
    jsAssets = [],
    modsObj = {}
  mods.map(mod => {
    cssAssets = cssAssets.concat(mod.cssAssets || [])
    jsAssets = jsAssets.concat(mod.jsAssets || [])
    modsObj[mod.key] = mod
  })
  return {
    id: data.id || randomNumber,
    host: data.host || 'example.com',
    pathname: data.pathname || '/' + randomNumber,
    cssAssets,
    jsAssets,
    mods: modsObj,
  }
}

let pages = {
  // Basic
  basic: {
    id: 1,
    host: 'example.com',
    pathname: '/basic',
    cssAssets: mods.basic.cssAssets.concat(mods.assetboth.cssAssets),
    jsAssets: mods.basic.jsAssets.concat(mods.assetboth.jsAssets),
    mods: {
      basic: mods.basic,
      assetboth: mods.assetboth,
    },
  },

  // Mods but no assets
  noassets: {
    id: 2,
    host: 'example.com',
    pathname: '/noassets',
    cssAssets: [],
    jsAssets: [],
    mods: {
      plainhtml: mods.plainhtml,
      plaincss: mods.plaincss,
    },
  },

  // Empty
  empty: {
    id: 3,
    host: 'example.com',
    pathname: '/empty',
    cssAssets: [],
    jsAssets: [],
    mods: {},
  },
}

export { makePage, pages }
