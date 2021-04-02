import { Seeder } from "mongo-seeding";
import path from "path";

async function seed() {
  const config = {
    database: 'mongodb://127.0.0.1:27017/db_hackaton_fcamara'
  };
  
  const seeder = new Seeder(config);
  
  try {
    const collections = seeder.readCollectionsFromPath(path.resolve('src', 'database', 'seeds', 'data'), {
      extensions: ['ts'],
    })
    await seeder.import(collections);
  } catch (error: any) {
    console.log(`Error creating seeders: ${error}`);
  }
}

seed();