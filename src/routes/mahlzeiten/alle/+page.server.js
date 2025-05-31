import { getMeals } from '$lib/db.js';

export async function load() {
  const meals = await getMeals();
  return { meals };
}
