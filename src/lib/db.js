// Datei: src/lib/server/db.js

import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
let db;

export async function connectToDB() {
  if (!db) {
    await client.connect();
    db = client.db('MealMate'); // <- passe den Namen an deine Datenbank an
    console.log('MongoDB verbunden');
  }
  return db;
}

///////////////////////////////////////////////////
// Funktionen zum Verwalten von Mahlzeiten
///////////////////////////////////////////////////

import { ObjectId } from 'mongodb';

export async function getMeals() {
  const db = await connectToDB();
  const mealsCollection = db.collection('Meals');

  const meals = await mealsCollection.find().toArray();
  return meals.map((meal) => ({
    ...meal,
    _id: meal._id.toString()
  }));
}

export async function getMeal(id) {
  const db = await connectToDB();
  const mealsCollection = db.collection('Meals');
  const meal = await mealsCollection.findOne({ _id: new ObjectId(id) });

  if (!meal) return null;
  meal._id = meal._id.toString();
  return meal;
}

export async function createMeal(meal) {
  const db = await connectToDB();
  const mealsCollection = db.collection('Meals');
  const result = await mealsCollection.insertOne(meal);
  return result.insertedId.toString();
}

export async function updateMeal(meal) {
  const db = await connectToDB();
  const mealsCollection = db.collection('Meals');
  const id = meal._id;
  delete meal._id;
  const result = await mealsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: meal }
  );
  return result.matchedCount ? id : null;
}

export async function deleteMeal(id) {
  const db = await connectToDB();
  const mealsCollection = db.collection('Meals');
  const result = await mealsCollection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount ? id : null;
}
