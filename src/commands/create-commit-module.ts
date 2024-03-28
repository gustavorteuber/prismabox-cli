import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-commit',
  description:
    'Realiza git add ., git commit com a mensagem especificada e git push',

  run: async (toolbox) => {
    const { print, system, prompt } = toolbox

    const emojiMap = {
      Hotfix: '🔧',
      Task: '🛠️',
      Feature: '✨',
    }

    const { type } = await prompt.ask({
      type: 'select',
      name: 'type',
      message: 'Selecione o tipo de commit:',
      choices: ['Hotfix', 'Task', 'Feature'],
    })

    const { message } = await prompt.ask({
      type: 'input',
      name: 'message',
      message: 'Insira a mensagem do commit:',
    })

    const branch = await system.run('git rev-parse --abbrev-ref HEAD')

    const commitMessage = `${
      emojiMap[type.toLowerCase()]
    } [${type}/${branch.trim()}] ${message}`

    await system.run('git pull')
    await system.run('git add .')
    await system.run(`git commit -m "${commitMessage}"`)
    await system.run('git push')

    print.success(`Ta voando hein! 🚀
     |
    / \
   /   \
  *-----*
  | o o |
  | o o |
  | o o |
  | o o |
  *-----*
   /___\
  /     \
  -------
    `)
  },
}

export default command
