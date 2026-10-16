# parAdots — Website (mehrseitig, für GitHub Pages)

Mehrseitige Website mit gemeinsamer Navigation. Alles liegt in diesem Ordner und
funktioniert mit relativen Pfaden — ideal für GitHub Pages.

## Inhalt

```
index.html               Startseite (Hero + Übersicht)
how-it-works.html        Pipeline + Coverage
scenarios.html           Die drei Szenarien
engagement-studio.html   Engagement Studio + Process discovery
request-access.html      Kontakt / Zugang
styles.css               gemeinsames Design (alle Seiten)
assets/parAdots-logo.svg Logo
shots/                   alle Screenshots
.nojekyll                liefert die Dateien unverändert aus
```

## In 5 Schritten online (kostenlos, öffentliches Repo)

1. **github.com → „+" → New repository.** Name z. B. `paradots`, **Public**, **Create**.
2. **„uploading an existing file".** Ziehe **den gesamten Inhalt dieses Ordners** ins
   Browserfenster — inklusive der Unterordner **`shots/`** und **`assets/`** sowie
   `styles.css` und `.nojekyll`. (Am einfachsten: alle Dateien/Ordner markieren und
   gemeinsam hineinziehen.) → **Commit changes**.
3. **Settings → Pages** → Source = **Deploy from a branch**, Branch = **main**,
   Ordner = **/ (root)** → **Save**.
4. 1–2 Minuten warten. Deine Seite: **`https://<dein-username>.github.io/paradots/`**
   (`index.html` wird automatisch als Startseite geladen).
5. Fertig. Zum Aktualisieren einzelne Dateien im Repo ersetzen.

## Hinweise

- **Wichtig:** Die Ordnerstruktur muss erhalten bleiben (`shots/…`, `assets/…`),
  sonst werden Bilder/Logo nicht gefunden.
- Öffentliches Repo = kostenlos. Die Screenshots sind markenbereinigt (YZ).
- Eigene Domain später: **Settings → Pages → Custom domain**.
- Lokal testen: Doppelklick auf `index.html` öffnet die Seite im Browser; die Links
  zwischen den Seiten funktionieren direkt.
