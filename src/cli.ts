import Solla from './solla'
let colors = require('colors')

let program = require('commander')
let version = require('../package.json').version

function sollaBg() {
  let solla = new Solla()
  solla.draw()
}

program
  .version(version)
  .usage('[options]')
  .option('-b, new background', 'create new ADR', sollaBg)

program.parse(process.argv)

if (!process.argv.slice(2).length || !process.argv.length) {
  program.outputHelp(colors.green)
}
