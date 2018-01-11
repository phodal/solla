import { test } from 'ava'
import PositionUtils from '../../utils/PositionUtils'

test('Solla -> Position: one result', t => {
  t.deepEqual(PositionUtils.getPosition(1, 0, '0 0 0 0'), {x: 900, y: 500})
})

test('Solla -> Position: on result with viewbox', t => {
  t.deepEqual(PositionUtils.getPosition(1, 0, '0 0 100 100'), {x: 850, y: 450})
})

test('Solla -> Position: two result', t => {
  t.deepEqual(PositionUtils.getPosition(2, 0, '0 0 0 0'), {x: 600, y: 500})
  t.deepEqual(PositionUtils.getPosition(2, 1, '0 0 0 0'), {x: 1200, y: 500})
})

test('Solla -> Position: three result', t => {
  t.deepEqual(PositionUtils.getPosition(3, 0, '0 0 0 0'), {x: 450, y: 500})
  t.deepEqual(PositionUtils.getPosition(3, 1, '0 0 0 0'), {x: 900, y: 500})
  t.deepEqual(PositionUtils.getPosition(3, 2, '0 0 0 0'), {x: 1350, y: 500})
})
