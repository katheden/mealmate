import { getPersonen } from '$lib/db.js';
import { fail, redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

export async function load() {
  const personen = await getPersonen();
  return { personen };
}

export const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id) return fail(400, { error: 'Kein ID übergeben' });

    const client = new MongoClient(DB_URI);
    await client.connect();
    const db = client.db('mealmate');
    await db.collection('personen').deleteOne({ _id: new ObjectId(id) });

    return { success: true };
  }
};
