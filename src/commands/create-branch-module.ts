import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-branch',
  description: 'Cria uma branch e Publica no github',

  run: async (toolbox) => {
    const { print, system, prompt } = toolbox

    const { message } = await prompt.ask({
      type: 'input',
      name: 'message',
      message: 'Insira o código da Atividade (Apenas os numeros):',
    })

    const { type } = await prompt.ask({
      type: 'select',
      name: 'type',
      message: 'Insira o tipo de atividade:',
      choices: ['tarefa', 'poc', 'bug', 'story'],
    })

    const branchName = `${message}`

    await system.run('git pull')
    await system.run(`git checkout -b "PBX-${branchName}-${type}"`)

    print.success(`Branch PBX-${branchName} Criada 🚀!`)
  },
}

export default command
