import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'prismabox',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info(`
📦 Create-vue-module Command 📦

Com o comando create-vue-module:

prismabox create-vue-module

você pode facilmente adicionar um novo módulo ao seu projeto Vue.js e personalizá-lo de acordo com suas necessidades. 🚀

🎨 Customização de Módulo 🎨

Você pode escolher o nome do módulo que deseja criar. O CLI cuidará de criar a estrutura de arquivos necessária para o seu novo módulo Vue.js! 💻

🛠️ Opções de Personalização 🛠️

Este CLI também permite adicionar recursos comuns aos seus módulos Vue.js:

Componente Vue: Cria um arquivo de componente Vue para o seu módulo.
State Management (Pinia): Cria um arquivo de store Pinia para gerenciar o estado do seu módulo.
Router (Vue Router): Cria um arquivo de configuração do Vue Router para navegação dentro do seu módulo.

E voilà! Seu módulo Vue.js personalizado é criado e está pronto para ser usado em seu projeto! 💖

Com o Prismabox CLI para Vue.js, adicionar funcionalidades e organizar seu projeto Vue.js é fácil! 🚀🌟

📦 Create-ts-module Command 📦

Com o comando create-ts-module:

prismabox create-ts-module

você pode criar facilmente um novo módulo e personalizá-lo de acordo com suas necessidades. 🚀

🎨 Customização de Módulo 🎨

Você pode escolher o nome e o tipo do módulo, seja ele para o aplicativo (App) ou para a web (Web). 📱💻

🛠️ Opções de Personalização 🛠️

Depois de escolher o nome e o tipo, você pode selecionar quais recursos deseja incluir no seu módulo:

UseCase: Para lógica de negócios.
Controller: Para gerenciar solicitações e respostas.
Domain: Para definir a estrutura de dados.
Repository: Para lidar com a persistência de dados.
Schemas: Validaçoes com o Zod

Contribuição:
Este projeto é de uso exclusivo da empresa Prismabox e não aceita contribuições externas neste momento.
    `)
  },
}

module.exports = command
