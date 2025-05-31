<script>
    export let data;

    // Werte für das Bearbeiten
    let vorname = data.person.vorname;
    let nachname = data.person.nachname;
    let email = data.person.email;
    let editMode = false;

    function startEdit() {
        editMode = true;
    }

    function cancelEdit() {
        // Ursprungswerte zurücksetzen
        vorname = data.person.vorname;
        nachname = data.person.nachname;
        email = data.person.email;
        editMode = false;
    }
</script>

<div class="person-detail-container">
    <div class="person-avatar">
        {vorname?.charAt(0)}{nachname?.charAt(0)}
    </div>

    {#if !editMode}
        <h1>{vorname} {nachname}</h1>
        <div class="person-email">{email}</div>
        <div class="button-row">
            <button class="btn-edit" type="button" on:click={startEdit}
                >Bearbeiten</button
            >
            <form method="POST" style="display: inline;">
                <button
                    class="btn-delete"
                    name="intent"
                    value="delete"
                    type="submit"
                    on:click={() => confirm("Wirklich löschen?")}
                >
                    Löschen
                </button>
            </form>
        </div>
    {:else}
        <form method="POST" class="edit-form">
            <label for="vorname">Vorname</label>
            <input id="vorname" name="vorname" bind:value={vorname} required />

            <label for="nachname">Nachname</label>
            <input
                id="nachname"
                name="nachname"
                bind:value={nachname}
                required
            />

            <label for="email">E-Mail</label>
            <input
                id="email"
                name="email"
                type="email"
                bind:value={email}
                required
            />

            <div class="button-row">
                <button
                    class="btn-save"
                    name="intent"
                    value="update"
                    type="submit">Speichern</button
                >
                <button class="btn-cancel" type="button" on:click={cancelEdit}
                    >Abbrechen</button
                >
            </div>
        </form>
    {/if}

    <a href="/mahlzeiten/personen" class="back-link">Zurück</a>
</div>

<style>
    .person-detail-container {
        max-width: 420px;
        margin: 3rem auto 2rem auto;
        padding: 2.3rem 2rem 2rem 2rem;
        background: #fff;
        border-radius: 24px;
        box-shadow: 0 6px 32px rgba(40, 60, 90, 0.08);
        text-align: center;
        position: relative;
    }

    .person-avatar {
        width: 82px;
        height: 82px;
        border-radius: 50%;
        background: #e3f7e8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: #5ba67b;
        margin: 0 auto 1.2rem auto;
        box-shadow: 0 2px 10px rgba(90, 180, 120, 0.07);
        font-weight: 600;
    }

    h1 {
        color: #243b53;
        font-weight: 700;
        font-size: 1.7rem;
        margin-bottom: 0.2rem;
        letter-spacing: -1px;
    }

    .person-email {
        color: #5ba67b;
        font-size: 1.07rem;
        background: #e7f8ef;
        display: inline-block;
        padding: 0.33rem 0.75rem;
        border-radius: 7px;
        margin-bottom: 1.7rem;
        font-family: "Fira Mono", monospace;
        letter-spacing: 0.04em;
    }

    .edit-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
        margin-bottom: 1.2rem;
    }

    .edit-form label {
        text-align: left;
        color: #348867;
        font-weight: 500;
        margin-bottom: 0.18rem;
        margin-left: 2px;
        font-size: 1rem;
    }
    .edit-form input[type="text"],
    .edit-form input[type="email"] {
        background: #f6faf7;
        border: 1.5px solid #b8efd4;
        border-radius: 14px;
        padding: 0.8rem 1.2rem;
        font-size: 1.12rem;
        font-family: inherit;
        color: #222;
        transition:
            border-color 0.14s,
            background 0.14s;
        width: 100%; /* ✨ Einheitlich */
        box-sizing: border-box; /* ✨ Innenabstand berücksichtigt */
    }

    .edit-form input:focus {
        border-color: #5ba67b;
        background: #e7f8ef;
        outline: none;
    }

    .button-row {
        display: flex;
        justify-content: center;
        gap: 0.7rem;
        margin: 1.1rem 0 1.2rem 0;
    }

    .btn-edit {
        background: #e2f3f0;
        color: #31706c;
        font-size: 1.05rem;
        border: none;
        border-radius: 16px;
        padding: 0.51rem 1.3rem;
        font-weight: 500;
        cursor: pointer;
        transition:
            background 0.13s,
            color 0.13s;
    }
    .btn-edit:hover {
        background: #c7e8e3;
        color: #173d3b;
    }

    .btn-delete {
        background: linear-gradient(90deg, #ff6767 0%, #ea4d4d 100%);
        color: white;
        font-weight: 600;
        font-size: 1.03rem;
        border: none;
        border-radius: 22px;
        padding: 0.51rem 1.5rem;
        box-shadow: 0 3px 16px rgba(255, 70, 70, 0.09);
        cursor: pointer;
        transition:
            background 0.13s,
            transform 0.09s;
    }

    .btn-delete:hover {
        background: linear-gradient(90deg, #ea4d4d 0%, #ff6767 100%);
        transform: scale(1.04);
    }

    .btn-save {
        background: linear-gradient(90deg, #48b883 0%, #319b6a 100%);
        color: #fff;
        font-weight: 600;
        font-size: 1.03rem;
        border: none;
        border-radius: 22px;
        padding: 0.51rem 1.5rem;
        box-shadow: 0 3px 14px rgba(80, 180, 120, 0.1);
        cursor: pointer;
        transition:
            background 0.13s,
            transform 0.09s;
    }
    .btn-save:hover {
        background: linear-gradient(90deg, #319b6a 0%, #48b883 100%);
        transform: scale(1.04);
    }

    .btn-cancel {
        background: #e2f3f0;
        color: #31706c;
        font-size: 1.05rem;
        border: none;
        border-radius: 16px;
        padding: 0.51rem 1.3rem;
        font-weight: 500;
        cursor: pointer;
        transition:
            background 0.13s,
            color 0.13s;
    }
    .btn-cancel:hover {
        background: #c7e8e3;
        color: #173d3b;
    }

    .back-link {
        display: inline-block;
        margin-top: 1.7rem;
        text-decoration: none;
        color: #31706c;
        font-size: 1.07rem;
        font-weight: 500;
        background: #e2f3f0;
        border-radius: 16px;
        padding: 0.38rem 1.3rem;
        transition:
            background 0.13s,
            color 0.13s;
    }
    .back-link:hover {
        background: #c7e8e3;
        color: #173d3b;
    }
</style>
