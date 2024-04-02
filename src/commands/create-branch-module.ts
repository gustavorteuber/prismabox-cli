import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-branch',
  description: 'Cria uma branch e Publica no github',

  run: async (toolbox) => {
    const { print, system, prompt } = toolbox

    const { message } = await prompt.ask({
      type: 'input',
      name: 'message',
      message: 'Insira o código da Atividade (Apenas os números):',
    })

    const { type } = await prompt.ask({
      type: 'select',
      name: 'type',
      message: 'Insira o tipo de atividade:',
      choices: ['tarefa', 'poc', 'bug', 'story'],
    })

    if (!type) {
      print.error(
        'Tipo de atividade não selecionado. Por favor, selecione um tipo válido.'
      )
      return
    }

    const branchName = `${message}-${type}`

    await system.run('git pull')
    await system.run(`git checkout -b "PBX-${branchName}"`)

    print.success(`Branch PBX-${branchName} criada com sucesso! 🚀`)
  },
}

export default command
