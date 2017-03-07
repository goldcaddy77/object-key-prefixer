'use strict'

module.exports = prefixer

function prefixer (source, prefix) {
  var prefixed = {}
  var keys

  if (typeof source !== 'object' || !source) {
    throw new Error('source must be a non-empty object')
  }

  if (typeof prefix !== 'string' || !prefix) {
    throw new Error('prefix must be a non-empty string')
  }

  keys = Object.keys(source)

  for (var i = 0; i < keys.length; i++) {
    prefixed[prefix + keys[i]] = source[keys[i]]
  }

  return prefixed
}
