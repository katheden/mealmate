<script>
  export let data;
  console.log("GELADENE DATEN:", data);
</script>

<nav class="navbar">
  <a href="/">Startseite</a>
  <a href="/mahlzeiten/neu"> Neue Mahlzeit</a>
</nav>

<h1>Alle Mahlzeiten</h1>
{#if data.meals?.length > 0}
  <div class="meals-container">
    {#each data.meals as personMeal}
      <div class="meal-card">
        <div class="meal-header">
          <span class="person-name">{personMeal.personName}</span>
          <span class="meal-date"
            >{new Date(personMeal.date).toLocaleDateString()}</span
          >
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
  <p>Keine Mahlzeiten gefunden oder Verbindung zur Datenbank fehlgeschlagen.</p>
{/if}

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
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    color: #222;
    letter-spacing: -2px;
    text-align: center;
  }
  .highlight {
    color: #2bb686;
  }
  .subtitle {
    font-size: 1.15rem;
    color: #656565;
    margin-bottom: 1.8rem;
    text-align: center;
  }

  .meals-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
    margin-top: 2.5rem;
  }

  .meal-card {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 16px rgba(43, 182, 134, 0.08);
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    width: 350px;
    transition: box-shadow 0.2s;
    border: 1.5px solid #e8f5e5;
  }
  .meal-card:hover {
    box-shadow: 0 8px 24px rgba(43, 182, 134, 0.2);
    border-color: #b8efd4;
  }

  .meal-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    justify-content: space-between;
  }
  .person-name {
    font-size: 1.45rem;
    font-weight: 600;
    color: #2bb686;
    letter-spacing: -1px;
  }
  .meal-date {
    color: #888;
    font-size: 1rem;
    background: #e5f7ef;
    border-radius: 8px;
    padding: 0.2rem 0.7rem;
  }

  .meal-section {
    margin-bottom: 1.2rem;
  }
  .meal-type {
    font-size: 1.11rem;
    font-weight: 500;
    color: #26735a;
    margin: 0.7rem 0 0.2rem 0;
    letter-spacing: 0.5px;
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
    padding: 0.45rem 0;
    border-bottom: 1px solid #e8f5e5;
  }
  .meal-item:last-child {
    border-bottom: none;
  }
  .meal-img {
    border-radius: 9px;
    width: 44px;
    height: 44px;
    object-fit: cover;
    background: #e5f7ef;
    border: 1.5px solid #b8efd4;
  }
  .meal-item-details {
    flex: 1;
  }
  .meal-item-name {
    font-weight: 500;
    color: #222;
  }
  .meal-item-cal {
    color: #2bb686;
    font-size: 0.95rem;
    margin-left: 0.7rem;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    .meals-container {
      flex-direction: column;
      align-items: center;
    }
    .meal-card {
      width: 98%;
    }
  }
</style>
