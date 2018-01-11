import BaseSVGDrawer from './BaseSVGDrawer'
import * as fs from 'fs'
import * as path from 'path'
import SOLLA_CONFIG from '../utils/contants'
import PositionUtils from '../utils/PositionUtils'
import { StackResource } from '../interface/StackResources'
import ColorUtils from '../utils/ColorUtils'

let xml2js = require('xml2js')

let parser = new xml2js.Parser()
let builder = new xml2js.Builder()

export default class VSDrawer extends BaseSVGDrawer {
  private stacks: Array<string>
  private resources: Array<StackResource> = []
  private basedSvg: any

  constructor (stacks: string) {
    super()
    this.stacks = stacks.split(',')
  }

  async init () {
    this.drawBackground()

    await parser.parseString(this.drawer.svg(), (err: any, result: any) => {
      if (err) {
        console.log(err)
      }
      this.basedSvg = result
    })
    for (let index in this.stacks) {
      let filePath = __dirname + path.normalize('/resources/' + this.stacks[index] + '-1.svg')
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8')
        let parseContent: string = ''
        let viewBox: any = null
        let defs: any = null
        let type: any = null
        await parser.parseString(content.toString(), (err: any, result: any) => {
          if (err) {
            console.log(err)
          }

          viewBox = result.svg.$.viewBox
          if (result.svg.path) {
            parseContent = result.svg.path
            type = 'path'
          } else if (result.svg.g) {
            parseContent = result.svg.g
            type = 'g'
          }

          if (result.svg.defs) {
            defs = result.svg.defs
          }
        })

        this.resources.push({
          stack: this.stacks[index],
          content: content.toString(),
          parsed: parseContent,
          viewBox: viewBox,
          defs: defs,
          type: type
        })
      } else {
        console.log(`cannot find file: ${filePath}`)
      }
    }
  }

  draw (): any {
    this.buildSVG()
    console.log(this.basedSvg.svg.g)
    return builder.buildObject(this.basedSvg)
  }

  private drawBackground () {
    this.drawer
      .rect(SOLLA_CONFIG.WIDTH, SOLLA_CONFIG.HEIGHT)
      .attr({fill: ColorUtils.getRandomColor()})

    let positions = PositionUtils.getBasePosition(this.stacks.length)
    for (let i = 0;i < positions.length - 1; i ++) {
      this.drawer
        .polygon(`${positions[i]},0 ${positions[i + 1]},1000 1800,1000 1800,0`)
        .fill(ColorUtils.getRandomColor())
    }

    this.drawer
      .text('@phodal')
      .move(SOLLA_CONFIG.WIDTH - 180, SOLLA_CONFIG.HEIGHT - 80)
      .font({size: 24})
      .fill({color: '#fff'})
  }

  private buildSVG () {
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

      let position = PositionUtils.getPosition(this.resources.length, parseInt(index, 10), resource.viewBox)
      if (resource.defs) {
        this.basedSvg.svg.defs.push({
          defs: resource.defs
        })
      }
      let graph

      if (resource.parsed.g) {
        graph = {
          g: {
            $: resource.parsed.g
          }
        }
        graph.g.$['transform'] = `translate(${position.x}, ${position.y})`
      } else {
        graph = {
          g: {
            $: {
              transform: `translate(${position.x}, ${position.y})`
            }
          }
        }
      }

      graph.g[resource.type] = path

      this.basedSvg.svg.g.push(graph)
    }
  }
}
