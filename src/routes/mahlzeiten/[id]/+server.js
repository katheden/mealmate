import { deleteMeal } from '$lib/db.js';
import { error } from '@sveltejs/kit';

export async function DELETE({ params }) {
  try {
    const deleted = await deleteMeal(params.id);
    if (!deleted) {
      throw error(404, 'Mahlzeit nicht gefunden');
    }
    return new Response(null, { status: 204 }); // Erfolgreich gelöscht, keine Rückgabe
  } catch (err) {
    console.error('Fehler beim Löschen:', err);
    throw error(500, 'Löschen fehlgeschlagen');
  }
}
