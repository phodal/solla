import BaseSVGDrawer from './BaseSVGDrawer'
import fs from 'fs'
import path from 'path'

interface StackResource {
  stack: string
  content: string
}

export default class VSDrawer extends BaseSVGDrawer {
  private stacks: Array<string>
  private resources: Array<StackResource> = []

  constructor(stacks: Array<string>) {
    super()
    this.stacks = ['react', 'angular']
  }

  init(): any {
    for (let index in this.stacks) {
      let filePath = __dirname + path.normalize('/resources/' + this.stacks[index] + '-1.svg')
      console.log(filePath)
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8')
        this.resources.push({
          stack: this.stacks[index],
          content: content.toString()
        })
      }
    }
  }

  draw(): any {
    return this.resources
  }
}
