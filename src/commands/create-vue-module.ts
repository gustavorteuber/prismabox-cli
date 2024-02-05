import { GluegunCommand } from 'gluegun'
import * as fs from 'fs'
import { createVueFile } from '../createArchives/createSFCvue'
import { createStoreFile } from '../createArchives/createState'
import { createRouterFile } from '../createArchives/createRouter'
import { asciiArt, resizeAscii } from '../art/ascii'

const command: GluegunCommand = {
  name: 'create-vue-module',
  description: 'Cria um novo módulo',

  run: async (toolbox) => {
    const {
      print: { success, error },
      prompt,
    } = toolbox

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
      message: 'Digite o nome do módulo que deseja criar:',
    })

    if (!moduleName) {
      error('Nome do módulo não fornecido. Abortando criação.')
      return
    }

    const nameArchive = moduleName

    const dir = `./src/views/${moduleName}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    createVueFile(moduleName, nameArchive)

    const stateDir = `./src/stores/${moduleName}`
    if (!fs.existsSync(stateDir)) {
      fs.mkdirSync(stateDir, { recursive: true })
    }

    createStoreFile(moduleName, nameArchive)

    const routerDir = `./src/router/${moduleName}`
    if (!fs.existsSync(routerDir)) {
      fs.mkdirSync(routerDir, { recursive: true })
    }

    createRouterFile(moduleName, nameArchive)

    success(`Módulo '${moduleName}' criado!`)
  },
}

export default command
