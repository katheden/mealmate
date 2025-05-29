import { insertMeal } from '$lib/server/meals.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const person = formData.get('person');
    const date = formData.get('datum');
    const mealType = formData.get('mealType');
    const foodName = formData.get('foodName');
    const calories = formData.get('calories');
    const imageUrl = formData.get('imageUrl');

    // Beispielobjekt
    const newMeal = {
      personName: person,
      date,
      meals: [
        {
          mealType,
          items: [
            {
              name: foodName,
              calories: Number(calories),
              imageUrl
            }
          ]
        }
      ]
    };

    await insertMeal(newMeal);

    return { success: true };
  }
};

