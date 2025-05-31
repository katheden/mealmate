import { getPersonById, deletePerson, updatePerson } from '$lib/db.js';
import { redirect, error } from '@sveltejs/kit';

export async function load({ params }) {
  const person = await getPersonById(params.id);
  if (!person) throw error(404, 'Person nicht gefunden');
  return { person };
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const intent = formData.get('intent');

    if (intent === 'delete') {
      await deletePerson(params.id);
      throw redirect(303, '/mahlzeiten/personen');
    }

    if (intent === 'update') {
      const vorname = formData.get('vorname');
      const nachname = formData.get('nachname');
      const email = formData.get('email');
      await updatePerson(params.id, { vorname, nachname, email });
       throw redirect(303, `/mahlzeiten/personen/${params.id}`);
    }
  }
};