import Solla from './solla'
let colors = require('colors')

let program = require('commander')
let version = require('../package.json').version

function sollaBg() {
  let solla = new Solla({
    type: 'Background'
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
  .usage('[options]')
  .option('-b, new background', 'create new ADR', new Solla('Background').generate())
  .option('-v, new background <f> [vs...]', 'create new ADR', sollaVs)

program.parse(process.argv)

if (!process.argv.slice(2).length || !process.argv.length) {
  program.outputHelp(colors.green)
}
