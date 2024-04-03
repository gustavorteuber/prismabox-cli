/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createSchemasFile(moduleName: string, WebOrApp: string) {
  const schemaContent = `import { z } from 'zod';

 // const exampleSchema = z.object({
 //   example: z.string().min(1, { message: 'O nome é obrigatório.' })
 // });
`

  const entitieWorkspace = `./src/Modules/${WebOrApp}/${moduleName}/schemas/${WebOrApp}${moduleName}Schema.ts`
  fs.writeFileSync(entitieWorkspace, schemaContent)
}
