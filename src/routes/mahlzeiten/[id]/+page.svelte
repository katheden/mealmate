<script>
  export let data;

  async function deleteMeal() {
    if (confirm("Möchtest du diese Mahlzeit wirklich löschen?")) {
      const res = await fetch(`/mahlzeiten/${data.meal._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Mahlzeit gelöscht");
        window.location.href = "/mahlzeiten/alle";
      } else {
        alert("Fehler beim Löschen");
      }
    }
  }

  function editMeal() {
    window.location.href = `/mahlzeiten/${data.meal._id}/bearbeiten`;
  }
</script>

<a href="/mahlzeiten/alle" class="back-btn">
  <svg width="20" height="20" viewBox="0 0 18 18" style="vertical-align: middle; margin-right:10px;" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 14.25L6.75 9.75L11.25 5.25" stroke="#23bf7c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  Zurück
</a>

<div class="meal-card">
  <div class="name-row">
    <span class="person-name">{data.meal.personName}</span>
    <span class="date-badge">{new Date(data.meal.date).toLocaleDateString()}</span>
  </div>
  {#each data.meal.meals as meal}
    <div class="meal-type">{meal.mealType}</div>
    <ul class="items-list">
      {#each meal.items as item}
        <li class="item-row">
          {#if item.imageUrl}
            <img class="item-img" src={item.imageUrl} alt={item.name} />
          {/if}
          <div class="item-details">
            <span class="item-name">{item.name}</span>
            <span class="item-calories">– {item.calories} kcal</span>
          </div>
        </li>
      {/each}
    </ul>
  {/each}

  <div class="button-row">
    <button class="edit-btn" on:click={editMeal}>Bearbeiten</button>
    <button class="delete-btn" on:click={deleteMeal}>Löschen</button>
  </div>
</div>

<style>
  .meal-card {
    background: #fff;
    border-radius: 22px;
    box-shadow: 0 4px 20px rgba(44, 163, 106, 0.1);
    padding: 36px 40px;
    max-width: 540px;
    margin: 36px auto;
    font-family: "Poppins", Arial, sans-serif;
  }

  .name-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .person-name {
    color: #16b76a;
    font-size: 1.7rem;
    font-weight: 700;
  }

  .date-badge {
    background: #f2f8f4;
    color: #678d7e;
    border-radius: 14px;
    padding: 6px 20px;
    font-size: 1.15rem;
    font-weight: 500;
  }

  .meal-type {
    color: #3eb07d;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 18px 0 10px;
  }

  .items-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .item-row {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f2f8f4;
    min-height: 60px;
  }

  .item-row:last-child {
    border-bottom: none;
  }

  .item-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 12px;
    margin-right: 16px;
    background: #f2f8f4;
    box-shadow: 0 2px 6px rgba(44, 163, 106, 0.07);
  }

  .item-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }

  .item-name {
    font-weight: 600;
    color: #232323;
    font-size: 1.2rem;
  }

  .item-calories {
    color: #23bf7c;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: 12px;
    white-space: nowrap;
  }

  .button-row {
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    margin-top: 28px;
  }

  .edit-btn, .delete-btn {
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 24px;
    padding: 12px 36px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.5px;
  }

  .edit-btn {
    background: #e6faf4;
    color: #16b76a;
    box-shadow: 0 3px 10px rgba(44, 163, 106, 0.1);
  }

  .edit-btn:hover {
    background: #c5efdf;
    color: #168b5b;
  }

  .delete-btn {
    background: #ff5252;
    color: #fff;
    box-shadow: 0 3px 10px rgba(255, 82, 82, 0.1);
  }

  .delete-btn:hover {
    background: #d64444;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 30px;
    background: #e6faf4;
    color: #16b76a;
    border: none;
    border-radius: 22px;
    font-size: 1.15rem;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(44, 163, 106, 0.08);
    transition: background 0.18s, color 0.18s;
    margin: 24px auto 0 auto;
    cursor: pointer;
  }

  .back-btn:hover {
    background: #c5efdf;
    color: #168b5b;
    text-decoration: none;
  }
</style>
