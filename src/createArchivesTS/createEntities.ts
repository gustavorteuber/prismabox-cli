/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createEntitiesFile(moduleName: string, WebOrApp: string) {
  const entitieContent = `/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ${WebOrApp}${moduleName}Entity {}
`

  const entitieWorkspace = `./src/Modules/${WebOrApp}/${moduleName}/entities/${WebOrApp}${moduleName}Entity.ts`
  fs.writeFileSync(entitieWorkspace, entitieContent)
}
