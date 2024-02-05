import fs from 'fs';

export function createRouterFile(moduleName, nameArchive) {
  const routerContent = `
    import { createRouter, createWebHistory } from 'vue-router';

    const routes = [
      {
        path: '/${moduleName}',
        name: '${moduleName}',
        component: () => import('@/views/${moduleName}/${nameArchive}.vue')
      }
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes
    });

    export default router;
  `;
  const routerWorkspace = `./src/router/${moduleName}/${moduleName}.ts`;
  fs.writeFileSync(routerWorkspace, routerContent);
}
