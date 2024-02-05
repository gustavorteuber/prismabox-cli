/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createVueFile(moduleName, nameArchive) {
  const vueContent = `
  <template>
    <div>
      <h1>Rafa</h1>
    </div>
  </template>
  `
  const vueWorkspace = `./src/views/${moduleName}/${nameArchive}.vue`
  fs.writeFileSync(vueWorkspace, vueContent)
}
