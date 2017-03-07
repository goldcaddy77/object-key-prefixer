'use strict'

module.exports.prefixer = module.exports = prefixer

function prefixer (source, prefix) {
  var prefixed = {}
  var keys

  if (Object.prototype.toString.call(source) !== '[object Object]') {
    throw new TypeError('source must be an object')
  }

  if (typeof prefix !== 'string' || !prefix) {
    throw new TypeError('prefix must be a non-empty string')
  }

  keys = Object.keys(source)

  for (var i = 0; i < keys.length; i++) {
    prefixed[prefix + keys[i]] = source[keys[i]]
  }

  return prefixed
}
