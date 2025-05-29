<script>
	let personName = "";
	let date = "";
	let meals = [
		{
			mealType: "",
			items: [{ name: "", calories: "", imageUrl: "" }],
		},
	];

	function addMeal() {
		meals.push({
			mealType: "",
			items: [{ name: "", calories: "", imageUrl: "" }],
		});
	}

	function addItem(mealIndex) {
		meals[mealIndex].items.push({ name: "", calories: "", imageUrl: "" });
	}
function removeItem(mealIndex, itemIndex) {
	meals[mealIndex].items.splice(itemIndex, 1);
	meals = [...meals]; // ⬅️ Wichtig, damit Svelte reaktiv neu rendert!
}

	
	async function handleSubmit(e) {
		e.preventDefault();
		const res = await fetch("/mahlzeiten/neu", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ personName, date, meals }),
		});
		if (res.ok) {
			alert("Gespeichert!");
		} else {
			alert("Fehler beim Speichern");
		}
	}
</script>

<nav class="navbar">
	<a href="/">Startseite</a>
	<a href="/mahlzeiten/alle">Alle Mahlzeiten</a>
</nav>

<h1>Neue Mahlzeit erfassen</h1>
<form on:submit|preventDefault={handleSubmit}>
	<label>Person:</label>
	<input bind:value={personName} required />

	<label>Datum:</label>
	<input type="date" bind:value={date} required />

	{#each meals as meal, i}
		<div class="meal-block">
			<label>Mahlzeitentyp:</label>
			<select bind:value={meal.mealType} required>
				<option value="" disabled selected>Bitte wählen</option>
				<option value="Frühstück">Frühstück</option>
				<option value="Mittagessen">Mittagessen</option>
				<option value="Abendessen">Abendessen</option>
				<option value="Snack">Snack</option>
			</select>

			<h4>Lebensmittel</h4>
			{#each meal.items as item, j}
				<div class="item-block">
					<input placeholder="Name" bind:value={item.name} required />
					<input
						type="number"
						placeholder="Kalorien"
						bind:value={item.calories}
						required
					/>
					<input
						type="url"
						placeholder="Bild-URL"
						bind:value={item.imageUrl}
					/>
					<button
						type="button"
						class="delete-button"
						on:click={() => removeItem(i, j)}
						aria-label="Entfernen"
					>
						✖
					</button>
				</div>
			{/each}

			<button type="button" on:click={() => addItem(i)}
				>Lebensmittel hinzufügen</button
			>
		</div>
	{/each}

	<button type="submit">Speichern</button>
</form>

<style>
	:global(body) {
		background: #f4faef;
		font-family: "Poppins", "Segoe UI", Arial, sans-serif;
	}

	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		padding: 1.1rem 0 1.1rem 0;
		background: linear-gradient(90deg, #e5f7ef 0%, #f4faef 100%);
		border-radius: 0 0 22px 22px;
		box-shadow: 0 3px 18px rgba(43, 182, 134, 0.07);
		margin-bottom: 1.3rem;
	}
	.navbar a {
		color: #26735a;
		font-weight: 600;
		text-decoration: none;
		font-size: 1.12rem;
		padding: 0.5rem 1.3rem;
		border-radius: 999px;
		transition:
			background 0.13s,
			color 0.13s,
			box-shadow 0.13s;
		letter-spacing: 0.01em;
	}
	.navbar a:hover,
	.navbar a:focus {
		background: #2bb686;
		color: #fff;
		box-shadow: 0 2px 8px rgba(43, 182, 134, 0.14);
		outline: none;
	}

	h1 {
		text-align: center;
		font-size: 2.2rem;
		font-weight: 700;
		margin: 2.5rem 0 1.3rem 0;
		letter-spacing: -2px;
		color: #222;
	}
	.highlight {
		color: #2bb686;
	}
	form {
		background: #fff;
		border-radius: 20px;
		box-shadow: 0 4px 16px rgba(43, 182, 134, 0.08);
		max-width: 540px;
		margin: 2.5rem auto 0 auto;
		padding: 2.5rem 2rem 2rem 2rem;
		border: 1.5px solid #e8f5e5;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	form label {
		font-weight: 500;
		color: #26735a;
		margin-bottom: 0.25rem;
		display: block;
		font-size: 1.04rem;
		letter-spacing: 0.2px;
	}

	.input-main,
	.input-date,
	.input-mealtype,
	.input-item,
	.input-calories,
	.input-url {
		width: 100%;
		padding: 0.75rem 1.1rem;
		border-radius: 10px;
		border: 1.5px solid #b8efd4;
		font-size: 1.06rem;
		margin-bottom: 0.65rem;
		background: #f7fbf9;
		transition: border 0.15s;
		font-family: inherit;
	}
	.input-main:focus,
	.input-date:focus,
	.input-mealtype:focus,
	.input-item:focus,
	.input-calories:focus,
	.input-url:focus {
		border-color: #2bb686;
		outline: none;
		background: #e8fdf4;
	}

	select.input-mealtype {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		padding-right: 2.1rem;
		background:
			url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%232bb686' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
				no-repeat right 1rem center/1.2em auto,
			#f7fbf9;
	}

	.meal-block {
		background: #f4faef;
		border-radius: 14px;
		padding: 1.3rem 1rem 1rem 1rem;
		margin-bottom: 0.8rem;
		box-shadow: 0 1px 6px rgba(43, 182, 134, 0.05);
		border: 1.2px solid #e8f5e5;
	}

	.meal-block label {
		margin-top: 0.3rem;
	}
	.meal-block h4 {
		color: #2bb686;
		font-size: 1.05rem;
		margin: 0.8rem 0 0.3rem 0;
		letter-spacing: 0.5px;
		font-weight: 600;
	}
	.item-block {
		display: flex;
		gap: 0.7rem;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.item-block input {
		margin-bottom: 0;
	}

	button[type="button"] {
		background: #2bb686;
		color: #fff;
		font-weight: 600;
		border: none;
		outline: none;
		border-radius: 999px;
		padding: 0.5rem 1.3rem;
		font-size: 1rem;
		margin-top: 0.4rem;
		margin-bottom: 0.5rem;
		box-shadow: 0 2px 8px rgba(43, 182, 134, 0.08);
		cursor: pointer;
		transition:
			background 0.1s,
			transform 0.1s;
		font-family: inherit;
	}

	button[type="button"]:hover {
		background: #24996e;
		transform: translateY(-1px) scale(1.025);
	}

	button[type="submit"] {
		background: linear-gradient(90deg, #2bb686, #26735a 80%);
		color: #fff;
		font-weight: 700;
		border: none;
		outline: none;
		border-radius: 999px;
		padding: 0.7rem 0;
		font-size: 1.1rem;
		box-shadow: 0 3px 12px rgba(43, 182, 134, 0.1);
		margin-top: 1rem;
		cursor: pointer;
		letter-spacing: 1px;
		transition:
			background 0.1s,
			transform 0.1s;
		font-family: inherit;
	}
	button[type="submit"]:hover {
		background: linear-gradient(90deg, #24996e, #2bb686 80%);
		transform: translat
		eY(-1px) scale(1.02);
	}
	@media (max-width: 600px) {
		.navbar {
			flex-direction: column;
			gap: 0.6rem;
			padding: 1.1rem 0.2rem;
		}
		form {
			padding: 1.1rem 0.5rem;
			max-width: 98vw;
		}
	}

	.delete-button {
	background: transparent;
	border: none;
	color: #d9534f;
	font-size: 1.3rem;
	cursor: pointer;
	margin-left: 0.3rem;
	line-height: 1;
	padding: 0;
}
.delete-button:hover {
	color: #b52b27;
}

</style>
