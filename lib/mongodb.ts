import { MongoClient, type Db, type MongoClientOptions } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const options: MongoClientOptions = {
  maxIdleTimeMS: 10000,
};

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

function createMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  const client = new MongoClient(uri, options);
  attachDatabasePool(client);

  return client;
}

export function getMongoClient() {
  if (process.env.NODE_ENV === "development") {
    globalForMongo.mongoClientPromise ??= createMongoClient().connect();
    return globalForMongo.mongoClientPromise;
  }

  return createMongoClient().connect();
}

export async function getMongoDatabase(databaseName?: string): Promise<Db> {
  const client = await getMongoClient();
  return client.db(databaseName ?? process.env.MONGODB_DB);
}
