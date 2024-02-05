/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createStoreFile(moduleName: string, nameArchive: string) {
  const tsContent = `
  import { defineStore } from 'pinia'
  import axios from '@axios'
  
  export const useRafaStore = defineStore('${moduleName}', {
    state: () => ({
    }),
    actions: {
      async firstAction() {
        try {
          const response = await axios.get('/')
  
          return response.data
        }
        catch (error: any) {
          return error.response.data.message
        }
      },
    },
  })
  
  `
  const tsWorkspace = `./src/stores/${moduleName}/${nameArchive}.ts`
  fs.writeFileSync(tsWorkspace, tsContent)
}
