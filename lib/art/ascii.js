// ascii.js
const asciiArt = `
Seja bem-vindo ao PrismaBox-CLI!
╭───────────────────────────────────────────────────╮
│                                                   │
│              PRISMABOX CLI VITE + TS              │
│                by: gustavorteuber                 │ 
│                                                   │
╰───────────────────────────────────────────────────╯
`;

function resizeAscii(ascii, width) {
  const lines = ascii.split('\n');
  const resizedAscii = lines.map(line => {
    const padding = ' '.repeat(Math.max(0, width - line.length));
    return line + padding;
  }).join('\n');
  return resizedAscii;
}

export { asciiArt, resizeAscii };
