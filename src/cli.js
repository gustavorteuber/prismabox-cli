#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import { asciiArt, resizeAscii } from './art/ascii.js';

function printAscii() {
  console.clear();
  console.log(`\n\n${resizeAscii(asciiArt, 30)}\n`);
}

function printWelcomeMessage() {
  console.log('Bem-vindo ao PrismaBox-CLI!\n');
}

function printDivider() {
  console.log('='.repeat(40));
}

printWelcomeMessage();
printDivider();
printAscii();
printDivider();

const mainActions = [
  {
    name: 'Criar uma nova Vue + Router🧭',
    submenu: [
      { name: 'Criar novo módulo', action: createNewModule },
      { name: 'Criar dentro de um módulo existente', action: createInExistingModule },
      { name: 'Voltar ao Menu Inicial' }
    ]
  },
  {
    name: 'Criar uma nova Vue + Router🧭 + Pinia🍍',
    submenu: [
      { name: 'Criar novo módulo', action: createNewModule },
      { name: 'Criar dentro de um módulo existente', action: createInExistingModule },
      { name: 'Voltar ao Menu Inicial' }
    ]
  },
  {
    name: 'Criar um módulo filho',
    action: createChildModule
  },
  {
    name: 'Sair',
    action: () => {
      console.log('Até mais!');
      process.exit(0);
    }
  }
];

async function createNewModule() {
  console.log('Criando um novo módulo...');
}

async function createInExistingModule() {
  console.log('Criando dentro de um módulo existente...');
}

async function createChildModule() {
  console.log('Criando um módulo filho...');
}

async function executeMainMenu() {
  while (true) {
    const { opcao } = await inquirer.prompt([
      {
        type: 'list',
        name: 'opcao',
        message: 'Selecione uma opção:',
        choices: mainActions.map(({ name }) => name),
      },
    ]);

    const selectedAction = mainActions.find(({ name }) => name === opcao);
    if (selectedAction.submenu) {
      const { subopcao } = await inquirer.prompt([
        {
          type: 'list',
          name: 'subopcao',
          message: 'Escolha uma opção:',
          choices: selectedAction.submenu.map(({ name }) => name),
        },
      ]);
      const selectedSubAction = selectedAction.submenu.find(({ name }) => name === subopcao);
      if (selectedSubAction && selectedSubAction.action) {
        selectedSubAction.action();
      }
    } else if (selectedAction.action) {
      selectedAction.action();
    } else {
      console.log('Opção inválida.');
    }
  }
}

executeMainMenu();
