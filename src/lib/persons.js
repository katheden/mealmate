import { db } from './mongo'; // Verbindung zur MongoDB

export async function insertPerson(person) {
  const collection = db.collection('persons');
  await collection.insertOne(person);
}
