# MealMate

**Autor:** Dencey Katheesrupan  
**E-Mail:** katheden@students.zhaw.ch  
**Deployte App:** https://mealmated.netlify.app/  

## 1. Einleitung

MealMate ist eine Webanwendung zur Erfassung und Verwaltung von Mahlzeiten sowie zur Zuweisung dieser zu Personen („Mates“). Nutzer*innen können Mahlzeiten mit Nährwertangaben wie Kalorien, Eiweiss, Fett und Kohlenhydraten erfassen, anzeigen und verwalten. Die App basiert auf SvelteKit (Runes-Mode) und speichert Daten in MongoDB.

## 2. Datenmodell
![image](https://github.com/user-attachments/assets/9cf8cd75-3a7a-4f46-bc4a-5d3f460ed83c)


## 3. Beschreibung der Anwendung

### `/`  
Startseite mit Navigation

### `/mahlzeiten/alle`  
Mahlzeitenübersicht, gruppiert nach Person  
Komponenten: `meal-card.svelte`, `meal-item.svelte`

### `/mahlzeiten/neu`  
Formular zur Eingabe einer neuen Mahlzeit  
Verwendung von Form Actions

### `/mahlzeiten/[id]`  
Detailansicht und Bearbeitung einer Mahlzeit  
CRUD-Funktionen inklusive Redirect

## 4. Erweiterungen

- Gruppierung nach Personen
- Eigenes responsives CSS
- Formularvalidierung
- Trennung der DB-Logik (`lib/db.js`)

## 5. Deployment

- GitHub: https://github.com/katheden/mealmate  
- Live: https://mealmated.netlify.app  
- Umgebungsvariablen (DB_URI) über Netlify konfiguriert

