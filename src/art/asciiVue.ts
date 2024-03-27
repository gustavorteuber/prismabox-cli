/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  blue: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
}

const asciiArt = `
${colors.blue}                                        
${colors.blue}                   :=:                  
${colors.blue}                :+%#*##+:               
${colors.blue}                -+++*++++.              
${colors.blue}          -+: :=+*******+-. .+-         
${colors.blue}       -*%+-:+*************=.-*%*-      
${colors.blue}      *%%+::=--=********+---+ :*%%+     
${colors.blue}      *%:=#%***=--=**+---+***#*--%+     
${colors.blue}      *%.  :******=-.-+******   :%+     
${colors.blue}      *%.  :****#%#*:##%#****   :%+     
${colors.blue}      *%.   :=****#%%#*****=:   :%+     ${colors.cyan}Gerar modulo VUEJS PrismaBox!     
${colors.blue}      *%.      :+**#%#**=:      :%+            ${colors.gray}Prisma ${colors.red}Box
${colors.blue}      *%-        .-*%+:.        =%+     
${colors.blue}      .=##+:  .....+%-.......-+%*-      
${colors.blue}         .=#%*-....+%-....=*%*=.        
${colors.blue}            ....=*%#%#%*-...            
${colors.blue}                ...-+-...               
${colors.blue}                   ...                  
${colors.reset}`

function resizeAscii(ascii: string, width: number) {
  const lines = ascii.split('\n')
  const resizedAscii = lines
    .map((line: string | any[]) => {
      const padding = ' '.repeat(Math.max(0, width - line.length))
      return line + padding
    })
    .join('\n')
  return resizedAscii
}

export { asciiArt, resizeAscii }
