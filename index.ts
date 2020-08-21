import * as json from './index.json'

type Schema = {
  $schema: {
    declarations: Record<string, { type: 'string' | 'number' }>
  }
}

const usage: Schema = json

console.log(usage)
