/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createControllerFile(moduleName: string, WebOrApp: string) {
  const controllerContent = `import { type IHttpResponse } from '../../../../Config/infra/http/IHttpResponse';
import { type IHttpRequest } from '../../../../Config/infra/http/IHttpRequest';
import { type IDatabase } from '../../../../Config/infra/database/iDatabase';

export default class ${WebOrApp}${moduleName}Controller {
  constructor (readonly database: IDatabase) {}
}
`
  const controllerWorkspace = `./src/Modules/${WebOrApp}/${moduleName}/controllers/${WebOrApp}${moduleName}Controller.ts`
  fs.writeFileSync(controllerWorkspace, controllerContent)
}
