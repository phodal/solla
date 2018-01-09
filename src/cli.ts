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

function sollaLP() {
  let solla = new Solla({
    type: 'LP'
  })
  solla.generate()
}

program
  .version(version)
  .option('-b, --background', 'create random svg background', sollaBg)
  .option('-v, --vs <stack>', 'generate vs image', sollaVs)
  .option('-l, --lowpoly', 'create low ploy BG', sollaLP)
  .parse(process.argv)

if (!process.argv.slice(2).length || !process.argv.length) {
  program.outputHelp(colors.green)
}
