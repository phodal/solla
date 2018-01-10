import { test } from 'ava'
import ColorUtils from '../../utils/ColorUtils'

test('Solla: Color', t => {
  t.deepEqual(1, 1)
  t.deepEqual(ColorUtils.getRedColor(0), '#2E112D')
  t.deepEqual(ColorUtils.getHappyColor().length, 3)
})
