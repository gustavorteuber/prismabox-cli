import { GluegunCommand } from 'gluegun'
import { createControllerFile } from '../createArchivesTS/createController'
import { createEntitiesFile } from '../createArchivesTS/createEntities'
import { createRepositoryFile } from '../createArchivesTS/createRepository'
import { createUseCaseFile } from '../createArchivesTS/createUseCase'
import * as fs from 'fs'
import { createRouterFile } from '../createArchivesTS/createRouter'
import { asciiArt, resizeAscii } from '../art/asciiTS'

const command: GluegunCommand = {
  name: 'create-ts-module',
  description: 'Cria um novo módulo no TS',

  run: async (toolbox) => {
    const { print, prompt } = toolbox

    const printAscii = () => {
      console.clear()
      console.log(`\n\n${resizeAscii(asciiArt, 30)}\n`)
    }

    const printWelcomeMessage = () => {
      console.log('Bem-vindo ao PrismaBox-CLI!\n')
    }

    const printDivider = () => {
      console.log('='.repeat(40))
    }

    printWelcomeMessage()
    printDivider()
    printAscii()
    printDivider()

    const { moduleName } = await prompt.ask({
      type: 'input',
      name: 'moduleName',
      message: 'Qual o nome do módulo?',
    })

    const { moduleType } = await prompt.ask({
      type: 'select',
      name: 'moduleType',
      message: 'Selecione o tipo de módulo:',
      choices: ['App', 'Web'],
    })

    const { selectedOptions } = await prompt.ask({
      type: 'multiselect',
      name: 'selectedOptions',
      message:
        'Selecione as opções desejadas: (Pressione <space> para selecionar, <a> para selecionar todos, <i> para inverter a seleção)',
      choices: [
        { name: 'UseCase' },
        { name: 'Controller' },
        { name: 'Router' },
        { name: 'Schema (ZoD)' },
        { name: 'Domain' },
        { name: 'Repository' },
      ],
    })

    if (selectedOptions.includes('UseCase')) {
      const directoryPath = `./src/Modules/${moduleType}/${moduleName}/useCases`
      fs.mkdirSync(directoryPath, { recursive: true })
      createUseCaseFile(moduleName, moduleType)
    }

    if (selectedOptions.includes('Controller')) {
      const directoryPath = `./src/Modules/${moduleType}/${moduleName}/controllers`
      fs.mkdirSync(directoryPath, { recursive: true })
      createControllerFile(moduleName, moduleType)
    }

    if (selectedOptions.includes('Domain')) {
      const directoryPath = `./src/Shared/Domain`
      fs.mkdirSync(directoryPath, { recursive: true })
      createEntitiesFile(moduleName, moduleType)
    }

    if (selectedOptions.includes('Schema (ZoD)')) {
      const directoryPath = `./src/Modules/${moduleType}/${moduleName}/schemas`
      fs.mkdirSync(directoryPath, { recursive: true })
      createEntitiesFile(moduleName, moduleType)
    }

    if (selectedOptions.includes('Repository')) {
      const directoryPath = `./src/Modules/${moduleType}/${moduleName}/repositories`
      fs.mkdirSync(directoryPath, { recursive: true })
      createRepositoryFile(
        moduleName,
        moduleType,
        `${moduleType}${moduleName}Entity`
      )
    }

    if (selectedOptions.includes('Router')) {
      const directoryPath = `./src/Router/${moduleType}`
      fs.mkdirSync(directoryPath, { recursive: true })
      createRouterFile(moduleName, moduleType)
    }

    print.info(`Nome do módulo: ${moduleName}`)
    print.info(`Tipo do módulo: ${moduleType}`)
  },
}

export default command
