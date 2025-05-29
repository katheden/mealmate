// src/routes/mahlzeiten/neu/+server.js
import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';
import { json } from '@sveltejs/kit';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('MealMate');
const collection = db.collection('Meals');

export async function POST({ request }) {
	try {
		const data = await request.json();

		if (!data.personName || !data.date || !Array.isArray(data.meals)) {
			return json({ success: false, error: 'Ungültige Eingaben' }, { status: 400 });
		}

		await collection.insertOne({
			personName: data.personName,
			date: new Date(data.date),
			meals: data.meals
		});

		return json({ success: true });
	} catch (err) {
		console.error('Fehler beim Speichern:', err);
		return json({ success: false, error: 'Serverfehler beim Speichern' }, { status: 500 });
	}
}
