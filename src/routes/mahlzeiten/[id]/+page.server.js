import { getMealById } from '$lib/db.js';

export async function load({ params }) {
  const meal = await getMealById(params.id);

  if (!meal) {
    return {
      status: 404,
      error: new Error("Mahlzeit nicht gefunden")
    };
  }

  return { meal };
}

