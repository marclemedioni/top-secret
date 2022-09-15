import * as path from 'path';

import { Generator } from './tools/generator';

async function main() {
  const generator = new Generator({
    palConfig: require('./pal.js'),
    apiOutPath: path.join(__dirname, 'apps/api/src/app/graphql'),
    caslOutFile: path.join(__dirname, 'apps/api/src/app/auth/casl/generated.ts'),
    frontend: {
      outPath: path.join(__dirname, 'libs/graphql/src/lib'),
    },
  });

  await generator.run();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
