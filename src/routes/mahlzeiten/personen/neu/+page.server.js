import { redirect } from '@sveltejs/kit';
import { createPerson } from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const person = {
      vorname: formData.get('vorname'),
      nachname: formData.get('nachname'),
      email: formData.get('email')
    };

    await createPersonen(person);
    throw redirect(303, '/mahlzeiten/personen');
  }
};
