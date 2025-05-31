<script>
  export let data;

  let personName = data.meal?.personName || "";
  let date = data.meal?.date?.slice(0, 10) || "";
  let meals = data.meal?.meals ? structuredClone(data.meal.meals) : [];

  function addMeal() {
    meals = [
      ...meals,
      {
        mealType: '',
        items: [
          { name: '', calories: '', imageUrl: '' }
        ]
      }
    ];
  }

  function removeMeal(mealIndex) {
    meals.splice(mealIndex, 1);
    meals = meals;
  }

  function addItem(mealIndex) {
    meals[mealIndex].items = [
      ...meals[mealIndex].items,
      { name: '', calories: '', imageUrl: '' }
    ];
    meals = meals;
  }

  function removeItem(mealIndex, itemIndex) {
    meals[mealIndex].items.splice(itemIndex, 1);
    meals = meals;
  }
</script>

<h1 class="headline">Mahlzeit bearbeiten</h1>

<form method="POST" class="form-container">
  <div class="form-row">
    <label>Name der Person:
      <input type="text" name="personName" bind:value={personName} required />
    </label>
    <label>Datum:
      <input type="date" name="date" bind:value={date} required />
    </label>
  </div>

  {#each meals as meal, mealIndex}
    <fieldset class="meal-fieldset">
      <legend>Mahlzeit {mealIndex + 1}</legend>
      <div class="meal-type-row">
        <label>Mahlzeitentyp:
          <select name={`meals[${mealIndex}][mealType]`} bind:value={meal.mealType} required>
            <option value="">Bitte wählen</option>
            <option value="Frühstück">Frühstück</option>
            <option value="Mittagessen">Mittagessen</option>
            <option value="Abendessen">Abendessen</option>
            <option value="Snack">Snack</option>
          </select>
        </label>
        <button type="button" class="remove-btn" on:click={() => removeMeal(mealIndex)} title="Mahlzeit entfernen">🗑</button>
      </div>

      <div class="items-container">
        <h4>Lebensmittel</h4>
        {#each meal.items as item, itemIndex}
          <div class="item-row">
            <input type="text" name={`meals[${mealIndex}][items][${itemIndex}][name]`} bind:value={item.name} placeholder="Name" required />
            <input type="number" name={`meals[${mealIndex}][items][${itemIndex}][calories]`} bind:value={item.calories} placeholder="Kalorien" required min="0" />
            <input type="url" name={`meals[${mealIndex}][items][${itemIndex}][imageUrl]`} bind:value={item.imageUrl} placeholder="Bild-URL (optional)" />
            {#if item.imageUrl}
              <img src={item.imageUrl} alt="Bildvorschau" class="preview-img" />
            {/if}
            <button type="button" class="remove-btn" on:click={() => removeItem(mealIndex, itemIndex)} title="Lebensmittel entfernen">🗑</button>
          </div>
        {/each}
        <button type="button" class="add-btn" on:click={() => addItem(mealIndex)}>+ Lebensmittel hinzufügen</button>
      </div>
    </fieldset>
  {/each}

  <button type="button" class="add-btn" on:click={addMeal}>+ Weitere Mahlzeit</button>
  <button type="submit" class="save-btn">Speichern</button>
</form>

<style>
:global(body) {
  background: #e5f7ef;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.headline {
  text-align: center;
  margin-bottom: 1.6rem;
  color: #168b5b;
  letter-spacing: 1px;
}

.form-container {
  max-width: 880px;
  margin: 40px auto;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 5px 24px rgba(44,163,106,0.09);
  padding: 48px 42px 40px 42px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.form-row label {
  flex: 1;
  font-weight: 500;
  color: #16b76a;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.05rem;
}

.meal-fieldset {
  border: 1.5px solid #23bf7c33;
  border-radius: 14px;
  padding: 24px 18px;
  margin-bottom: 12px;
  background: #f9fefc;
  box-shadow: 0 2px 8px rgba(44,163,106,0.05);
}

.meal-fieldset legend {
  font-weight: bold;
  color: #16b76a;
  padding: 0 8px;
  font-size: 1.1rem;
}

.meal-type-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.7rem;
}

.meal-type-row label {
  flex: 1;
}

.items-container {
  margin-top: 0.5rem;
}

.items-container h4 {
  color: #2bb686;
  font-size: 1.03rem;
  margin-bottom: 0.35rem;
}

.item-row {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-bottom: 0.3rem;
  flex-wrap: wrap;
}

.item-row input[type="text"],
.item-row input[type="number"],
.item-row input[type="url"] {
  padding: 0.6rem 1rem;
  border-radius: 16px;
  border: 1.3px solid #44b97a;
  background: #e7f8ef;
  color: #222;
  font-size: 1rem;
  transition: border-color 0.13s, background 0.13s;
}

.item-row input[type="text"],
.item-row input[type="number"] {
  width: 150px;
}

.item-row input[type="url"] {
  width: 100%;
  max-width: 400px;
}

.item-row input:focus {
  border-color: #2bb686;
  background: #f4fdf8;
  outline: none;
}

.preview-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
}

.add-btn,
.save-btn {
  background: #23bf7c;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 21px;
  padding: 10px 25px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,163,106,0.08);
  transition: background 0.18s, color 0.18s;
  letter-spacing: 0.5px;
  display: inline-block;
}

.add-btn {
  background: #e6faf4;
  color: #16b76a;
}

.add-btn:hover {
  background: #c5efdf;
  color: #168b5b;
}

.save-btn:hover {
  background: #168b5b;
}

.remove-btn {
  background: transparent;
  color: #f14545;
  border: none;
  font-size: 1.25rem;
  padding: 3px 9px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.12s;
}

.remove-btn:hover {
  background: #fae2e2;
}

input[type="text"], input[type="date"], select {
  padding: 0.53rem 0.9rem;
  border-radius: 11px;
  border: 1.3px solid #44b97a;
  background: #e7f8ef;
  color: #222;
  font-size: 1rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
  transition: border-color 0.13s, background 0.13s;
}

input:focus, select:focus {
  border-color: #2bb686;
  outline: none;
  background: #f4fdf8;
}
</style>
