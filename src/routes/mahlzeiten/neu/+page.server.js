import { insertMeal, getPersonen } from '$lib/db.js';

export async function load() {
  const personen = await getPersonen(); // Holt alle Personen aus der DB
  return { personen };
}

export const actions = {
  default: async ({ request }) => {
    const contentType = request.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const body = await request.json();

      const { personName, date, meals } = body;

      const newMeal = {
        personName,
        date,
        meals
      };

      await insertMeal(newMeal);
      return { success: true };
    } else {
      return {
        status: 400,
        body: { error: 'Unsupported content type' }
      };
    }
  }
};
