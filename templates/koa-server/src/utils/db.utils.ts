import fs from 'fs-extra';
import path from 'path'

const dbPath = path.resolve(__dirname, '../../db/db.json');

export interface DB {
  apiList: string[];
  interceptList: string[];
}

type dbKeys = 'apiList' | 'interceptList';

export default class DbUtil {

  constructor () {
    const base = path.resolve(__dirname, '../../db')
    if (!fs.existsSync(base)) {
      fs.mkdirSync(base)
    }
  }

  public async set (key: dbKeys, value: any): Promise<void> {
    const db = await this.readJson();
    db[key] = value;
    await this.writeJson(db);
  }

  public async get(key: dbKeys) {
    const db = await this.readJson();
    return db[key];
  }

  public async getDb (): Promise<DB> {
    return await this.readJson() as DB;
  }

  public async writeJson(db: DB) {
    await fs.writeJson(dbPath, db)
  }

  async readJson(): Promise<DB> {
    try {
      return (await fs.readJson(dbPath) || {}) as DB;
    } catch (error) {
      await fs.writeJson(dbPath, {});
      return {} as DB;
    }
  }

}
