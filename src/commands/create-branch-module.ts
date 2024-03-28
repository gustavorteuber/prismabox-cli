import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-branch',
  description: 'Cria uma branch localmente',

  run: async (toolbox) => {
    const { print, system, prompt } = toolbox

    const { message } = await prompt.ask({
      type: 'input',
      name: 'message',
      message: 'Insira o código da Atividade (Apenas os números):',
    })

    const branchName = `${message}`

    const pullResult = await system.run('git pull')
    if (!pullResult.includes('Already up to date.')) {
      print.success('Atualizado com sucesso!')
    }

    await system.run(`git checkout -b "PBX-${branchName}"`)

    print.success(
      `Branch PBX-${branchName} Criada localmente e alterada para ela 🚀!`
    )
  },
}

export default command
