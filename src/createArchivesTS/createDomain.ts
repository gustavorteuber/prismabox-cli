/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createDomainFile(moduleName: string) {
  const domainContent = `export default class ${moduleName} {
  //  constructor () {}
  
  //  static restore (): ${moduleName} {
  //    return new ${moduleName}();
  //  }
}
`

  const entitieWorkspace = `./src/Modules/Shared/Domain/${moduleName}.ts`
  fs.writeFileSync(entitieWorkspace, domainContent)
}
