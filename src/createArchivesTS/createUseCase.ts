/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createUseCaseFile(moduleName: string, WebOrApp: string) {
  const useCaseContent = `// import { ApiThrowErrors } from '../../../../Config/helpers/apiThrowErrors';
import { type IDatabase } from '../../../../Config/infra/database/iDatabase';
// import ${moduleName} from '../../../../Shared/Domain/${moduleName}';
// import i18n from '../../../../Language/i18n';

export default class ${WebOrApp}${moduleName}UseCase {
  constructor (private readonly database: IDatabase) {}

  async execute (): Promise<any> {}
}

// usar o i18n para traduzir as mensagens de erro
// ex: throw new ApiThrowErrors(i18n.__('Unauthorized'), 401);
// lembre-se de criar o termo no arquivo de tradução
`

  const useCaseWorkspace = `./src/Modules/${WebOrApp}/${moduleName}/useCases/${WebOrApp}${moduleName}UseCase.ts`
  fs.writeFileSync(useCaseWorkspace, useCaseContent)
}
