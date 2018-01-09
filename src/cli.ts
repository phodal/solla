let colors = require('colors')
let program = require('commander')
let version = require('../package.json').version

import Solla from './solla'

function sollaBg() {
  let solla = new Solla({
    type: 'BG'
  })
  solla.generate()
}

function sollaVs(stacks: string) {
  let solla = new Solla({
    type: 'VS',
    stacks: stacks
  })
  solla.generate()
}

program
  .version(version)
  .option('-b, --background', 'create new ADR', sollaBg)
  .option('-v, --vs <stack>', 'create new ADR', sollaVs)
  .parse(process.argv)

if (!process.argv.slice(2).length || !process.argv.length) {
  program.outputHelp(colors.green)
}
