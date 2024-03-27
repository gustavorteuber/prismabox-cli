/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fs from 'fs'

export function createRepositoryFile(
  moduleName: string,
  WebOrApp: string,
  entityName: string
) {
  const repositoryContent = `import { ApiThrowErrors } from '../../../../Config/helpers/apiThrowErrors';
import { type IDatabase } from '../../../../Config/infra/database/iDatabase';
import i18n from '../../../../Language/i18n';
import { type ${entityName} } from '../entities/${entityName}';

export default class AppBoxRepository {
  constructor (private readonly database: IDatabase) {}
}
// usar o i18n para traduzir as mensagens de erro
// ex: throw new ApiThrowErrors(i18n.__('Unauthorized'), 401);
// lembre-se de criar o termo no arquivo de tradução
`

  const repositoryWorkspace = `./src/Modules/${WebOrApp}/${moduleName}/repositories/${WebOrApp}${moduleName}repository.ts`
  fs.writeFileSync(repositoryWorkspace, repositoryContent)
}
