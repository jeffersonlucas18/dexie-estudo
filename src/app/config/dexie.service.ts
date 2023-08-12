import Dexie, { Table } from 'dexie';
import { Clientes } from '../models/bd.model';

export class DexieService extends Dexie {
  client!: Table<Clientes, number>;

  constructor() {
    super("banco")
  }

  public createClient(): void {
    this.version(3).stores({
      client: "++id,name"
    })
  }

  public async setValueTableClient(client: Clientes) {
    await db.client.add(client);
  }

}

export const db = new DexieService();
