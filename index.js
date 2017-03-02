'use strict'

module.exports = prefixer

function prefixer (source, prefix) {
  let prefixed = {}

  if (typeof source !== 'object' || !source) {
    throw new Error('This should have been an object')
  }

  const keys = Object.keys(source)
  const keysLen = keys.length

  for (var i = 0; i < keysLen; i++) {
    prefixed[prefix + keys[i]] = source[keys[i]]
  }

  return prefixed
}
