import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-commit',
  description:
    'Realiza git add ., git commit com a mensagem especificada e git push',

  run: async (toolbox) => {
    const { print, system, prompt } = toolbox

    const emojiMap = {
      hotfix: '🔧',
      task: '🛠️',
      feature: '✨',
    }

    const { type } = await prompt.ask({
      type: 'select',
      name: 'type',
      message: 'Selecione o tipo de commit:',
      choices: ['hotfix', 'task', 'feature'],
    })

    const { message } = await prompt.ask({
      type: 'input',
      name: 'message',
      message: 'Insira a mensagem do commit:',
    })

    const branch = await system.run('git rev-parse --abbrev-ref HEAD')

    const commitMessage = `${
      emojiMap[type]
    } [${type}/${branch.trim()}] ${message}`

    await system.run('git add .')
    await system.run(`git commit -m "${commitMessage}"`)
    await system.run('git push')

    print.success('Commit realizado e push efetuado com sucesso!')
  },
}

export default command
