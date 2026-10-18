/* parAdots — EN/DE i18n. Toggle in header; choice saved in localStorage; first visit uses browser language. */
(function () {
  var DICT = {
    // ---- shared ----
    "nav.home": { en: "home", de: "start" },
    "nav.uc": { en: "use cases", de: "anwendungsfälle" },
    "nav.es": { en: "engagement studio", de: "engagement studio" },
    "nav.hiw": { en: "how it works", de: "so funktioniert's" },
    "nav.install": { en: "install", de: "installation" },
    "nav.cta": { en: "request access", de: "zugang anfragen" },
    "foot.tag": { en: "pardot &amp; salesforce audit suite · Nadya Higazi", de: "pardot- &amp; salesforce-audit-suite · Nadya Higazi" },
    "common.what": { en: "what parAdots does", de: "was parAdots macht" },
    "cta.h2": { en: "See it run against a real org.", de: "Sieh es an einer echten Org laufen." },
    "cta.p": { en: "A walkthrough, a demo audit, or access for a project.", de: "Ein Walkthrough, ein Demo-Audit oder Zugang für ein Projekt." },
    "cta.btn": { en: "Request access", de: "Zugang anfragen" },
    "btn.copy": { en: "copy", de: "kopieren" },

    // ---- home ----
    "home.eyebrow": { en: "pardot &amp; salesforce audit suite · multi-org", de: "pardot- &amp; salesforce-audit-suite · multi-org" },
    "home.h1": { en: 'know the org before you <span class="mark">touch</span> it.', de: 'kenne die Org, bevor du sie <span class="mark">anfasst</span>.' },
    "home.lead": { en: "parAdots scrapes, maps and scores an entire Pardot and Salesforce setup — every list, automation, form, Engagement&nbsp;Studio program and sync error — and renders it as one navigable picture. What used to take weeks of clicking becomes a single run.", de: "parAdots liest ein komplettes Pardot- und Salesforce-Setup aus, kartiert und bewertet es — jede Liste, Automation, jedes Formular, jedes Engagement-Studio-Programm und jeden Sync-Fehler — und stellt alles als ein navigierbares Bild dar. Was früher Wochen an Klickarbeit war, wird ein einziger Lauf." },
    "home.chip1": { en: "<b>30+</b> integrated scrapers", de: "<b>30+</b> integrierte Scraper" },
    "home.chip2": { en: "<b>14</b> best-practice checks", de: "<b>14</b> Best-Practice-Checks" },
    "home.chip3": { en: "<b>AI</b> enrichment", de: "<b>KI</b>-Anreicherung" },
    "home.chip4": { en: "<b>multi-org</b> from one codebase", de: "<b>multi-org</b> aus einer Codebasis" },
    "home.exp_eyebrow": { en: "explore", de: "entdecken" },
    "home.exp_h2": { en: "Three ways parAdots earns its keep.", de: "Drei Wege, auf denen parAdots sich bezahlt macht." },
    "home.card1_num": { en: "01 / pipeline", de: "01 / ablauf" },
    "home.card1_h": { en: "How it works", de: "So funktioniert's" },
    "home.card1_p": { en: "Collect → enrich → analyze → visualize. Four layers, one command — and everything it reads across Pardot and Salesforce.", de: "Erfassen → anreichern → analysieren → visualisieren. Vier Ebenen, ein Befehl — und alles, was es über Pardot und Salesforce ausliest." },
    "home.card1_go": { en: "how it works →", de: "so funktioniert's →" },
    "home.card2_num": { en: "02 / use cases", de: "02 / anwendungsfälle" },
    "home.card2_h": { en: "Use cases", de: "Anwendungsfälle" },
    "home.card2_p": { en: "Analysing a new org, keeping existing orgs honest, and designing new processes with a client.", de: "Eine neue Org analysieren, bestehende Orgs sauber halten und neue Prozesse mit Kund:innen entwerfen." },
    "home.card2_go": { en: "see the use cases →", de: "zu den anwendungsfällen →" },
    "home.card3_num": { en: "03 / studio", de: "03 / studio" },
    "home.card3_h": { en: "Engagement Studio", de: "Engagement Studio" },
    "home.card3_p": { en: "Any program rendered as a readable, zoomable, exportable diagram — plus automatic process discovery.", de: "Jedes Programm als lesbares, zoombares, exportierbares Diagramm — plus automatische Prozesserkennung." },
    "home.card3_go": { en: "open the studio →", de: "studio öffnen →" },

    // ---- how it works ----
    "hiw.eyebrow": { en: "how it works", de: "so funktioniert's" },
    "hiw.h1": { en: "four layers, one command.", de: "vier Ebenen, ein Befehl." },
    "hiw.lead": { en: 'Each layer writes clean, org-scoped data the next one reads. Run the whole chain with <code>run_all.py</code>, or any single step on its own.', de: 'Jede Ebene schreibt saubere, org-bezogene Daten, die die nächste liest. Starte die ganze Kette mit <code>run_all.py</code> — oder jeden Schritt einzeln.' },
    "hiw.s1_num": { en: "01 / collect", de: "01 / erfassen" },
    "hiw.s1_h": { en: "collect", de: "erfassen" },
    "hiw.s1_p": { en: "30+ scrapers pull Pardot config over the v5 REST API and a real browser session, and Salesforce over REST / SOQL — no connected app, MFA-safe.", de: "30+ Scraper holen die Pardot-Konfiguration über die v5-REST-API und eine echte Browser-Session, Salesforce über REST / SOQL — ohne Connected App, MFA-sicher." },
    "hiw.s2_num": { en: "02 / enrich", de: "02 / anreichern" },
    "hiw.s2_h": { en: "enrich", de: "anreichern" },
    "hiw.s2_p": { en: "Every asset and program gets a plain-language, AI-generated description of what it actually does — deterministic, so the same input always reads the same way.", de: "Jedes Asset und Programm erhält eine verständliche, KI-generierte Beschreibung dessen, was es tatsächlich tut — deterministisch, gleiche Eingabe liest sich immer gleich." },
    "hiw.s3_num": { en: "03 / analyze", de: "03 / analysieren" },
    "hiw.s3_h": { en: "analyze", de: "analysieren" },
    "hiw.s3_p": { en: "A cross-reference engine maps every dependency and finds orphans; 14 checks score the setup against best practice and GDPR consent rules; process discovery reconstructs whole flows.", de: "Eine Querverweis-Engine kartiert jede Abhängigkeit und findet Waisen; 14 Checks bewerten das Setup gegen Best Practices und DSGVO-Consent-Regeln; die Prozesserkennung rekonstruiert ganze Abläufe." },
    "hiw.s4_num": { en: "04 / visualize", de: "04 / visualisieren" },
    "hiw.s4_h": { en: "visualize", de: "visualisieren" },
    "hiw.s4_p": { en: "An interactive viewer, editable draw.io diagrams and a severity-ranked report turn the data into something you can zoom, export and talk about.", de: "Ein interaktiver Viewer, editierbare draw.io-Diagramme und ein nach Schweregrad sortierter Report machen aus den Daten etwas, das du zoomen, exportieren und besprechen kannst." },
    "hiw.cov_eyebrow": { en: "what it reads", de: "was es ausliest" },
    "hiw.cov_h2": { en: "The whole estate, not a sample.", de: "Der ganze Bestand, keine Stichprobe." },
    "hiw.cov_lead": { en: "Every object below is scraped, enriched and cross-referenced. Thresholds are set per org, so a small instance is never judged by a big one's bar.", de: "Jedes Objekt unten wird ausgelesen, angereichert und querverwiesen. Schwellenwerte werden pro Org gesetzt — eine kleine Instanz wird nie am Maßstab einer großen gemessen." },
    "hiw.cov_pardot_h": { en: '<span class="tag">pardot</span> account engagement', de: '<span class="tag">pardot</span> account engagement' },
    "hiw.cov_sf_h": { en: '<span class="tag">salesforce</span> connected org', de: '<span class="tag">salesforce</span> verbundene Org' },
    "hiw.flags_h": { en: "What the analysis flags", de: "Was die Analyse markiert" },
    "hiw.f1": { en: "Orphaned lists, automations and templates referenced nowhere", de: "Verwaiste Listen, Automationen und Templates, die nirgends referenziert sind" },
    "hiw.f2": { en: "Dynamic content whose source field no longer exists", de: "Dynamic Content, dessen Quellfeld nicht mehr existiert" },
    "hiw.f3": { en: "Forms with no completion actions", de: "Formulare ohne Completion Actions" },
    "hiw.f4": { en: "Assets and campaigns with no attribution", de: "Assets und Kampagnen ohne Attribution" },
    "hiw.f5": { en: "Paused automations piling up unseen", de: "Pausierte Automationen, die sich unbemerkt ansammeln" },
    "hiw.f6": { en: "Consent expiry &amp; GDPR coverage gaps", de: "Consent-Ablauf &amp; DSGVO-Lücken" },
    "hiw.f7": { en: "Scoring, grading and progressive-profiling gaps", de: "Lücken bei Scoring, Grading und Progressive Profiling" },
    "hiw.f8": { en: "Engagement Studio &amp; connected-campaign coverage", de: "Abdeckung von Engagement Studio &amp; Connected Campaigns" },
    "hiw.btn": { en: "See the use cases", de: "Zu den Anwendungsfällen" },

    // ---- use cases ----
    "uc.eyebrow": { en: "where it earns its keep", de: "wo es sich bezahlt macht" },
    "uc.h1": { en: "three moments in a consultant's week.", de: "drei Momente in der Woche einer Beraterin." },
    "uc.lead": { en: "parAdots was built around the jobs that eat the most time and carry the most risk.", de: "parAdots ist um die Aufgaben herum gebaut, die am meisten Zeit kosten und das größte Risiko tragen." },
    "uc.s1_index": { en: "01 — analysing a new org", de: "01 — eine neue Org analysieren" },
    "uc.s1_h": { en: "From blind spot to full map on day one.", de: "Vom blinden Fleck zur vollständigen Karte am ersten Tag." },
    "uc.s1_muted": { en: "You inherit an org you have never seen. Someone built it over five years and documented none of it; the real architecture lives across a thousand screens.", de: "Du übernimmst eine Org, die du nie gesehen hast. Jemand hat sie über fünf Jahre gebaut und nichts davon dokumentiert; die echte Architektur steckt in tausend Screens." },
    "uc.s1_prob": { en: "One run inventories every asset, builds the dependency map, flags orphaned lists and broken personalization, and scores the whole setup against 14 best-practice and consent checks.", de: "Ein Lauf inventarisiert jedes Asset, baut die Abhängigkeitskarte, markiert verwaiste Listen und kaputte Personalisierung und bewertet das gesamte Setup gegen 14 Best-Practice- und Consent-Checks." },
    "uc.s1_payoff": { en: "Walk in blind on Monday, present a findings-backed picture of the org by end of day one.", de: "Montag blind reingehen, am Ende des ersten Tages ein fundiertes Bild der Org präsentieren." },
    "uc.s1_cap": { en: "overview · the whole org as one map", de: "übersicht · die ganze Org als eine Karte" },
    "uc.s2_index": { en: "02 — working with existing orgs", de: "02 — mit bestehenden Orgs arbeiten" },
    "uc.s2_h": { en: "Keep every org honest over time.", de: "Jede Org dauerhaft sauber halten." },
    "uc.s2_muted": { en: "Live orgs drift. Paused automations pile up, fields get retired out from under dynamic content, and prospect-sync errors accumulate quietly in the background.", de: "Live-Orgs driften. Pausierte Automationen häufen sich, Felder verschwinden unter Dynamic Content weg, und Prospect-Sync-Fehler sammeln sich unbemerkt im Hintergrund." },
    "uc.s2_prob": { en: "From one cockpit you re-run any scraper, diff against the last audit, resolve sync errors, and trigger enrichment, the cross-reference map or the gap report — the same way for every client org you manage.", de: "Aus einem Cockpit startest du jeden Scraper neu, vergleichst mit dem letzten Audit, behebst Sync-Fehler und stößt Anreicherung, Querverweis-Karte oder Gap-Report an — gleich für jede Kund:innen-Org, die du betreust." },
    "uc.s2_payoff": { en: "Stay on top of every client org without living inside its admin screens.", de: "Behalte jede Kund:innen-Org im Griff, ohne in ihren Admin-Screens zu leben." },
    "uc.s2_cap": { en: "cockpit · re-run, diff &amp; remediate", de: "cockpit · neu starten, vergleichen &amp; beheben" },
    "uc.s3_index": { en: "03 — discussing new processes", de: "03 — neue Prozesse besprechen" },
    "uc.s3_h": { en: "A picture the customer can actually read.", de: "Ein Bild, das die Kund:innen wirklich lesen können." },
    "uc.s3_muted": { en: "Designing a new opt-in, re-engagement or nurture flow with a client means everyone in the room picturing something slightly different — and no one quite sure what already exists.", de: "Einen neuen Opt-in-, Re-Engagement- oder Nurture-Flow mit Kund:innen zu entwerfen heißt: alle im Raum stellen sich etwas leicht anderes vor — und niemand weiß genau, was schon existiert." },
    "uc.s3_prob": { en: "Every Engagement Studio program renders as a clean, collapsible flowchart — decisions, waits, actions and end states laid out exactly as they run, over the assets that are actually live.", de: "Jedes Engagement-Studio-Programm wird als klares, einklappbares Flussdiagramm dargestellt — Entscheidungen, Wartezeiten, Aktionen und Endzustände genau so, wie sie laufen, über den tatsächlich aktiven Assets." },
    "uc.s3_payoff": { en: "The conversation is about the process, not about decoding Pardot.", de: "Das Gespräch dreht sich um den Prozess, nicht ums Entziffern von Pardot." },
    "uc.s3_cap": { en: "engagement studio · rendered as a readable flow", de: "engagement studio · als lesbarer Flow dargestellt" },
    "uc.btn": { en: "More on Engagement Studio &amp; process discovery", de: "Mehr zu Engagement Studio &amp; Prozesserkennung" },

    // ---- engagement studio ----
    "es.eyebrow": { en: "engagement studio, decoded", de: "engagement studio, entschlüsselt" },
    "es.h1": { en: "The hardest thing to hand a client is a Pardot program.", de: "Das Schwerste, das man Kund:innen übergeben kann, ist ein Pardot-Programm." },
    "es.lead": { en: 'parAdots renders any Engagement Studio program — even a 65-step re-engagement flow — as one navigable diagram, with a plain-language summary of what it does. (Client names are masked as <code>YZ</code>.)', de: 'parAdots stellt jedes Engagement-Studio-Programm — selbst einen 65-Schritte-Re-Engagement-Flow — als ein navigierbares Diagramm dar, mit einer verständlichen Zusammenfassung dessen, was es tut. (Kundennamen sind als <code>YZ</code> maskiert.)' },
    "es.cap": { en: "65-step re-engagement program · fit to view, with AI-generated summary", de: "65-Schritte-Re-Engagement-Programm · eingepasst, mit KI-Zusammenfassung" },
    "es.f1_h": { en: "AI-generated summary", de: "KI-generierte Zusammenfassung" },
    "es.f1_p": { en: "Each program gets a readable description built from its real steps, so a 65-step consent flow reads as a paragraph, not a puzzle.", de: "Jedes Programm bekommt eine lesbare Beschreibung aus seinen echten Schritten — ein 65-Schritte-Consent-Flow liest sich als Absatz, nicht als Rätsel." },
    "es.f2_h": { en: "Zoom to any size", de: "Beliebig zoomen" },
    "es.f2_p": { en: "Zoom from a single decision node out to the entire program and back. Nothing is too big to take in at a glance.", de: "Zoome von einem einzelnen Entscheidungsknoten bis zum ganzen Programm und zurück. Nichts ist zu groß für den Überblick." },
    "es.f3_h": { en: "Export anywhere", de: "Überallhin exportieren" },
    "es.f3_p": { en: "Export the full logic as a PNG for a slide deck, or push it straight to a shared workboard to review with the client.", de: "Exportiere die gesamte Logik als PNG für die Präsentation oder schiebe sie direkt auf ein gemeinsames Workboard zur Abstimmung mit Kund:innen." },
    "es.pd_eyebrow": { en: "process discovery", de: "prozesserkennung" },
    "es.pd_h2": { en: "It finds the processes, not just the assets.", de: "Es findet die Prozesse, nicht nur die Assets." },
    "es.pd_lead": { en: 'parAdots works in two steps. First it <b>analyses</b> the org and detects existing newsletter sign-up, double-opt-in and re-engagement processes automatically. Then it <b>builds</b> each one — across forms, lists, automations and Engagement Studio — into a single, readable diagram you can verify and hand over.', de: 'parAdots arbeitet in zwei Schritten. Zuerst <b>analysiert</b> es die Org und erkennt bestehende Newsletter-Anmelde-, Double-Opt-in- und Re-Engagement-Prozesse automatisch. Dann <b>baut</b> es jeden davon — über Formulare, Listen, Automationen und Engagement Studio hinweg — zu einem einzigen, lesbaren Diagramm zusammen, das du prüfen und übergeben kannst.' },
    "es.pd_payoff": { en: "Hand a client the process they already have — verified, in one picture.", de: "Übergib Kund:innen den Prozess, den sie bereits haben — geprüft, in einem Bild." },
    "es.pd_s1lab": { en: "01 · detect", de: "01 · erkennen" },
    "es.pd_s1cap": { en: "one run scans the org for existing processes", de: "ein Lauf durchsucht die Org nach bestehenden Prozessen" },
    "es.pd_s2lab": { en: "02 · build", de: "02 · bauen" },
    "es.pd_s2cap": { en: "each one rebuilt as a readable diagram", de: "jeder davon als lesbares Diagramm nachgebaut" },

    // ---- request access ----
    "ra.eyebrow": { en: "request access", de: "zugang anfragen" },
    "ra.h2": { en: "See it run against a real org.", de: "Sieh es an einer echten Org laufen." },
    "ra.lead": { en: "parAdots is an internal, multi-brand audit tool. For a walkthrough, a demo audit, or access for a project, get in touch.", de: "parAdots ist ein internes, markenübergreifendes Audit-Tool. Für einen Walkthrough, ein Demo-Audit oder Zugang für ein Projekt — melde dich." },
    "ra.btn": { en: "Write an email", de: "E-Mail schreiben" },
    "ra.ag_eyebrow": { en: "at a glance", de: "auf einen Blick" },
    "ra.ag_h2": { en: "Enough coverage to trust the picture.", de: "Genug Abdeckung, um dem Bild zu vertrauen." },
    "ra.stat1": { en: "integrated scrapers across Pardot and Salesforce", de: "integrierte Scraper über Pardot und Salesforce" },
    "ra.stat2": { en: "best-practice &amp; GDPR gap checks, severity-ranked", de: "Best-Practice- &amp; DSGVO-Checks, nach Schweregrad sortiert" },
    "ra.stat3": { en: "codebase auditing every org — no per-client forks", de: "Codebasis für alle Orgs — keine Forks pro Kund:in" },
    "ra.stat4": { en: "connected apps or stored passwords — CLI &amp; session auth", de: "Connected Apps oder gespeicherte Passwörter — CLI- &amp; Session-Auth" },

    // ---- install ----
    "ins.eyebrow": { en: "installation", de: "installation" },
    "ins.h1": { en: "Get parAdots running.", de: "parAdots zum Laufen bringen." },
    "ins.lead": { en: "parAdots runs entirely on your own machine — no cloud service, no database to host. You need Python 3.10+ and Google Chrome. The package ships with one-click launchers, so the command line is optional.", de: "parAdots läuft vollständig auf deinem eigenen Rechner — kein Cloud-Dienst, keine Datenbank zu hosten. Du brauchst Python 3.10+ und Google Chrome. Das Paket bringt 1-Klick-Starter mit — die Kommandozeile ist optional." },

    "ins.dl_eyebrow": { en: "download", de: "download" },
    "ins.dl_h": { en: "Download the package", de: "Paket herunterladen" },
    "ins.dl_p": { en: "The ZIP contains everything, plus a synthetic demo org so the dashboard works immediately — explore the whole interface before connecting any real account.", de: "Die ZIP enthält alles, plus eine synthetische Demo-Org, damit das Dashboard sofort funktioniert — probiere die komplette Oberfläche aus, bevor du ein echtes Konto verbindest." },
    "ins.dl_btn": { en: "Download parAdots (ZIP)", de: "parAdots herunterladen (ZIP)" },
    "ins.dl_meta": { en: "Version 2026-10-18 · needs Python 3.10+ and Google Chrome · MIT&nbsp;licensed", de: "Version 2026-10-18 · benötigt Python 3.10+ und Google Chrome · MIT-lizenziert" },

    "ins.qs_eyebrow": { en: "quick start · one click", de: "schnellstart · ein klick" },
    "ins.qs_h": { en: "The recommended way", de: "Der empfohlene Weg" },
    "ins.qs_1": { en: "Download the package and unzip it.", de: "Paket herunterladen und entpacken." },
    "ins.qs_2": { en: 'Double-click <code>parAdots.command</code> (macOS) or <code>parAdots.bat</code> (Windows).', de: 'Doppelklick auf <code>parAdots.command</code> (macOS) bzw. <code>parAdots.bat</code> (Windows).' },
    "ins.qs_3": { en: 'The first start installs everything automatically and opens the dashboard at <code>http://localhost:8765</code>. Every later start opens straight away.', de: 'Der erste Start installiert alles automatisch und öffnet das Dashboard unter <code>http://localhost:8765</code>. Jeder weitere Start öffnet sofort.' },
    "ins.qs_note_h": { en: "First-launch security note", de: "Hinweis beim ersten Start" },
    "ins.qs_note": { en: 'On macOS, right-click <code>parAdots.command</code> → <b>Open</b> once to get past Gatekeeper. On Windows, if SmartScreen warns, choose <b>More info → Run anyway</b>.', de: 'Unter macOS einmal Rechtsklick auf <code>parAdots.command</code> → <b>Öffnen</b> (wegen Gatekeeper). Unter Windows bei einer SmartScreen-Warnung <b>Weitere Informationen → Trotzdem ausführen</b> wählen.' },

    "ins.ms_eyebrow": { en: "manual setup · all platforms", de: "manuelle einrichtung · alle plattformen" },
    "ins.ms_h": { en: "For the command line", de: "Für die Kommandozeile" },
    "ins.ms_prereq_h": { en: "Prerequisites", de: "Voraussetzungen" },
    "ins.ms_pr1": { en: "Python 3.10 or newer", de: "Python 3.10 oder neuer" },
    "ins.ms_pr2": { en: "Google Chrome (used for session-based authentication)", de: "Google Chrome (für die sitzungsbasierte Anmeldung)" },
    "ins.ms_pr3": { en: "Network access to your Pardot and Salesforce environments", de: "Netzzugang zu deinen Pardot- und Salesforce-Umgebungen" },
    "ins.ms_pr4": { en: "For Salesforce: the Salesforce CLI logged in, or an active browser session", de: "Für Salesforce: die angemeldete Salesforce CLI oder eine aktive Browser-Sitzung" },
    "ins.ms_steps_h": { en: "Setup — identical on Mac and Windows", de: "Einrichtung — auf Mac und Windows gleich" },
    "ins.ms_1": { en: "Download or clone the parAdots repository.", de: "parAdots-Repository herunterladen oder klonen." },
    "ins.ms_2": { en: "Install the Python dependencies.", de: "Python-Abhängigkeiten installieren." },
    "ins.ms_3": { en: "Install the browser Playwright uses.", de: "Den von Playwright genutzten Browser installieren." },
    "ins.ms_4": { en: 'Copy the config template to <code>configs/your-org.env</code> and fill in your credentials.', de: 'Konfigurationsvorlage nach <code>configs/your-org.env</code> kopieren und Zugangsdaten eintragen.' },
    "ins.ms_5": { en: "Select the org you want to audit.", de: "Die zu auditierende Org auswählen." },
    "ins.ms_6": { en: 'Run the audit <span class="muted">(add <code>--no-sf</code> to skip Salesforce)</span>.', de: 'Audit starten <span class="muted">(<code>--no-sf</code> überspringt Salesforce)</span>.' },
    "ins.ms_7": { en: 'Open the viewer, then browse to <code>http://localhost:8765</code>.', de: 'Viewer öffnen, dann <code>http://localhost:8765</code> aufrufen.' },
    "ins.ms_mac_h": { en: "macOS", de: "macOS" },
    "ins.ms_mac": { en: 'Install Python via Homebrew (<code>brew install python@3.13</code>) or from python.org. Create and activate the virtual environment with <code>python3 -m venv .venv</code> and <code>source .venv/bin/activate</code>.', de: 'Python über Homebrew (<code>brew install python@3.13</code>) oder von python.org installieren. Virtuelle Umgebung mit <code>python3 -m venv .venv</code> und <code>source .venv/bin/activate</code> anlegen und aktivieren.' },
    "ins.ms_win_h": { en: "Windows", de: "Windows" },
    "ins.ms_win": { en: 'Install Python from python.org (tick "Add Python to PATH") or via <code>winget</code>. In PowerShell, activate the venv with <code>.venv\\Scripts\\Activate.ps1</code>. Make sure Chrome is installed.', de: 'Python von python.org installieren („Add Python to PATH" anhaken) oder über <code>winget</code>. In PowerShell die venv mit <code>.venv\\Scripts\\Activate.ps1</code> aktivieren. Chrome muss installiert sein.' },

    "ins.lic_eyebrow": { en: "license", de: "lizenz" },
    "ins.lic_h": { en: "Yours to use and build on.", de: "Zum Nutzen und Weiterentwickeln." },
    "ins.lic_p": { en: "parAdots is open source under the MIT License. You are free to use, modify, distribute and further develop it — for any purpose, including commercially. It is provided as is, at your own responsibility, with no warranty of any kind.", de: "parAdots ist Open Source unter der MIT-Lizenz. Du darfst es frei nutzen, verändern, weitergeben und weiterentwickeln — für jeden Zweck, auch kommerziell. Es wird ohne jegliche Gewährleistung bereitgestellt; die Nutzung erfolgt auf eigene Verantwortung." },
    "ins.lic_note": { en: 'The full license text ships as <code>LICENSE</code> inside the package.', de: 'Der vollständige Lizenztext liegt als <code>LICENSE</code> im Paket bei.' }
  };

  function getLang() {
    try { var s = localStorage.getItem("paradots_lang"); if (s === "en" || s === "de") return s; } catch (e) {}
    var n = (navigator.language || "en").toLowerCase();
    return n.indexOf("de") === 0 ? "de" : "en";
  }
  function apply(lang) {
    if (lang !== "de") lang = "en";
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (DICT[k] && DICT[k][lang] != null) nodes[i].innerHTML = DICT[k][lang];
    }
    var btns = document.querySelectorAll(".langtoggle button[data-lang]");
    for (var j = 0; j < btns.length; j++) btns[j].classList.toggle("active", btns[j].getAttribute("data-lang") === lang);
    try { localStorage.setItem("paradots_lang", lang); } catch (e) {}
  }
  window.parAdotsI18n = { apply: apply, get: getLang };
  function init() {
    apply(getLang());
    var btns = document.querySelectorAll(".langtoggle button[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () { apply(this.getAttribute("data-lang")); });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
