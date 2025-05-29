<script>
    // Kein zusätzlicher JS-Code nötig für das Layout
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<main>
    <section ctess="hero-card">
        <h1>Willkommen bei <span class="highlight">MealMate</span></h1>
        <p class="subtitle">Dein persönlicher Ernährungs-Tracker</p>

        <nav>
            <a href="/mahlzeiten/neu" class="nav-btn">Neue Mahlzeit erfassen</a>
            <a href="/mahlzeiten/alle" class="nav-btn">Alle Mahlzeiten</a>

        </nav>

        <div class="image-wrap">
            <img src="/image.png" alt="MealMate Bild" width="500" />
        </div>
    </section>
</main>

<style>
    :global(body) {
        background: linear-gradient(120deg, #fdf6e8 0%, #e7ffe6 100%);
        font-family: "Poppins", sans-serif;
        margin: 0;
        min-height: 100vh;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
    }

    .hero-card {
        background: #fff;
        box-shadow:
            0 4px 24px rgba(42, 127, 98, 0.1),
            0 1.5px 6px rgba(42, 127, 98, 0.08);
        border-radius: 24px;
        max-width: 600px;
        width: 100%;
        padding: 2.5rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    h1 {
        font-size: 2.6rem;
        font-weight: 700;
        margin: 0 0 0.3rem 0;
        text-align: center;
    }
    .highlight {
        color: #2a7f62;
    }

    .subtitle {
        font-size: 1.15rem;
        color: #444;
        margin-bottom: 1.2rem;
        text-align: center;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
        align-items: center;
    }
    .nav-btn {
        display: inline-block;
        padding: 0.7rem 1.4rem;
        border-radius: 999px;
        background: linear-gradient(90deg, #2a7f62 70%, #49c6ae 100%);
        color: #fff;
        text-decoration: none;
        font-size: 1.08rem;
        font-weight: 600;
        box-shadow: 0 2px 6px rgba(42, 127, 98, 0.12);
        transition:
            background 0.2s,
            transform 0.15s;
        border: none;
        outline: none;
    }
    .nav-btn:hover,
    .nav-btn:focus {
        background: linear-gradient(90deg, #257155 60%, #37b99a 100%);
        transform: translateY(-2px) scale(1.03);
    }

    .image-wrap {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    img {
        border-radius: 16px;
        box-shadow: 0 4px 16px rgba(42, 127, 98, 0.09);
        max-width: 100%;
        height: auto;
        background: #fdf6e8;
    }

    @media (max-width: 700px) {
        .hero-card {
            padding: 1.3rem 0.5rem;
            max-width: 96vw;
        }
        h1 {
            font-size: 2rem;
        }
        .nav-btn {
            font-size: 1rem;
            padding: 0.65rem 1rem;
        }
        img {
            width: 100%;
        }
    }
</style>
