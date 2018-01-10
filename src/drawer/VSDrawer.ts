import BaseSVGDrawer from './BaseSVGDrawer'
import * as fs from 'fs'
import * as path from 'path'
import SOLLA_CONFIG from '../utils/contants'

let xml2js = require('xml2js')

let parser = new xml2js.Parser()
let builder = new xml2js.Builder()

interface StackResource {
  stack: string
  content: string
  parsed: any
}

export default class VSDrawer extends BaseSVGDrawer {
  private stacks: Array<string>
  private resources: Array<StackResource> = []
  private basedSvg: any

  constructor(stacks: string) {
    super()
    this.stacks = stacks.split(',')
  }

  async init() {
    this.drawer.rect(SOLLA_CONFIG.WIDTH, SOLLA_CONFIG.HEIGHT).attr({ fill: '#3498db' })
    await parser.parseString(this.drawer.svg(), (err: any, result: any) => {
      this.basedSvg = result
    })
    for (let index in this.stacks) {
      let filePath = __dirname + path.normalize('/resources/' + this.stacks[index] + '-1.svg')
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8')
        let parseContent = ''
        await parser.parseString(content.toString(), (err: any, result: any) => {
          parseContent = result.svg.path
        })

        this.resources.push({
          stack: this.stacks[index],
          content: content.toString(),
          parsed: parseContent
        })
      }
    }
  }

  draw(): any {
    if (!this.basedSvg.svg.g) {
      this.basedSvg.svg.g = []
    }

    for (let index in this.resources) {
      let resource = this.resources[index]
      let path: string[][] = []
      for (let j in resource.parsed) {
        let parsed = resource.parsed[j]
        path.push(parsed)
      }

      this.basedSvg.svg.g.push({
        g: {
          $: {
            transform: 'translate(416.000000, 385.000000)'
          },
          path: path
        }
      })
    }
    return builder.buildObject(this.basedSvg)
  }
}
