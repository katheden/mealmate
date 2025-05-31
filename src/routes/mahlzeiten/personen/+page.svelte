<script>
  export let data;
  let navOpen = false;
</script>

<nav class="navbar">
  <div class="nav-left">
    <strong class="logo">MealMate</strong>
  </div>
  <button class="menu-toggle" on:click={() => navOpen = !navOpen}>☰</button>
  <div class="nav-right {navOpen ? 'show' : ''}">
    <a href="/" class="nav-btn">Startseite</a>
    <a href="/mahlzeiten/neu" class="nav-btn">Neue Mahlzeit</a>
    <a href="/mahlzeiten/alle" class="nav-btn">Alle Mahlzeiten</a>
  </div>
</nav>

<div class="personen-container">
  <h1>Alle Personen</h1>
  <div class="subtitle">Deine MealMate-Mates</div>
  <ul>
    {#each data.personen as person}
      <li class="person-card">
        <a href={`/mahlzeiten/personen/${person._id}`}>
          <span class="person-name">{person.vorname} {person.nachname}</span>
        </a>
        <span class="person-email">{person.email}</span>
      </li>
    {/each}
  </ul>
  <a href="/mahlzeiten/personen/neu">
    <button>+ Neue Person hinzufügen</button>
  </a>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #e5f7ef;
  }

  .navbar {
    background: #e6faf4;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 12px rgba(43, 182, 134, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #b8efd4;
  }

  .logo {
    color: #23bf7c;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.7rem;
    color: #23bf7c;
    cursor: pointer;
  }

  .nav-right {
    display: flex;
    gap: 1rem;
  }

  .nav-btn {
    background: #23bf7c;
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 0.55rem 1.3rem;
    border-radius: 999px;
    box-shadow: 0 2px 6px rgba(43, 182, 134, 0.15);
    transition: background 0.2s, transform 0.2s;
  }

  .nav-btn:hover {
    background: #168b5b;
    transform: translateY(-1px);
  }

  @media (max-width: 700px) {
    .menu-toggle {
      display: block;
    }

    .nav-right {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 64px;
      right: 1.5rem;
      background: #f6fefb;
      padding: 1rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(43,182,134,0.1);
    }

    .nav-right.show {
      display: flex;
    }
  }

  .personen-container {
    max-width: 600px;
    margin: 3.5rem auto 2rem auto;
    padding: 3rem 2.4rem 2.5rem 2.4rem;
    background: #fff;
    border-radius: 26px;
    box-shadow: 0 6px 32px rgba(40, 60, 90, 0.08);
    text-align: center;
  }

  h1 {
    color: #168b5b;
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
    letter-spacing: -0.5px;
  }

  .subtitle {
    color: #6fa990;
    font-size: 1.08rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li.person-card {
    background: #f6faf7;
    border-radius: 16px;
    margin-bottom: 1.2rem;
    padding: 1.3rem 1.2rem;
    box-shadow: 0 2px 12px rgba(120, 144, 156, 0.08);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1.5px solid #e0f1e6;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  li.person-card:hover {
    transform: scale(1.015);
    box-shadow: 0 4px 16px rgba(120, 144, 156, 0.12);
  }

  .person-card a {
    text-decoration: none;
  }

  .person-name {
    font-size: 1.2rem;
    color: #2e4f37;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .person-email {
    font-size: 0.96rem;
    color: #5ba67b;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #e7f8ef;
    border-radius: 8px;
    padding: 0.3rem 0.6rem;
  }

  button {
    background-color: #23bf7c;
    color: white;
    font-size: 1.05rem;
    font-weight: 600;
    border: none;
    padding: 0.65rem 1.6rem;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.15s;
    margin-top: 2rem;
  }

  button:hover {
    background-color: #168b5b;
  }
</style>
