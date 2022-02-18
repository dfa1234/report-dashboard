import { MongoClient } from 'mongodb';

const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const DB_NAME = `myFirstDatabase`;
const URI = `mongodb+srv://dfa1234:${MONGO_DB_PASSWORD}@cluster0.pbko0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connectMongo = async () => {
  const client = await MongoClient.connect(URI)
  const cachedDb = client.db(DB_NAME);
  return cachedDb;
}
