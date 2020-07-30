import execa from 'execa';
import mkdirp from 'mkdirp';
import { existsSync } from 'fs-extra'

export async function gitClone(url: string, dir: string): Promise<any> {
  const dirExist = existsSync(dir);
  if (!dirExist) {
    await mkdirp(dir);
  }
  return new Promise((resolve, reject) => {
    try {
      const command = `git clone ${url} ${dir}`
      const child = execa(command, {shell: true, cwd: process.cwd()});
      child.stderr?.on('data', buf => console.error(buf.toString()))
      child.stdout?.on('data', buf => console.log(buf.toString()))
      child.then(res => {
        resolve();
      }).catch(e => reject(e))
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
  
}

export async function gitPull(dir: string) {
  return new Promise((resolve, reject) => {
    try {
      const command = `git pull`
      const child = execa(command, {shell: true, cwd: dir});
      child.stderr?.on('data', buf => console.error(buf.toString()))
      child.stdout?.on('data', buf => console.log(buf.toString()))
      child.then(res => {
        console.log(res.stdout)
        resolve();
      })
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}