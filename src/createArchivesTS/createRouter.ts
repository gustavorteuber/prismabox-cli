/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createRouterFile(moduleName: string, WebOrApp: string) {
  const routerContent = `import { Router } from 'express';
import { type IHttpServer } from '../../Config/infra/http/IHttpServer';
import { type IDatabase } from '../../Config/infra/database/iDatabase';

export default class ${WebOrApp}${moduleName}Routes {
  constructor (readonly httpServer: IHttpServer, readonly database: IDatabase) {}

  async start (): Promise<Router> {
    const router = Router();
    return router;
  }
}
`
  const routerWorkspace = `./src/Router/${WebOrApp}/${WebOrApp}${moduleName}Routes.ts`
  fs.writeFileSync(routerWorkspace, routerContent)
}
