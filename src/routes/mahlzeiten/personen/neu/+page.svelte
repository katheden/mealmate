<script>
  let vorname = '';
  let nachname = '';
  let email = '';
</script>

<style>
  .form-container {
    max-width: 430px;
    margin: 3rem auto 2rem auto;
    padding: 2.5rem 2rem 2rem 2rem;
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(43, 182, 134, 0.11);
    text-align: center;
  }

  h1 {
    color: #243b53;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  label {
    color: #348867;
    font-weight: 500;
    margin-bottom: 0.2rem;
    text-align: left;
    margin-left: 5px;
    font-size: 1.05rem;
  }

  input[type="text"],
  input[type="email"] {
    background: #f6faf7;
    border: 1.5px solid #b8efd4;
    border-radius: 13px;
    padding: 0.7rem 1.1rem;
    font-size: 1.08rem;
    margin-bottom: 0.1rem;
    transition: border-color 0.14s, background 0.14s;
    font-family: inherit;
  }

  input[type="text"]:focus,
  input[type="email"]:focus {
    border-color: #48b883;
    outline: none;
    background: #e7f8ef;
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;
    margin-top: 0.7rem;
  }

  button[type="submit"] {
    background: linear-gradient(90deg, #48b883 0%, #319b6a 100%);
    color: #fff;
    font-weight: 700;
    font-size: 1.09rem;
    border: none;
    border-radius: 22px;
    padding: 0.7rem 2.2rem;
    box-shadow: 0 3px 14px rgba(80, 180, 120, 0.10);
    cursor: pointer;
    transition: background 0.13s, transform 0.09s;
  }

  button[type="submit"]:hover {
    background: linear-gradient(90deg, #319b6a 0%, #48b883 100%);
    transform: scale(1.04);
  }

  .btn-back {
    background: #e2f3f0;
    color: #31706c;
    font-weight: 500;
    font-size: 1.05rem;
    border: none;
    border-radius: 18px;
    padding: 0.62rem 1.5rem;
    cursor: pointer;
    transition: background 0.13s, color 0.13s;
    text-decoration: none;
    display: inline-block;
  }

  .btn-back:hover {
    background: #c7e8e3;
    color: #173d3b;
  }
</style>

<div class="form-container">
  <h1>Neue Person erfassen</h1>
  <form method="POST">
    <label for="vorname">Vorname</label>
    <input id="vorname" name="vorname" bind:value={vorname} required />

    <label for="nachname">Nachname</label>
    <input id="nachname" name="nachname" bind:value={nachname} required />

    <label for="email">E-Mail</label>
    <input id="email" name="email" type="email" bind:value={email} required />

    <div class="button-row">
      <a href="/mahlzeiten/personen" class="btn-back">Zurück</a>
      <button type="submit">Speichern</button>
    </div>
  </form>
</div>