/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createRouterFile(moduleName: string, nameArchive: string) {
  const routerContent = `
  import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    {
      path: '${moduleName}',
      name: '${moduleName}',
      component: () => import(@/views/${moduleName}/${nameArchive}),
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router
  `
  const routerWorkspace = `./src/router/${moduleName}/${moduleName}.ts`
  fs.writeFileSync(routerWorkspace, routerContent)
}
