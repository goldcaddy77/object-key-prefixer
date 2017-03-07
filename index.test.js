'use strict'

const test = require('ava')
const prefixer = require('./index')

test('source object cant be null', function (t) {
  const error = testTypeError(t, null, 'foo')

  t.is(error.message, 'source must be an object')
})

test('source cannot be an array', function (t) {
  const error = testTypeError(t, [], 'foo')

  t.is(error.message, 'source must be an object')
})

test('prefix cannot be null', function (t) {
  const error = testTypeError(t, {foo: 'bar'}, null)

  t.is(error.message, 'prefix must be a non-empty string')
})

test('prefix cannot be an empty string', function (t) {
  const error = testTypeError(t, {foo: 'bar'}, '')

  t.is(error.message, 'prefix must be a non-empty string')
})

test('source can be empty and returns empty object', function (t) {
  t.deepEqual(prefixer({}, 'foo'), {})
})

test('prefixes object keys with source string', function (t) {
  const obj = { one: 'foo1', two: 'foo2', three: 'foo3' }
  const result = prefixer(obj, 'awesome_')

  t.deepEqual(result, { awesome_one: 'foo1', awesome_two: 'foo2', awesome_three: 'foo3' })
})

test('prefixes with all sorts of special characters', function (t) {
  const obj = { foo: 'bar' }
  const result = prefixer(obj, '!@#$%^&*(){}[]|')

  t.deepEqual(result, { '!@#$%^&*(){}[]|foo': 'bar' })
})

test('does not prefix nested keys', function (t) {
  const obj = { foo: { bar: 'baz' } }
  const result = prefixer(obj, 'awesome_')

  t.deepEqual(result, { awesome_foo: { bar: 'baz' } })
})

function testTypeError (t, source, prefix) {
  return t.throws(() => {
    prefixer(source, prefix)
  }, TypeError)
}
