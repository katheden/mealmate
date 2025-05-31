<script>
  export let data;

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="navbar">
  <div class="logo">MealMate</div>
  <button class="menu-toggle" on:click={toggleMenu} aria-label="Menü öffnen">☰</button>
  <div class={`nav-links ${menuOpen ? 'open' : ''}`}>
    <a href="/" class="nav-link">Startseite</a>
    <a href="/mahlzeiten/neu" class="nav-link">Neue Mahlzeit</a>
    <a href="/mahlzeiten/personen" class="nav-link">Mates</a>
  </div>
</nav>

<div class="page-wrapper">
  <h1 class="headline">Alle Mahlzeiten</h1>

  {#if data.meals?.length > 0}
    <div class="meals-container">
      {#each data.meals as personMeal}
        <div class="meal-card">
          <div class="meal-header">
            <a href={`/mahlzeiten/${personMeal._id}`} class="person-name">{personMeal.personName}</a>
            <span class="meal-date">{new Date(personMeal.date).toLocaleDateString()}</span>
          </div>

          {#each personMeal.meals as meal}
            <div class="meal-section">
              <div class="meal-type">{meal.mealType}</div>
              <ul class="meal-items">
                {#each meal.items as item}
                  <li class="meal-item">
                    <img class="meal-img" src={item.imageUrl} alt={item.name} />
                    <div class="meal-item-details">
                      <span class="meal-item-name">{item.name}</span>
                      <span class="meal-item-cal">– {item.calories} kcal</span>
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {:else}
    <p class="no-data-text"></p>
  {/if}
</div>

<style>
* {
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #f7fbf9;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #e6faf4;
  border-radius: 14px;
  margin: 2rem auto 1.5rem;
  max-width: 1100px;
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

/* Mobile Menü */
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .nav-links.open {
    display: flex;
  }
}

/* Hauptbereich */
.page-wrapper {
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  padding: 2rem;
  text-align: center;
  background: #f7fbf9;
  border-radius: 24px;
  border: 1.5px solid #e8f5e5;
  box-shadow: 0 8px 36px rgba(43, 182, 134, 0.09);
}

.headline {
  font-size: 2.4rem;
  font-weight: 700;
  color: #2bb686;
  margin-bottom: 2rem;
}

.meals-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* Kartenstil */
.meal-card {
  background: #ffffff;
  border-radius: 22px;
  box-shadow: 0 6px 20px rgba(43, 182, 134, 0.08);
  padding: 1.8rem;
  width: 370px;
  border: 1.5px solid #e8f5e5;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.meal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(43, 182, 134, 0.18);
  border-color: #b8efd4;
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.person-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #23bf7c;
  text-decoration: none;
}

.meal-date {
  background: #e7f8ef;
  color: #26735a;
  font-size: 0.95rem;
  padding: 0.3rem 0.7rem;
  border-radius: 10px;
}

.meal-section {
  margin-top: 1.2rem;
}

.meal-type {
  font-size: 1.1rem;
  font-weight: 600;
  color: #26735a;
  margin-bottom: 0.5rem;
}

.meal-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.meal-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eaf9f0;
}

.meal-item:last-child {
  border-bottom: none;
}

/* Bilder größer */
.meal-img {
  width: 100px;
  height: 100px;
  border-radius: 14px;
  object-fit: cover;
  background: #e7f8ef;
  border: 1.5px solid #44b97a;
}

.meal-item-details {
  flex: 1;
  text-align: left;
}

.meal-item-name {
  font-weight: 600;
  color: #222;
}

.meal-item-cal {
  color: #2bb686;
  font-size: 0.95rem;
}

.no-data-text {
  font-size: 1.2rem;
  color: #999;
  margin-top: 2rem;
}
</style>
