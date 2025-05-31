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
		meals = [
			...meals,
			{ mealType: "", items: [{ name: "", calories: "", imageUrl: "" }] }
		];
	}

	function addItem(mealIndex) {
		meals[mealIndex].items = [
			...meals[mealIndex].items,
			{ name: "", calories: "", imageUrl: "" }
		];
		meals = [...meals];
	}

	function removeItem(mealIndex, itemIndex) {
		meals[mealIndex].items.splice(itemIndex, 1);
		meals = [...meals];
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
			window.location.href = "/mahlzeiten/alle";
		} else {
			alert("Fehler beim Speichern");
		}
	}
	let menuOpen = false;
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>


<nav class="navbar">
	<div class="logo">MealMate</div>
	<button class="menu-toggle" on:click={toggleMenu} aria-label="Menü öffnen">
		☰
	</button>
	<div class={`nav-links ${menuOpen ? 'open' : ''}`}>
		<a href="/" class="nav-link">Startseite</a>
		<a href="/mahlzeiten/alle" class="nav-link">Alle Mahlzeiten</a>
		<a href="/mahlzeiten/personen" class="nav-link">Mates</a>
	</div>
</nav>

<div class="form-container">
	<h1 class="form-title">Neue Mahlzeit erfassen</h1>

	<form on:submit={handleSubmit}>
		<label>
			Person:
			<input type="text" bind:value={personName} required />
		</label>

		<label>
			Datum:
			<input type="date" bind:value={date} required />
		</label>

		{#each meals as meal, i}
			<div class="meal-block">
				<label>
					Mahlzeitentyp:
					<select bind:value={meal.mealType} required>
						<option value="" disabled selected>Bitte wählen</option>
						<option value="Frühstück">Frühstück</option>
						<option value="Mittagessen">Mittagessen</option>
						<option value="Abendessen">Abendessen</option>
						<option value="Snack">Snack</option>
					</select>
				</label>

				<h4>Lebensmittel</h4>
				{#each meal.items as item, j}
					<div class="item-block">
						<input placeholder="Name" bind:value={item.name} required />
						<input type="number" placeholder="Kalorien" bind:value={item.calories} required />
						<input type="url" placeholder="Bild-URL" bind:value={item.imageUrl} />
						<button type="button" class="delete-button" on:click={() => removeItem(i, j)} aria-label="Entfernen">✖</button>
					</div>
				{/each}

				<button type="button" class="add-btn" on:click={() => addItem(i)}>
					+ Lebensmittel hinzufügen
				</button>
			</div>
		{/each}

		<button type="button" class="add-btn" on:click={addMeal}>
			+ Weitere Mahlzeit
		</button>

		<button type="submit" class="submit-btn">Speichern</button>
	</form>
</div>

<style>
.form-container {
	max-width: 620px;
	margin: 2.5rem auto;
	background: #f7fbf9;
	border-radius: 24px;
	box-shadow: 0 8px 36px rgba(43, 182, 134, 0.09);
	padding: 2.5rem 2rem;
	border: 1.5px solid #e8f5e5;
	font-family: "Poppins", sans-serif;
}

.form-title {
	text-align: center;
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: #243b53;
}

form {
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}

label {
	font-weight: 600;
	color: #16b76a;
	display: flex;
	flex-direction: column;
	font-size: 1.05rem;
}

input,
select {
	padding: 0.7rem 1rem;
	border-radius: 12px;
	border: 1.5px solid #44b97a;
	background: #e7f8ef;
	color: #222;
	font-size: 1.06rem;
	box-sizing: border-box;
	transition: border-color 0.15s, background 0.15s;
}

input:focus,
select:focus {
	border-color: #2bb686;
	outline: none;
	background: #f4fdf8;
}

.meal-block {
	background: #f2f2f2;
	border-radius: 14px;
	padding: 1.2rem 1rem;
	box-shadow: 0 2px 10px rgba(100, 100, 100, 0.04);
	border: 1.5px solid #ddd;
	margin-top: 1rem;
}

.meal-block h4 {
	color: #222;
	font-size: 1.07rem;
	margin: 1rem 0 0.5rem;
	font-weight: 600;
}

.item-block {
	display: flex;
	gap: 0.7rem;
	align-items: center;
	margin-bottom: 0.5rem;
	flex-wrap: wrap;
}

.item-block input {
	flex: 1;
}

.add-btn {
	background: #fff;
	color: #111;
	font-weight: 500;
	border: 2px solid #23bf7c;
	border-radius: 999px;
	padding: 0.57rem 1.4rem;
	font-size: 1rem;
	cursor: pointer;
	transition: background 0.1s, border-color 0.1s;
	width: fit-content;
}

.add-btn:hover {
	background: #e6faf4;
	border-color: #168b5b;
}

.delete-button {
	background: transparent;
	border: none;
	color: #d32f2f;
	font-size: 1.3rem;
	cursor: pointer;
	padding: 0.3rem 0.6rem;
	border-radius: 6px;
	transition: background 0.12s;
}

.delete-button:hover {
	background: #fae0e0;
}.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background: #e6faf4;
	border-radius: 14px;
	margin-bottom: 2rem;
}

.logo {
	font-size: 1.4rem;
	font-weight: bold;
	color: #23bf7c;
}

.menu-toggle {
	display: none;
	background: none;
	border: none;
	font-size: 1.8rem;
	cursor: pointer;
	color: #23bf7c;
}

.nav-links {
	display: flex;
	gap: 1rem;
}

.nav-link {
	background: #23bf7c;
	color: white;
	font-weight: 600;
	text-decoration: none;
	padding: 0.5rem 1.3rem;
	border-radius: 999px;
	box-shadow: 0 2px 6px rgba(43, 182, 134, 0.15);
	transition: background 0.2s, transform 0.2s;
}

.nav-link:hover {
	background: #168b5b;
	transform: translateY(-1px);
}

/* 🌐 Mobile */
@media (max-width: 768px) {
	.menu-toggle {
		display: block;
	}

	.nav-links {
		flex-direction: column;
		position: absolute;
		top: 70px;
		left: 0;
		width: 100%;
		background: #f6fefb;
		padding: 1rem 2rem;
		display: none;
		z-index: 100;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.nav-links.open {
		display: flex;
	}
}


.submit-btn {
	background: linear-gradient(90deg, #2bb686, #26735a 85%);
	color: #fff;
	font-weight: 700;
	border: none;
	border-radius: 999px;
	padding: 0.95rem;
	font-size: 1.1rem;
	cursor: pointer;
	margin-top: 1.5rem;
	transition: background 0.2s, transform 0.1s;
	letter-spacing: 0.8px;
}

.submit-btn:hover {
	background: linear-gradient(90deg, #24996e, #2bb686 85%);
	transform: translateY(-1px) scale(1.02);
}

@media (max-width: 700px) {
	.item-block {
		flex-direction: column;
		align-items: stretch;
	}
}
</style>
