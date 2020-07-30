import { gitClone, gitPull } from '../utils/gitUtils';
import gitUrls from '../utils/gitUrls';
import { resolve } from 'path';
import { existsSync } from 'fs';

export default async function update() {
  const repoPath = resolve(__dirname, '../../_templates')
  if (existsSync(repoPath)) {
    await gitPull(repoPath);
  } else {
    await gitClone(gitUrls.repo, repoPath)
  }
}