/* parAdots — EN/DE i18n. Toggle in header; choice saved in localStorage; first visit uses browser language. */
(function () {
  var DICT = {
    // ---- shared ----
    "nav.home": { en: "home", de: "start" },
    "nav.uc": { en: "use cases", de: "anwendungsfälle" },
    "nav.es": { en: "engagement studio", de: "engagement studio" },
    "nav.workboard": { en: "workboard", de: "workboard" },
    "nav.hiw": { en: "how it works", de: "so funktioniert's" },
    "nav.install": { en: "download", de: "download" },
    "nav.about": { en: "about", de: "über mich" },
    "foot.tag": { en: "pardot &amp; salesforce audit suite · Nadya Higazi", de: "pardot- &amp; salesforce-audit-suite · Nadya Higazi" },
    "common.what": { en: "what parAdots does", de: "was parAdots macht" },

    // ---- home ----
    "home.eyebrow": { en: "pardot &amp; salesforce audit suite · multi-org", de: "pardot- &amp; salesforce-audit-suite · multi-org" },
    "home.h1": { en: 'know the org before you <span class="mark">touch</span> it.', de: 'kenne die Org, bevor du sie <span class="mark">anfasst</span>.' },
    "home.lead": { en: "parAdots scrapes, maps and scores an entire Pardot and Salesforce setup — every list, automation, form, Engagement&nbsp;Studio program and sync error — and renders it as one navigable picture. What used to take weeks of clicking becomes a single run.", de: "parAdots liest ein komplettes Pardot- und Salesforce-Setup aus, bringt alle Zusammenhänge in eine Übersicht und bewertet es — jede Liste, jede Automatisierung, jedes Formular, jedes Engagement-Studio-Programm und jeden Sync-Fehler. Heraus kommt ein navigierbares Gesamtbild: Was früher Wochen an Klickarbeit bedeutete, ist jetzt ein einziger Lauf." },
    "home.chip1": { en: "<b>30+</b> integrated scrapers", de: "<b>30+</b> integrierte Scraper" },
    "home.chip2": { en: "<b>14</b> best-practice checks", de: "<b>14</b> Best-Practice-Checks" },
    "home.chip3": { en: "<b>AI</b> enrichment", de: "<b>KI</b>-Anreicherung" },
    "home.chip4": { en: "<b>multi-org</b> from one codebase", de: "<b>multi-org</b> aus einer Codebasis" },
    "home.exp_eyebrow": { en: "explore", de: "entdecken" },
    "home.exp_h2": { en: "Three ways parAdots earns its keep.", de: "Drei Situationen, in denen sich parAdots auszahlt." },
    "home.card1_num": { en: "01 / pipeline", de: "01 / ablauf" },
    "home.card1_h": { en: "How it works", de: "So funktioniert's" },
    "home.card1_p": { en: "Collect → enrich → analyze → visualize. Four layers, one command — and everything it reads across Pardot and Salesforce.", de: "Erfassen → anreichern → analysieren → visualisieren. Vier Ebenen, ein Befehl — und alles, was parAdots aus Pardot und Salesforce ausliest." },
    "home.card1_go": { en: "how it works →", de: "so funktioniert's →" },
    "home.card2_num": { en: "02 / use cases", de: "02 / anwendungsfälle" },
    "home.card2_h": { en: "Use cases", de: "Anwendungsfälle" },
    "home.card2_p": { en: "Analysing a new org, keeping existing orgs honest, and designing new processes with a client.", de: "Eine neue Org analysieren, bestehende Orgs sauber halten und neue Prozesse mit Kunden entwerfen." },
    "home.card2_go": { en: "see the use cases →", de: "zu den anwendungsfällen →" },
    "home.card3_num": { en: "03 / studio", de: "03 / studio" },
    "home.card3_h": { en: "Engagement Studio", de: "Engagement Studio" },
    "home.card3_p": { en: "Any program rendered as a readable, zoomable, exportable diagram — plus automatic process discovery.", de: "Jedes Programm als lesbares, zoombares, exportierbares Diagramm — dazu automatische Prozesserkennung." },
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
    "hiw.s2_p": { en: "Every asset and program gets a plain-language, AI-generated description of what it actually does — deterministic, so the same input always reads the same way.", de: "Jedes Asset und Programm erhält eine verständliche, KI-generierte Beschreibung dessen, was es tatsächlich tut — deterministisch — dieselbe Eingabe liest sich immer gleich." },
    "hiw.s3_num": { en: "03 / analyze", de: "03 / analysieren" },
    "hiw.s3_h": { en: "analyze", de: "analysieren" },
    "hiw.s3_p": { en: "A cross-reference engine maps every dependency and finds orphans; 14 checks score the setup against best practice and GDPR consent rules; process discovery reconstructs whole flows.", de: "Eine Querverweis-Engine erfasst jede Abhängigkeit und deckt verwaiste Objekte auf; 14 Checks bewerten das Setup gegen Best Practices und DSGVO-Vorgaben zur Einwilligung; die Prozesserkennung rekonstruiert ganze Abläufe." },
    "hiw.s4_num": { en: "04 / visualize", de: "04 / visualisieren" },
    "hiw.s4_h": { en: "visualize", de: "visualisieren" },
    "hiw.s4_p": { en: "An interactive viewer, editable draw.io diagrams and a severity-ranked report turn the data into something you can zoom, export and talk about.", de: "Ein interaktiver Viewer, editierbare draw.io-Diagramme und ein nach Schweregrad sortierter Report machen aus den Daten etwas, das du zoomen, exportieren und besprechen kannst." },
    "hiw.cov_eyebrow": { en: "what it reads", de: "was es ausliest" },
    "hiw.cov_h2": { en: "The whole estate, not a sample.", de: "Der ganze Bestand, keine Stichprobe." },
    "hiw.cov_lead": { en: "Every object below is scraped, enriched and cross-referenced. Thresholds are set per org, so a small instance is never judged by a big one's bar.", de: "Jedes Objekt unten wird ausgelesen, angereichert und miteinander verknüpft. Schwellenwerte werden pro Org gesetzt — eine kleine Instanz wird nie am Maßstab einer großen gemessen." },
    "hiw.cov_pardot_h": { en: '<span class="tag">pardot</span> account engagement', de: '<span class="tag">pardot</span> account engagement' },
    "hiw.cov_sf_h": { en: '<span class="tag">salesforce</span> connected org', de: '<span class="tag">salesforce</span> verbundene Org' },
    "hiw.flags_h": { en: "What the analysis flags", de: "Was die Analyse aufdeckt" },
    "hiw.f1": { en: "Orphaned lists, automations and templates referenced nowhere", de: "Verwaiste Listen, Automatisierungen und Vorlagen, auf die nirgends verwiesen wird" },
    "hiw.f2": { en: "Dynamic content whose source field no longer exists", de: "Dynamic Content, dessen Quellfeld nicht mehr existiert" },
    "hiw.f3": { en: "Forms with no completion actions", de: "Formulare ohne Completion Actions" },
    "hiw.f4": { en: "Assets and campaigns with no attribution", de: "Assets und Kampagnen ohne Attribution" },
    "hiw.f5": { en: "Paused automations piling up unseen", de: "Pausierte Automatisierungen, die sich unbemerkt ansammeln" },
    "hiw.f6": { en: "Consent expiry &amp; GDPR coverage gaps", de: "Abgelaufene Einwilligungen &amp; DSGVO-Lücken" },
    "hiw.f7": { en: "Scoring, grading and progressive-profiling gaps", de: "Lücken bei Scoring, Grading und Progressive Profiling" },
    "hiw.f8": { en: "Engagement Studio &amp; connected-campaign coverage", de: "Abdeckung von Engagement Studio &amp; Connected Campaigns" },
    "hiw.btn": { en: "See the use cases", de: "Zu den Anwendungsfällen" },

    // ---- use cases ----
    "uc.eyebrow": { en: "where it earns its keep", de: "wo es sich bezahlt macht" },
    "uc.h1": { en: "three moments in a consultant's week.", de: "drei Momente in der Woche eines Beraters." },
    "uc.lead": { en: "parAdots was built around the jobs that eat the most time and carry the most risk.", de: "parAdots ist für genau die Aufgaben gebaut, die am meisten Zeit kosten und das größte Risiko bergen." },
    "uc.s1_index": { en: "01 — analysing a new org", de: "01 — eine neue Org analysieren" },
    "uc.s1_h": { en: "From blind spot to full map on day one.", de: "Vom blinden Fleck zur vollständigen Übersicht — am ersten Tag." },
    "uc.s1_muted": { en: "You inherit an org you have never seen. Someone built it over five years and documented none of it; the real architecture lives across a thousand screens.", de: "Du übernimmst eine Org, die du nie gesehen hast. Jemand hat sie über fünf Jahre hinweg aufgebaut und nichts davon dokumentiert; die eigentliche Architektur verteilt sich über tausend Einzelansichten." },
    "uc.s1_prob": { en: "One run inventories every asset, builds the dependency map, flags orphaned lists and broken personalization, and scores the whole setup against 14 best-practice and consent checks.", de: "Ein einziger Lauf inventarisiert jedes Asset, erstellt die Abhängigkeitsübersicht, deckt verwaiste Listen und defekte Personalisierung auf und bewertet das gesamte Setup anhand von 14 Best-Practice- und Consent-Checks." },
    "uc.s1_payoff": { en: "Walk in blind on Monday, present a findings-backed picture of the org by end of day one.", de: "Montag blind reingehen, am Ende des ersten Tages ein fundiertes Bild der Org präsentieren." },
    "uc.s1_cap": { en: "overview · the whole org as one map", de: "übersicht · die ganze Org auf einen Blick" },
    "uc.s2_index": { en: "02 — working with existing orgs", de: "02 — mit bestehenden Orgs arbeiten" },
    "uc.s2_h": { en: "Keep every org honest over time.", de: "Jede Org dauerhaft sauber halten." },
    "uc.s2_muted": { en: "Live orgs drift. Paused automations pile up, fields get retired out from under dynamic content, and prospect-sync errors accumulate quietly in the background.", de: "Live-Orgs verändern sich schleichend. Pausierte Automatisierungen häufen sich, Felder werden stillgelegt, während Dynamic Content noch darauf zugreift, und Prospect-Sync-Fehler sammeln sich unbemerkt im Hintergrund." },
    "uc.s2_prob": { en: "From one cockpit you re-run any scraper, diff against the last audit, resolve sync errors, and trigger enrichment, the cross-reference map or the gap report — the same way for every client org you manage.", de: "Aus einem einzigen Cockpit startest du jeden Scraper neu, vergleichst mit dem letzten Audit, behebst Sync-Fehler und stößt Anreicherung, Querverweis-Übersicht oder Gap-Report an — für jede Kunden-Org, die du betreust, auf dieselbe Weise." },
    "uc.s2_payoff": { en: "Stay on top of every client org without living inside its admin screens.", de: "Behalte jede Kunden-Org im Griff, ohne ständig in ihren Admin-Oberflächen zu sitzen." },
    "uc.s2_cap": { en: "cockpit · re-run, diff &amp; remediate", de: "cockpit · neu starten, vergleichen &amp; beheben" },
    "uc.s3_index": { en: "03 — discussing new processes", de: "03 — neue Prozesse besprechen" },
    "uc.s3_h": { en: "A picture the customer can actually read.", de: "Ein Bild, das Kunden wirklich lesen können." },
    "uc.s3_muted": { en: "Designing a new opt-in, re-engagement or nurture flow with a client means everyone in the room picturing something slightly different — and no one quite sure what already exists.", de: "Einen neuen Opt-in-, Re-Engagement- oder Nurture-Flow mit Kunden zu entwerfen heißt: alle im Raum stellen sich etwas leicht anderes vor — und niemand weiß genau, was schon existiert." },
    "uc.s3_prob": { en: "Every Engagement Studio program renders as a clean, collapsible flowchart — decisions, waits, actions and end states laid out exactly as they run, over the assets that are actually live.", de: "Jedes Engagement-Studio-Programm wird als klares, einklappbares Flussdiagramm dargestellt — Entscheidungen, Wartezeiten, Aktionen und Endzustände genau so, wie sie laufen, auf Basis der tatsächlich aktiven Assets." },
    "uc.s3_payoff": { en: "The conversation is about the process, not about decoding Pardot.", de: "Das Gespräch dreht sich um den Prozess, nicht ums Entziffern von Pardot." },
    "uc.s3_cap": { en: "engagement studio · rendered as a readable flow", de: "engagement studio · als lesbarer Flow dargestellt" },
    "uc.btn": { en: "More on Engagement Studio &amp; process discovery", de: "Mehr zu Engagement Studio &amp; Prozesserkennung" },

    // ---- engagement studio ----
    "es.eyebrow": { en: "engagement studio, decoded", de: "engagement studio, entschlüsselt" },
    "es.h1": { en: "The hardest thing to hand a client is a Pardot program.", de: "Das Schwerste, was man Kunden übergeben kann, ist ein Pardot-Programm." },
    "es.lead": { en: 'parAdots renders any Engagement Studio program — even a 65-step re-engagement flow — as one navigable diagram, with a plain-language summary of what it does. (Client names are masked as <code>YZ</code>.)', de: 'parAdots stellt jedes Engagement-Studio-Programm — selbst einen 65-Schritte-Re-Engagement-Flow — als ein navigierbares Diagramm dar, mit einer verständlichen Zusammenfassung dessen, was es tut. (Kundennamen sind als <code>YZ</code> maskiert.)' },
    "es.cap": { en: "65-step re-engagement program · fit to view, with AI-generated summary", de: "65-Schritte-Re-Engagement-Programm · auf einen Blick, mit KI-Zusammenfassung" },
    "es.f1_h": { en: "AI-generated summary", de: "KI-generierte Zusammenfassung" },
    "es.f1_p": { en: "Each program gets a readable description built from its real steps, so a 65-step consent flow reads as a paragraph, not a puzzle.", de: "Jedes Programm bekommt eine lesbare Beschreibung aus seinen echten Schritten — ein 65-Schritte-Consent-Flow liest sich als Absatz, nicht als Rätsel." },
    "es.f2_h": { en: "Zoom to any size", de: "Beliebig zoomen" },
    "es.f2_p": { en: "Zoom from a single decision node out to the entire program and back. Nothing is too big to take in at a glance.", de: "Zoome von einem einzelnen Entscheidungsknoten bis zum ganzen Programm und zurück. Nichts ist zu groß für den Überblick." },
    "es.f3_h": { en: "Export anywhere", de: "Überallhin exportieren" },
    "es.f3_p": { en: "Export the full logic as a PNG for a slide deck, or push it straight to a shared workboard to review with the client.", de: "Exportiere die gesamte Logik als PNG für die Präsentation oder schiebe sie direkt auf ein gemeinsames Workboard zur Abstimmung mit Kunden." },
    "es.pd_eyebrow": { en: "process discovery", de: "prozesserkennung" },
    "es.pd_h2": { en: "It finds the processes, not just the assets.", de: "Es findet die Prozesse, nicht nur die Assets." },
    "es.pd_lead": { en: 'parAdots works in two steps. First it <b>analyses</b> the org and detects existing newsletter sign-up, double-opt-in and re-engagement processes automatically. Then it <b>builds</b> each one — across forms, lists, automations and Engagement Studio — into a single, readable diagram you can verify and hand over.', de: 'parAdots arbeitet in zwei Schritten. Zuerst <b>analysiert</b> es die Org und erkennt bestehende Newsletter-Anmelde-, Double-Opt-in- und Re-Engagement-Prozesse automatisch. Dann <b>baut</b> es jeden davon — über Formulare, Listen, Automatisierungen und Engagement Studio hinweg — zu einem einzigen, lesbaren Diagramm zusammen, das du prüfen und übergeben kannst.' },
    "es.pd_payoff": { en: "Hand a client the process they already have — verified, in one picture.", de: "Übergib Kunden den Prozess, den sie bereits haben — geprüft, in einem Bild." },
    "es.pd_s1lab": { en: "01 · detect", de: "01 · erkennen" },
    "es.pd_s1cap": { en: "one run scans the org for existing processes", de: "ein Lauf durchsucht die Org nach bestehenden Prozessen" },
    "es.pd_s2lab": { en: "02 · build", de: "02 · bauen" },
    "es.pd_s2cap": { en: "each one rebuilt as a readable diagram", de: "jeder davon als lesbares Diagramm nachgebaut" },

    // ---- about ----
    "ab.eyebrow": { en: "about", de: "über parAdots" },
    "ab.h1": { en: "The consultant behind parAdots.", de: "Wer hinter parAdots steckt." },
    "ab.lead": { en: "I'm Nadya Higazi — a Salesforce and Marketing Cloud Account Engagement (Pardot) consultant. parAdots grew out of the day-to-day work of auditing real B2B marketing estates, so it reads the way a practitioner actually thinks about them.", de: "Ich bin Nadya Higazi und berate rund um Salesforce und Marketing Cloud Account Engagement (Pardot). parAdots ist aus der täglichen Arbeit entstanden, echte B2B-Marketing-Setups zu auditieren — deshalb ist es so aufgebaut, wie Praktiker tatsächlich über solche Systeme denken." },

    "ab.bio1": { en: "I work as a freelance Salesforce &amp; Pardot (MCAE) consultant. Most of my clients are B2B building-products and industrial manufacturers in the DACH region, where marketing and sales rarely run in a straight line — they run through a three-tier distribution model (<em>dreistufiger Vertrieb</em>): manufacturer, wholesale, and trade. A lot of my work is making marketing automation fit that reality rather than fighting it.", de: "Ich berate freiberuflich rund um Salesforce &amp; Pardot (MCAE). Die meisten meiner Kunden sind B2B-Hersteller von Bauprodukten und Industriegütern im DACH-Raum, wo Marketing und Vertrieb selten geradlinig verlaufen — sondern über den <em>dreistufigen Vertrieb</em>: Hersteller, Großhandel und Fachhandwerk. Ein großer Teil meiner Arbeit besteht darin, Marketing-Automation an diese Realität anzupassen, statt gegen sie zu arbeiten." },
    "ab.bio2": { en: "Before going independent, I spent two decades in international software and project delivery at the Goethe-Institut, latterly as regional project lead (OSKA) for software rollouts across <strong>9 countries and 17 institutes</strong> in North Africa and the Middle East. Coordinating a rollout at that scale — many sites, many stakeholders, one system that had to work for all of them — is the same muscle I now use on marketing-automation programs.", de: "Vor meiner Selbstständigkeit war ich zwei Jahrzehnte in internationaler Software- und Projektarbeit am Goethe-Institut tätig, zuletzt in der regionalen Projektleitung (OSKA) für Software-Rollouts in <strong>9 Ländern und 17 Instituten</strong> in Nordafrika und dem Nahen Osten. Einen Rollout dieser Größe zu koordinieren — viele Standorte, viele Beteiligte, ein System, das für alle funktionieren muss — verlangt genau die Fähigkeiten, die ich heute für Marketing-Automation-Programme einsetze." },
    "ab.bio3": { en: "parAdots came directly out of that consulting work. Auditing a Pardot and Salesforce setup by hand is slow, easy to get wrong, and impossible to hand over cleanly. So I built a suite that collects the whole estate, explains every asset in plain language, maps the dependencies, and flags what's broken or non-compliant — the audit I wished I'd had on day one of every new client.", de: "parAdots ist direkt aus dieser Beratungsarbeit entstanden. Ein Pardot- und Salesforce-Setup von Hand zu auditieren ist langsam, fehleranfällig und lässt sich nicht sauber übergeben. Also habe ich eine Suite gebaut, die den gesamten Bestand erfasst, jedes Asset verständlich erklärt, die Abhängigkeiten sichtbar macht und markiert, was defekt oder nicht regelkonform ist — das Audit, das ich mir am ersten Tag bei jedem neuen Kunden gewünscht hätte." },

    "ab.g_role_k": { en: "Role", de: "Rolle" },
    "ab.g_role_v": { en: "Salesforce &amp; MCAE / Pardot consultant", de: "Consultant für Salesforce &amp; MCAE / Pardot" },
    "ab.g_based_k": { en: "Based in", de: "Standort" },
    "ab.g_based_v": { en: "Wiesbaden, Germany", de: "Wiesbaden, Deutschland" },
    "ab.g_focus_k": { en: "Focus", de: "Schwerpunkt" },
    "ab.g_focus_v": { en: "B2B marketing automation for three-tier distribution", de: "B2B-Marketing-Automation für den dreistufigen Vertrieb" },
    "ab.g_lang_k": { en: "Languages", de: "Sprachen" },
    "ab.g_lang_v": { en: "German, English (C1), Arabic, French, Dutch, Italian", de: "Deutsch, Englisch (C1), Arabisch, Französisch, Niederländisch, Italienisch" },

    "ab.ag_eyebrow": { en: "at a glance", de: "auf einen Blick" },
    "ab.ag_s1": { en: "years in international software &amp; project delivery", de: "Jahre in internationaler Software- &amp; Projektarbeit" },
    "ab.ag_s2": { en: "Salesforce certifications", de: "Salesforce-Zertifizierungen" },
    "ab.ag_s3": { en: "countries coordinated on regional rollouts", de: "Länder bei regionalen Rollouts koordiniert" },
    "ab.ag_s4": { en: "languages spoken", de: "gesprochene Sprachen" },

    "ab.wi_eyebrow": { en: "what i do", de: "was ich mache" },
    "ab.wi_h": { en: "Marketing automation that survives contact with real orgs.", de: "Marketing-Automation, die der Realität echter Orgs standhält." },
    "ab.wi_lead": { en: "Two systems, one job: turn a messy, grown-over setup into something measurable, compliant and handover-ready.", de: "Zwei Systeme, eine Aufgabe: aus einem gewachsenen, unübersichtlichen Setup etwas Messbares, Regelkonformes und Übergabereifes machen." },
    "ab.wi_pardot_h": { en: '<span class="tag">pardot</span> account engagement', de: '<span class="tag">pardot</span> account engagement' },
    "ab.wi_sf_h": { en: '<span class="tag">salesforce</span> platform', de: '<span class="tag">salesforce</span> plattform' },
    "ab.wi_where_h": { en: "Where I'm usually brought in", de: "Wofür ich meist geholt werde" },
    "ab.wi_l1": { en: "Standing up Pardot &amp; Salesforce for manufacturers new to marketing automation", de: "Pardot &amp; Salesforce für Hersteller aufsetzen, die neu in der Marketing-Automation sind" },
    "ab.wi_l2": { en: "Rescuing and documenting setups nobody fully understands anymore", de: "Setups retten und dokumentieren, die niemand mehr ganz versteht" },
    "ab.wi_l3": { en: "Engagement Studio programs: re-engagement, nurture, DOI / opt-out logic", de: "Engagement-Studio-Programme: Re-Engagement, Nurture, DOI-/Opt-out-Logik" },
    "ab.wi_l4": { en: "GDPR consent and data-quality audits", de: "DSGVO-Einwilligungs- und Datenqualitäts-Audits" },
    "ab.wi_l5": { en: "Connected Campaigns and attribution across marketing and sales", de: "Connected Campaigns und Attribution über Marketing und Vertrieb hinweg" },
    "ab.wi_l6": { en: "Newsletter &amp; email template systems across multiple markets", de: "Newsletter- &amp; E-Mail-Template-Systeme über mehrere Märkte hinweg" },

    "ab.cr_eyebrow": { en: "credentials", de: "qualifikationen" },
    "ab.cr_h": { en: "Certified across the stack.", de: "Zertifiziert über den gesamten Stack hinweg." },
    "ab.cr_lead": { en: "Salesforce certifications spanning platform administration, marketing automation, analysis and AI — plus speaking at the Salesforce community.", de: "Salesforce-Zertifizierungen über Plattform-Administration, Marketing-Automation, Analyse und KI hinweg — dazu Vorträge in der Salesforce-Community." },

    "ab.ct_eyebrow": { en: "get in touch", de: "kontakt" },
    "ab.ct_h": { en: "Let's talk Pardot, Salesforce — or parAdots.", de: "Sprechen wir über Pardot, Salesforce — oder parAdots." },
    "ab.ct_lead": { en: "Whether you want the tool run against your own org or an extra pair of hands on a marketing-automation project, I'm happy to hear from you.", de: "Ob du parAdots an deiner eigenen Org laufen lassen oder zusätzliche Unterstützung für ein Marketing-Automation-Projekt möchtest — ich freue mich über eine Nachricht." },
    "ab.ct_linkedin": { en: "Connect on LinkedIn", de: "Auf LinkedIn vernetzen" },

    // ---- workboard ----
    "wb.eyebrow": { en: "workboard", de: "workboard" },
    "wb.h1": { en: "Design the process with your client — right where you discuss it.", de: "Den Prozess mit dem Kunden entwerfen — genau dort, wo ihr darüber sprecht." },
    "wb.lead": { en: "The Workboard is a canvas for planning a Pardot process together. Drop in the assets that already exist — with their real names, straight from the audit — or sketch new ones you still have to build. Wire the logic, save the board, and open it again whenever you review with the customer.", de: "Das Workboard ist eine Arbeitsfläche, um einen Pardot-Prozess gemeinsam zu planen. Zieh bestehende Assets hinein — mit ihren echten Namen, direkt aus dem Audit — oder skizziere neue, die du erst noch bauen musst. Verknüpfe die Logik, speichere das Board und öffne es wieder, wann immer ihr es mit dem Kunden durchgeht." },
    "wb.cap": { en: "a process on the Workboard — real and planned assets, wired into one logic you can save and revisit", de: "ein Prozess auf dem Workboard — echte und geplante Assets, zu einer Logik verknüpft, die du speichern und wieder aufrufen kannst" },

    "wb.f_eyebrow": { en: "what it's for", de: "wofür es da ist" },
    "wb.f_h": { en: "A shared picture before anything is built.", de: "Ein gemeinsames Bild, bevor irgendetwas gebaut wird." },
    "wb.f_lead": { en: "Pardot processes are hard to talk through in the abstract. The Workboard turns that conversation into something you and the client can see, change and agree on — then keep as the reference while it gets built.", de: "Pardot-Prozesse lassen sich abstrakt nur schwer besprechen. Das Workboard macht aus diesem Gespräch etwas, das du und der Kunde sehen, ändern und gemeinsam festlegen könnt — und das als Referenz bleibt, während es gebaut wird." },
    "wb.f1_h": { en: "Real or planned assets", de: "Echte oder geplante Assets" },
    "wb.f1_p": { en: "Add existing Pardot assets with their correct names, pulled from the audit — or add new, planned components specified by type, for the pieces that don't exist yet.", de: "Füge bestehende Pardot-Assets mit ihren korrekten Namen aus dem Audit hinzu — oder lege neue, geplante Komponenten nach Typ an, für die Teile, die es noch nicht gibt." },
    "wb.f2_h": { en: "Build the logic", de: "Die Logik bauen" },
    "wb.f2_p": { en: "Connect the cards with decisions, waits, branches and stops — the whole flow, laid out the way you'd actually explain it at the table.", de: "Verbinde die Karten mit Entscheidungen, Wartezeiten, Verzweigungen und Stopps — den ganzen Ablauf, so angeordnet, wie du ihn am Tisch tatsächlich erklären würdest." },
    "wb.f3_h": { en: "Saved &amp; ready to review", de: "Gespeichert &amp; bereit zum Review" },
    "wb.f3_p": { en: "Every board is saved, so you can come back to it in the next session with the customer — and extend it with notes and screenshots as the plan firms up.", de: "Jedes Board wird gespeichert — du kommst im nächsten Termin mit dem Kunden darauf zurück und erweiterst es mit Notizen und Screenshots, während der Plan konkreter wird." },

    "wb.w_eyebrow": { en: "where it fits", de: "wo es sich einfügt" },
    "wb.w_h": { en: "Next to the processes it describes.", de: "Direkt neben den Prozessen, die es beschreibt." },
    "wb.w_lead": { en: "The Workboard lives inside parAdots, alongside the Engagement Studio view and process discovery — so planning happens in the same place you read the real org. Use it to lay out a new flow from scratch, or to reconstruct and verify an Engagement Studio program you want to walk through with the client.", de: "Das Workboard steckt direkt in parAdots, neben der Engagement-Studio-Ansicht und der Prozesserkennung — Planung passiert also am selben Ort, an dem du die echte Org liest. Nutze es, um einen neuen Ablauf von Grund auf zu entwerfen oder ein Engagement-Studio-Programm zu rekonstruieren und zu prüfen, das du mit dem Kunden durchgehen willst." },
    "wb.w_payoff": { en: "One board the client has seen and agreed to — ready before a single asset is built.", de: "Ein Board, das der Kunde gesehen und freigegeben hat — fertig, bevor ein einziges Asset gebaut ist." },
    "wb.w_btn1": { en: "See Engagement Studio", de: "Zum Engagement Studio" },
    "wb.w_btn2": { en: "Get in touch", de: "Kontakt" },

    // ---- install ----
    "ins.eyebrow": { en: "installation", de: "installation" },
    "ins.h1": { en: "Get parAdots running.", de: "parAdots zum Laufen bringen." },
    "ins.lead": { en: "parAdots runs entirely on your own machine — no cloud service, no database to host. You need Python 3.10+ and Google Chrome. The package ships with one-click launchers, so the command line is optional.", de: "parAdots läuft vollständig auf deinem eigenen Rechner — ohne Cloud-Dienst, ohne eigene Datenbank. Du brauchst nur Python 3.10+ und Google Chrome. Das Paket bringt 1-Klick-Starter mit, die Kommandozeile ist also optional." },

    "ins.dl_eyebrow": { en: "download", de: "download" },
    "ins.dl_h": { en: "Download the package", de: "Paket herunterladen" },
    "ins.dl_p": { en: "The ZIP contains everything, plus a synthetic demo org so the dashboard works immediately — explore the whole interface before connecting any real account.", de: "Das ZIP-Archiv enthält alles Nötige, dazu eine synthetische Demo-Org, damit das Dashboard sofort läuft — so kannst du die komplette Oberfläche ausprobieren, bevor du ein echtes Konto verbindest." },
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
    "ins.ms_steps_h": { en: "Setup — identical on Mac and Windows", de: "Einrichtung — auf Mac und Windows identisch" },
    "ins.ms_1": { en: "Download or clone the parAdots repository.", de: "parAdots-Repository herunterladen oder klonen." },
    "ins.ms_2": { en: "Install the Python dependencies.", de: "Python-Abhängigkeiten installieren." },
    "ins.ms_3": { en: "Install the browser Playwright uses.", de: "Den von Playwright genutzten Browser installieren." },
    "ins.ms_4": { en: 'Copy the config template to <code>configs/your-org.env</code> and fill in your credentials.', de: 'Konfigurationsvorlage nach <code>configs/your-org.env</code> kopieren und Zugangsdaten eintragen.' },
    "ins.ms_5": { en: "Select the org you want to audit.", de: "Die Org auswählen, die du auditieren willst." },
    "ins.ms_6": { en: 'Run the audit <span class="muted">(add <code>--no-sf</code> to skip Salesforce)</span>.', de: 'Audit starten <span class="muted">(<code>--no-sf</code> überspringt Salesforce)</span>.' },
    "ins.ms_7": { en: 'Open the viewer, then browse to <code>http://localhost:8765</code>.', de: 'Viewer öffnen, dann <code>http://localhost:8765</code> aufrufen.' },
    "ins.ms_mac_h": { en: "macOS", de: "macOS" },
    "ins.ms_mac": { en: 'Install Python via Homebrew (<code>brew install python@3.13</code>) or from python.org. Create and activate the virtual environment with <code>python3 -m venv .venv</code> and <code>source .venv/bin/activate</code>.', de: 'Python über Homebrew (<code>brew install python@3.13</code>) oder von python.org installieren. Virtuelle Umgebung mit <code>python3 -m venv .venv</code> und <code>source .venv/bin/activate</code> anlegen und aktivieren.' },
    "ins.ms_win_h": { en: "Windows", de: "Windows" },
    "ins.ms_win": { en: 'Install Python from python.org (tick „Add Python to PATH“) or via <code>winget</code>. In PowerShell, activate the venv with <code>.venv\\Scripts\\Activate.ps1</code>. Make sure Chrome is installed.', de: 'Python von python.org installieren („Add Python to PATH" anhaken) oder über <code>winget</code>. In PowerShell die venv mit <code>.venv\\Scripts\\Activate.ps1</code> aktivieren. Chrome muss installiert sein.' },

    "ins.lic_eyebrow": { en: "license", de: "lizenz" },
    "ins.lic_h": { en: "Yours to use and build on.", de: "Frei nutzen und weiterentwickeln." },
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
