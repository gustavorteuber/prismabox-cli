/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createStoreFile(moduleName, nameArchive) {
  const tsContent = `
    import { defineStore } from 'pinia'
    import axios from '@axios'

    export const use${moduleName}Store = defineStore('${moduleName}', {
      state: () => ({
      }),
      actions: {
      },
    })
  `
  const tsWorkspace = `./src/stores/${moduleName}/${nameArchive}.ts`
  fs.writeFileSync(tsWorkspace, tsContent)
}
