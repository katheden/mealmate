import { getMeals } from '$lib/server/meals.js';

export async function load() {
  const meals = await getMeals();
  return { meals };
}
