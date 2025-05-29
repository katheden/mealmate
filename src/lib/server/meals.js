import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('MealMate');
const collection = db.collection('Meals');

export async function getMeals() {
  const meals = await collection.find().toArray();
  return meals.map(m => ({
    ...m,
    _id: m._id.toString()
  }));
}
