import { program } from 'commander';
import { generateKoaApp } from './actions/generateKoaApp';
import update from './actions/update';

program
  .version(require('../package.json').version);

program
  .command("g <type> [name]")
  .description('generate a koa application template')
  .action(async (type, name, command) => {
    try {
      await update();
    } catch (error) {}
    if (type === 'koa') {
      try {
        await generateKoaApp(name)
      } catch (error) {
        console.log(error)
      }
    }
  });

program
  .command('update')
  .description('update the templates')
  .action(async () => {
    await update();
  });

program.parse(process.argv);