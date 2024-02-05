/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createVueFile(moduleName, nameArchive) {
  const vueContent = `
    <script setup lang="ts">
      // importe sua store aqui
    export default {}
    </script>

    <template>
      <div>
        <h1>${nameArchive}</h1>
      </div>
    </template>
  `
  const vueWorkspace = `./src/views/${moduleName}/${nameArchive}.vue`
  fs.writeFileSync(vueWorkspace, vueContent)
}
