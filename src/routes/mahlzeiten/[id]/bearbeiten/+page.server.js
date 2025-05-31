import { getMealById, updateMeal } from '$lib/db.js';
import { error, redirect } from '@sveltejs/kit';

/**
 * Lädt die Mahlzeit für die Bearbeitungsseite.
 * Gibt zusätzlich einen Rück-Link zurück.
 */
export async function load({ params }) {
  const meal = await getMealById(params.id);
  if (!meal) throw error(404, 'Mahlzeit nicht gefunden');
  return {
    meal,
    backHref: `/mahlzeiten/${params.id}` // z.B. für einen "Zurück"-Button
  };
}

/**
 * Action zum Speichern der Änderungen an einer Mahlzeit.
 */
export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();

    // Werte aus dem Formular holen & ggf. trimmen
    const personName = formData.get('personName')?.trim() || '';
    const date = formData.get('date') || '';
    const mealType = formData.get('mealType') || '';

    // Bestehendes Meal laden (zur Übernahme der Items)
    const existingMeal = await getMealById(params.id);
    if (!existingMeal) throw error(404, 'Mahlzeit nicht gefunden');

    // Neues Update-Objekt bauen
    const updateObj = {
      _id: params.id,
      personName,
      date,
      meals: [
        {
          mealType,
          items: existingMeal.meals?.[0]?.items || []
        }
      ]
    };

    try {
      const updated = await updateMeal(updateObj);
      if (!updated) throw error(500, 'Kein Datensatz aktualisiert');
      // Erfolgreich: weiterleiten zur Detailansicht
      throw redirect(303, `/mahlzeiten/${params.id}`);
    } catch (err) {
      if (err?.status === 303) throw err; // redirect weiterreichen
      console.error('Fehler beim Update:', err);
      throw error(500, 'Update fehlgeschlagen');
    }
  }
};