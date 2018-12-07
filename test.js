const test = require('tape')

const m = require('./')

test('get a random quote', (t) => {
  t.true(m.random())
  t.true(typeof m.random() === 'string')
  t.true(m.all.includes(m.random()))
  t.end()
})

test('get all quotes', (t) => {
  t.true(Array.isArray(m.all))
  t.true(m.all.length > 0)
  t.true(m.all.every(q => typeof q === 'string'))
  t.true(m.all.every(q => q.search(/“.+”/g) !== -1))
  t.end()
})
