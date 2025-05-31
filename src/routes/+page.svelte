<script>
  // Optional: Platz für Logik
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <section class="hero-card">
    <h1>
      Willkommen bei <span class="highlight">MealMate</span>
    </h1>
    <p class="subtitle">Dein persönlicher Ernährungs-Tracker</p>
    <nav>
      <a href="/mahlzeiten/neu" class="nav-btn">Neue Mahlzeit erfassen</a>
      <a href="/mahlzeiten/alle" class="nav-btn">Alle Mahlzeiten</a>
      <a href="/mahlzeiten/personen" class="nav-btn">Mates</a>
    </nav>
    <div class="image-wrap">
      <img src="/image.png" alt="MealMate Illustration" width="500" />
    </div>
  </section>
</main>

<style>
:global(body) {
  background: linear-gradient(135deg, #e6ffe6 0%, #c0f5d7 100%);
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
  min-height: 100vh;
}

/* Zentrierter Hero-Card Look */
.hero-card {
  background: #fff;
  max-width: 520px;
  margin: 2.5rem auto 0 auto;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(44, 86, 67, 0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: card-fade-in 0.7s cubic-bezier(.39,.58,.57,1.27);
}

@keyframes card-fade-in {
  from { opacity: 0; transform: translateY(32px);}
  to   { opacity: 1; transform: translateY(0);}
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-align: center;
  letter-spacing: 0.02em;
}

.highlight {
  color: #2a7f62;
}

.subtitle {
  font-size: 1.15rem;
  color: #3c4d3c;
  margin-bottom: 1.5rem;
  text-align: center;
  opacity: 0.85;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  margin-bottom: 1.2rem;
}

.nav-btn {
  display: inline-block;
  padding: 0.85rem 2.2rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #2a7f62 80%, #49c6ae 100%);
  color: #fff;
  text-decoration: none;
  font-size: 1.14rem;
  font-weight: 600;
  box-shadow: 0 3px 18px rgba(42, 127, 98, 0.12);
  transition: 
    background 0.18s, 
    transform 0.14s,
    box-shadow 0.2s;
  border: none;
  outline: none;
  letter-spacing: 0.03em;
}

.nav-btn:hover,
.nav-btn:focus {
  background: linear-gradient(90deg, #257155 60%, #37b99a 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 6px 24px rgba(42, 127, 98, 0.16);
}

.image-wrap {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(42, 127, 98, 0.10);
  max-width: 100%;
  height: auto;
  background: #fdf6e8;
  border: 3px solid #e7faee;
  transition: box-shadow 0.2s;
}

img:hover {
  box-shadow: 0 8px 36px rgba(42,127,98,0.16);
}

/* Responsives Design */
@media (max-width: 600px) {
  .hero-card {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
    max-width: 98vw;
  }
  h1 {
    font-size: 1.45rem;
  }
  .nav-btn {
    font-size: 1.01rem;
    padding: 0.7rem 1.2rem;
  }
}

</style>