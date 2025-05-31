import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

let db = null;

async function connectToDB() {
  if (!db) {
    const client = new MongoClient(DB_URI);
    await client.connect();
    db = client.db('MealMate');
    console.log("MongoDB verbunden");
  }
  return db;
}

// Alle Mahlzeiten abrufen
export async function getMeals() {
  const db = await connectToDB();
  const collection = db.collection('Meals');
  const meals = await collection.find().toArray();
  return meals.map(m => ({
    ...m,
    _id: m._id.toString()
  }));
}

// Einzelne Mahlzeit per ID abrufen
export async function getMealById(id) {
  const db = await connectToDB();
  const collection = db.collection('Meals');
  const meal = await collection.findOne({ _id: new ObjectId(id) });

  if (!meal) return null;
  return {
    ...meal,
    _id: meal._id.toString()
  };
}

// Neue Mahlzeit einfügen
export async function insertMeal(meal) {
  const db = await connectToDB();
  const collection = db.collection('Meals');
  const result = await collection.insertOne(meal);
  return {
    ...meal,
    _id: result.insertedId.toString()
  };
}

// Mahlzeit aktualisieren
export async function updateMeal(meal) {
  const db = await connectToDB();
  const collection = db.collection('Meals');
  const { _id, ...updateFields } = meal;
  const result = await collection.updateOne(
    { _id: new ObjectId(_id) },
    { $set: updateFields }
  );
  return result.modifiedCount > 0;
}
// Mahlzeit löschen
export async function deleteMeal(id) {
  const db = await connectToDB();
  const collection = db.collection('Meals');
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

// --- PERSONEN CRUD ---

export async function getPersonen() {
  const db = await connectToDB();
  const collection = db.collection('Personen');
  const personen = await collection.find().toArray();
  return personen.map(person => ({
    ...person,
    _id: person._id.toString()
  }));
}

export async function getPersonById(id) {
  const db = await connectToDB();
  const collection = db.collection('Personen');
  const person = await collection.findOne({ _id: new ObjectId(id) });
  if (!person) return null;
  person._id = person._id.toString();
  return person;
}

export async function createPerson(person) {
  const db = await connectToDB();
  const collection = db.collection('Personen');
  const result = await collection.insertOne(person);
  return {
    ...person,
    _id: result.insertedId.toString()
  };
}

export async function updatePerson(id, { vorname, nachname, email }) {
  const db = await connectToDB();
  const collection = db.collection('Personen');
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { vorname, nachname, email } }
  );
  return result.matchedCount ? id : null;
}

export async function deletePerson(id) {
  const db = await connectToDB();
  const collection = db.collection('Personen');
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount ? id : null;
}