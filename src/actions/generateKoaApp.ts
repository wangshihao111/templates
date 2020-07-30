import { copy } from 'fs-extra';
import { resolve } from 'path';

export async function generateKoaApp(path?: string) {
  const src = resolve(__dirname, '../../_templates/templates/koa-server');
  const target = resolve(process.cwd(), path || 'koa-demo')
  await copy(src, target)
}