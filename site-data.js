// Site content.
// The knowledge graph (loader + hero) is built ONLY from "areas" and "links" below —
// it describes what you know, so adding/removing projects never changes it.
// "projects" drive the work list, the case-study pages and the "used in" lines in Skills.
window.SITE_DATA = {
  areas: [
    { id: 'backend', label: 'Backend', color: '#ff8a1f', techs: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'LINQ', 'MediatR', 'REST APIs', 'Java', 'Python'] },
    { id: 'frontend', label: 'Front-end', color: '#ff2d87', techs: ['Blazor', 'React', 'TypeScript', 'Tailwind', 'Avalonia', 'Razor Pages', 'HTMX'] },
    { id: 'data', label: 'Data & delivery', color: '#7b4dff', techs: ['SQL Server', 'PostgreSQL', 'SQLite', 'Docker', 'Azure', 'GitHub Actions'] },
    { id: 'practices', label: 'Practices', color: '#1fd68a', techs: ['Clean Architecture', 'CQRS', 'TDD', 'xUnit', 'Git'] },
    { id: 'ai', label: 'AI', color: '#14c4f0', techs: ['OpenAI', 'Claude', 'RAG', 'Tool-calling', 'Embeddings'] }
  ],
  // [from, to] — "works with" relationships between technologies
  links: [
    ['C#', '.NET'], ['.NET', 'ASP.NET Core'], ['ASP.NET Core', 'EF Core'], ['LINQ', 'EF Core'],
    ['EF Core', 'SQL Server'], ['EF Core', 'PostgreSQL'], ['EF Core', 'SQLite'],
    ['ASP.NET Core', 'REST APIs'], ['REST APIs', 'React'], ['React', 'TypeScript'], ['React', 'Tailwind'], ['ASP.NET Core', 'Razor Pages'],
    ['.NET', 'Blazor'], ['.NET', 'Avalonia'],
    ['MediatR', 'CQRS'], ['CQRS', 'Clean Architecture'], ['TDD', 'xUnit'], ['xUnit', 'C#'],
    ['GitHub Actions', 'Docker'], ['Docker', 'Azure'], ['Git', 'GitHub Actions'],
    ['RAG', 'Embeddings'], ['Embeddings', 'PostgreSQL'], ['Tool-calling', 'OpenAI'], ['Tool-calling', 'Claude'], ['C#', 'OpenAI'],
    ['Python', 'HTMX']
  ],
  projects: [
    {
      slug: 'techquiz', name: 'TechQuiz', repo: 'bartoszclapinski/TechQuiz', demo: 'https://techquiz-web.onrender.com', image: 'assets/techquiz/dashboard.png',
      // CORS-readable health checks, one per Render service (the SPA and its separate API).
      health: ['https://techquiz-web.onrender.com/healthz', 'https://techquiz-api-j4kr.onrender.com/health'],
      pl: {
        "kind": "Aplikacja webowa full-stack",
        "status": "Działa",
        "short": "Sprawdzanie wiedzy technicznej z pytaniami generowanymi przez AI i powtórkami.",
        "tagline": "Platforma do sprawdzania wiedzy technicznej: pytania generowane przez AI, powtórki w odstępach i grywalizacja postępów.",
        "overview": "TechQuiz pozwala programistom sprawdzić, co naprawdę wiedzą o .NET, bazach danych, front-endzie i praktykach inżynierskich, i podtrzymać nawyk dzięki XP, codziennym seriom i wyliczanemu Skill IQ. AI generuje nowe pytania na żądanie, korzystając z własnego klucza API użytkownika, a każde wygenerowane pytanie trafia do wspólnej, publicznej puli.",
        "showcaseCaption": "Przejście przez aktualny projekt Momentum: strona startowa → logowanie → dashboard → kategorie → pytanie → wynik.",
        "stats": [
          {
            "value": "269",
            "label": "pytań na start"
          },
          {
            "value": "4",
            "label": "ścieżki nauki"
          },
          {
            "value": "18",
            "label": "kategorii"
          },
          {
            "value": "28",
            "label": "zapisanych decyzji (ADR)"
          }
        ],
        "features": [
          {
            "title": "Quiz z omówieniem",
            "text": "Wybierasz temat, odpowiadasz, potem przeglądasz każde pytanie z wyjaśnieniem."
          },
          {
            "title": "Powtórki w odstępach",
            "text": "Codzienna kolejka powtórek ważona trudnością i czasem od ostatniej odpowiedzi, z własnymi statystykami."
          },
          {
            "title": "Generator pytań AI",
            "text": "Claude na własnym kluczu użytkownika, za abstrakcją gotową na kolejnych dostawców."
          },
          {
            "title": "Pytania z kodem",
            "text": "Pytania z prawdziwym kodem w edytorze Monaco."
          },
          {
            "title": "Dashboard postępów",
            "text": "Seria, skuteczność, mocne kategorie i aktywność tygodniowa."
          },
          {
            "title": "Grywalizacja",
            "text": "XP, poziomy, codzienne serie i Skill IQ liczony z Twoich podejść."
          }
        ],
        "decisions": [
          "Użytkownicy używają własnych kluczy AI, szyfrowanych przez ASP.NET Core Data Protection.",
          "Access token w pamięci, refresh token w ciasteczku HttpOnly.",
          "Warstwy domeny i aplikacji pisane metodą TDD.",
          "Wdrożenie na Render + Neon, CI przy każdym pull requeście."
        ],
        "gallery": [
          {"src": "assets/techquiz/login.png", "title": "Logowanie", "caption": "Logowanie e-mailem albo konto demo jednym kliknięciem."},
          {"src": "assets/techquiz/dashboard.png", "title": "Dashboard", "caption": "Skill IQ, seria, skuteczność, postęp w kategoriach, aktywność i ostatnie podejścia."},
          {"src": "assets/techquiz/categories.png", "title": "Kategorie", "caption": "4 ścieżki i 18 tematów, do tego zadania z kodem."}
        ],
        "timeline": [
          {
            "phase": "Faza 0",
            "title": "Szkielet",
            "text": "Rozwiązanie w Clean Architecture i CI od pierwszego commita.",
            "status": "done"
          },
          {
            "phase": "Faza 1",
            "title": "MVP",
            "text": "Domena pisana testami, API, szkielet React, quiz, pierwsze wdrożenie.",
            "status": "done"
          },
          {
            "phase": "Faza 2",
            "title": "Dashboard i powtórki",
            "text": "Dashboard bento, historia, powtórki w odstępach, osiągnięcia.",
            "status": "done"
          },
          {
            "phase": "Faza 3",
            "title": "Integracja AI",
            "text": "Abstrakcja dostawców, szyfrowane klucze, generator, publiczna pula, zadania z kodem (lokalny sandbox Judge0).",
            "status": "done"
          },
          {
            "phase": "Faza 4",
            "title": "Szlif i start",
            "text": "Mobile, XP i Skill IQ, WCAG 2.1 AA, redesign Momentum, Render + Neon.",
            "status": "done"
          },
          {
            "phase": "Faza 5",
            "title": "Kolejni dostawcy",
            "text": "Natywne OpenAI, potem Gemini i OpenRouter, potem wzmocnienie logowania.",
            "status": "in progress"
          }
        ]
      },
      // Optional per-project personalisation — any project can use these fields.
      accent: ['#a78bfa', '#fbbf24'],
      url: 'techquiz-web.onrender.com',
      showcase: false,
      showcaseCaption: 'Live walkthrough of the current Momentum design: landing → sign in → dashboard → categories → a question → result.',
      // gallery items take either { src: 'image.png' } or { screen: '<name>' } for a live screen from the showcase component
      gallery: [
        { src: 'assets/techquiz/login.png', title: 'Sign in', caption: 'Email login or a one-click demo account.' },
        { src: 'assets/techquiz/dashboard.png', title: 'Dashboard', caption: 'Skill IQ, streak, accuracy, category progress, weekly activity and recent attempts.' },
        { src: 'assets/techquiz/categories.png', title: 'Categories', caption: '4 tracks and 18 topics, plus hands-on code challenges.' }
      ],
      tryIt: {
        label: 'C# BASICS · 3 / 10',
        question: 'Which access modifier makes a type visible only inside its own assembly?',
        options: ['private', 'internal', 'protected', 'public'],
        correct: 1,
        explanation: 'internal limits access to the same assembly. private is the containing type only, protected adds derived types, public is everywhere.'
      },
      timeline: [
        { phase: 'Phase 0', title: 'Skeleton', text: 'Clean Architecture solution and CI from the first commit.', status: 'done' },
        { phase: 'Phase 1', title: 'MVP', text: 'Domain built test-first, API, React shell, quiz flow, first deploy.', status: 'done' },
        { phase: 'Phase 2', title: 'Dashboard & review', text: 'Bento dashboard, history, spaced repetition, achievements.', status: 'done' },
        { phase: 'Phase 3', title: 'AI integration', text: 'Provider abstraction, encrypted BYOK, generator, public pool, code challenges (local Judge0 sandbox).', status: 'done' },
        { phase: 'Phase 4', title: 'Polish & launch', text: 'Mobile, XP and Skill IQ, WCAG 2.1 AA, Momentum redesign, Render + Neon.', status: 'done' },
        { phase: 'Phase 5', title: 'More providers', text: 'Native OpenAI, then Gemini and OpenRouter, then auth hardening.', status: 'in progress' }
      ],
      kind: 'Full-stack web app', status: 'Live', core: '.NET 9 · React 19 · PostgreSQL',
      tech: ['C#', 'ASP.NET Core', 'EF Core', 'MediatR', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Claude'],
      short: 'Testing technical knowledge, with AI-generated questions and spaced repetition.',
      tagline: 'A platform for testing technical knowledge, with AI-generated questions, spaced repetition and gamified progress.',
      overview: "TechQuiz lets developers check what they really know across .NET, databases, front-end and engineering practices, and keep the habit going with XP, daily streaks and a derived Skill IQ. AI generates new questions on demand using each user's own API key, and every generated question joins a shared public pool.",
      stats: [{ value: '269', label: 'seed questions' }, { value: '4', label: 'learning tracks' }, { value: '18', label: 'categories' }, { value: '28', label: 'decision records' }],
      features: [
        { title: 'Quiz flow with review', text: 'Pick a topic, answer, then review every question with an explanation.' },
        { title: 'Spaced repetition', text: 'A daily review queue weighted by difficulty and time since the last answer, with its own stats.' },
        { title: 'AI question generator', text: "Claude on each user's own key, behind a provider abstraction ready for more." },
        { title: 'Code questions', text: 'Questions with real code, shown in a Monaco editor.' },
        { title: 'Progress dashboard', text: 'Streak, accuracy, category strength and weekly activity.' },
        { title: 'Gamification', text: 'XP, levels, daily streaks and a Skill IQ computed from your attempts.' }
      ],
      layers: [
        { name: 'Domain', text: 'Entities and rules with zero framework dependencies, built test-first.' },
        { name: 'Application', text: 'CQRS handlers with MediatR and FluentValidation.' },
        { name: 'Infrastructure', text: 'EF Core 9 + PostgreSQL, Identity, AI providers.' },
        { name: 'API + Web', text: 'ASP.NET Core 9 Web API and a React 19 single-page app.' }
      ],
      decisions: [
        'Users bring their own AI keys, encrypted at rest with ASP.NET Core Data Protection.',
        'Access token kept in memory, refresh token in an HttpOnly cookie.',
        'Domain and application layers developed test-first.',
        'Deployed on Render + Neon, with CI on every pull request.'
      ],
      stack: [
        { group: 'Backend', items: ['ASP.NET Core 9', 'EF Core 9', 'MediatR', 'FluentValidation'] },
        { group: 'Frontend', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind'] },
        { group: 'Data & ops', items: ['PostgreSQL', 'Docker', 'Seq', 'GitHub Actions'] },
        { group: 'Testing', items: ['xUnit', 'FluentAssertions', 'NSubstitute'] }
      ]
    },
    {
      slug: 'coffer', name: 'Coffer', repo: 'bartoszclapinski/Coffer', demo: '', image: '',
      pl: {
        "kind": "Aplikacja desktopowa (Windows)",
        "status": "Wersja desktop gotowa",
        "short": "Finanse osobiste local-first z AI. Szyfrowane, prywatne, offline.",
        "tagline": "Finanse osobiste local-first z AI. Szyfrowane, prywatne, bez wymiany danych z firmami trzecimi.",
        "overview": "Coffer importuje wyciągi bankowe, kategoryzuje transakcje przy pomocy AI i pozwala zadawać pytania o własne pieniądze zwykłym językiem, a Twoje dane nigdy nie opuszczają komputera w postaci niezaszyfrowanej. Aplikacja na Windows jest gotowa do użytku osobistego.",
        "stats": [
          {
            "value": "100%",
            "label": "local-first"
          },
          {
            "value": "~780",
            "label": "testów automatycznych"
          },
          {
            "value": "PL/EN",
            "label": "dwa języki"
          },
          {
            "value": "6",
            "label": "projektów w solucji"
          }
        ],
        "features": [
          {
            "title": "Import wyciągów",
            "text": "Wyciągi parsowane przez rejestr parserów dla poszczególnych banków."
          },
          {
            "title": "Kategoryzacja AI",
            "text": "Tańsze modele etykietują hurtowo, mocniejsze prowadzą rozmowę."
          },
          {
            "title": "Rozmowa z danymi",
            "text": "Odpowiedzi przez tool-calling na lokalnej bazie."
          },
          {
            "title": "Wykrywanie anomalii",
            "text": "Podwójne obciążenia, skoki w kategoriach i brakujące płatności cykliczne."
          },
          {
            "title": "Budżety i cele",
            "text": "Budżety, prognozy, planowanie przepływów i doradca celów."
          },
          {
            "title": "Szyfrowany sejf",
            "text": "Hasło główne, fraza odzyskiwania i szyfrowane kopie zapasowe."
          }
        ],
        "decisions": [
          "Szyfrowanie SQLCipher, odblokowanie hasłem głównym z frazą odzyskiwania BIP39.",
          "Claude przez Microsoft.Extensions.AI, z redakcją danych osobowych przed każdym wywołaniem.",
          "Modele dobierane kosztem: tanie do etykiet, mądrzejsze do rozmowy.",
          "Testy parserów na wzorcowych plikach, wyczyszczonych własnym anonimizatorem CLI."
        ]
      },
      kind: 'Desktop app (Windows)', status: 'Desktop complete', core: '.NET 9 · Avalonia · EF Core',
      tech: ['C#', 'EF Core', 'Avalonia', 'SQLite', 'SQLCipher', 'Claude', 'Tool-calling'],
      short: 'Local-first personal finance with AI. Encrypted, private, offline.',
      tagline: 'Local-first personal finance with AI. Encrypted, private, with no third-party data exchange.',
      overview: 'Coffer imports bank statements, categorises transactions with AI and lets you ask questions about your own money in plain language, without your data ever leaving your machine unencrypted. The Windows desktop app is complete for personal use.',
      stats: [{ value: '100%', label: 'local-first' }, { value: '~780', label: 'automated tests' }, { value: 'PL/EN', label: 'two languages' }, { value: '6', label: 'projects in the solution' }],
      features: [
        { title: 'Statement import', text: 'Bank statements parsed through a registry of bank-specific parsers.' },
        { title: 'AI categorisation', text: 'Cheap models label in batches; stronger models handle chat.' },
        { title: 'Chat with your data', text: 'Questions answered via tool-calling against the local database.' },
        { title: 'Anomaly detection', text: 'Duplicate charges, category spikes and missing recurring payments.' },
        { title: 'Budgets and goals', text: 'Budgets, forecasts, cash-flow planning and a goal-based advisor.' },
        { title: 'Encrypted vault', text: 'Master password, recovery seed and encrypted backups.' }
      ],
      layers: [
        { name: 'Core', text: 'Domain and interfaces, no UI.' },
        { name: 'Infrastructure', text: 'EF Core + SQLite/SQLCipher, parsers, AI, secure storage.' },
        { name: 'Application', text: 'ViewModels and use cases, framework-agnostic.' },
        { name: 'Desktop', text: 'Avalonia 11 with CommunityToolkit.Mvvm.' }
      ],
      decisions: [
        'Encrypted at rest with SQLCipher, unlocked by a master password with a BIP39 recovery seed.',
        'Claude via Microsoft.Extensions.AI, with PII redaction before every call.',
        'Models chosen by cost: cheap for batch labelling, smarter for conversation.',
        'Golden-file parser tests on statements cleaned by a custom anonymiser CLI.'
      ],
      stack: [
        { group: 'App', items: ['.NET 9', 'C# 13', 'Avalonia 11', 'CommunityToolkit.Mvvm'] },
        { group: 'Data', items: ['EF Core 9', 'SQLite', 'SQLCipher', 'PdfPig'] },
        { group: 'AI', items: ['Anthropic SDK', 'Microsoft.Extensions.AI'] },
        { group: 'Testing', items: ['xUnit', 'FluentAssertions', 'FsCheck'] }
      ]
    },
    {
      slug: 'doc-flow-hub', name: 'DocFlowHub', repo: 'bartoszclapinski/Doc-Flow-Hub', demo: 'https://docflowhub-demo.onrender.com', image: '',
      health: ['https://docflowhub-demo.onrender.com/healthz'],
      pl: {
        "kind": "Aplikacja webowa",
        "status": "Demo na żywo (tylko odczyt)",
        "short": "Zarządzanie dokumentami dla zespołów, z podsumowaniami AI i porównaniem wersji.",
        "tagline": "Zarządzanie dokumentami dla zespołów, z podsumowaniami AI i porównywaniem wersji przez AI.",
        "overview": "DocFlowHub porządkuje dokumenty w projekty i zagnieżdżone foldery, wersjonuje każdą zmianę i udostępnia pracę zespołom z uprawnieniami opartymi na rolach. Po wgraniu dokumentu AI pisze podsumowanie, a między wersjami wyjaśnia, co się zmieniło.",
        "stats": [
          {
            "value": "∞",
            "label": "zagnieżdżanie folderów"
          },
          {
            "value": "2",
            "label": "funkcje AI"
          },
          {
            "value": "RBAC",
            "label": "uprawnienia zespołów"
          },
          {
            "value": "3",
            "label": "warstwy architektury"
          }
        ],
        "features": [
          {
            "title": "Projekty i foldery",
            "text": "Dowolne zagnieżdżanie, nawigacja w drzewie i przeciąganie."
          },
          {
            "title": "Automatyczne wersje",
            "text": "Każde wgranie wersjonowane, ze śledzeniem zmian."
          },
          {
            "title": "Podsumowania AI",
            "text": "Generowane przy wgraniu dokumentu."
          },
          {
            "title": "Porównanie wersji przez AI",
            "text": "Zwykłym językiem: co się zmieniło między wersjami."
          },
          {
            "title": "Zespoły",
            "text": "Zaproszenia, role i szczegółowe udostępnianie."
          },
          {
            "title": "Panel administratora",
            "text": "Użycie, koszty AI i monitoring bezpieczeństwa."
          }
        ],
        "decisions": [
          "Pliki w Azure Blob Storage, metadane w SQL Server.",
          "Odpowiedzi AI cache’owane, żeby ograniczyć koszty API.",
          "Publiczne demo tylko do odczytu jako jeden kontener Docker z SQLite.",
          "Wdrożenie z mastera dopiero po przejściu CI."
        ]
      },
      kind: 'Web app', status: 'Live demo (read-only)', core: '.NET 10 · SQL Server · Azure',
      tech: ['C#', 'ASP.NET Core', 'EF Core', 'Razor Pages', 'SQL Server', 'Azure', 'Docker', 'OpenAI', 'Claude'],
      short: 'Document management for teams, with AI summaries and version comparison.',
      tagline: 'Document management for teams, with AI summaries and AI version comparison.',
      overview: 'DocFlowHub organises documents into projects and nested folders, versions every change and shares work across teams with role-based permissions. When you upload a document, AI writes a summary. Between versions, it explains what changed.',
      stats: [{ value: '∞', label: 'folder nesting' }, { value: '2', label: 'AI features' }, { value: 'RBAC', label: 'team permissions' }, { value: '3', label: 'architecture layers' }],
      features: [
        { title: 'Projects and folders', text: 'Unlimited nesting with tree navigation and drag-and-drop.' },
        { title: 'Automatic versioning', text: 'Every upload versioned, with change tracking.' },
        { title: 'AI summaries', text: 'Generated when a document is uploaded.' },
        { title: 'AI version comparison', text: 'A plain-language explanation of what changed between versions.' },
        { title: 'Teams', text: 'Invitations, roles and granular sharing.' },
        { title: 'Admin dashboard', text: 'Usage, AI cost and security monitoring.' }
      ],
      layers: [
        { name: 'Core', text: 'Domain models and service interfaces.' },
        { name: 'Infrastructure', text: 'EF Core + SQL Server, Azure Blob Storage, OpenAI + Anthropic.' },
        { name: 'Web', text: 'Razor Pages with Bootstrap 5 and ASP.NET Core Identity.' }
      ],
      decisions: [
        'Files in Azure Blob Storage, metadata in SQL Server.',
        'AI responses cached to keep API costs down.',
        'Read-only public demo as a single Docker container with SQLite.',
        'Deployed from master only after CI passes.'
      ],
      stack: [
        { group: 'Backend', items: ['ASP.NET Core (.NET 10)', 'EF Core', 'Identity'] },
        { group: 'Data & cloud', items: ['SQL Server', 'Azure Blob Storage', 'Docker'] },
        { group: 'AI', items: ['OpenAI SDK', 'Anthropic SDK', 'Model router'] },
        { group: 'Frontend', items: ['Razor Pages', 'Bootstrap 5'] }
      ]
    },
    {
      slug: 'blocksmith', name: 'BlockSmith', repo: 'bartoszclapinski/BlockSmith', demo: 'https://bartoszclapinski.github.io/BlockSmith/', image: 'assets/blocksmith/dashboard.png',
      pl: {
        "kind": "Węzeł blockchain + sieć P2P",
        "status": "Wszystkie 4 fazy gotowe",
        "short": "Blockchain i kryptowaluta zbudowane od zera w Javie.",
        "tagline": "Blockchain i kryptowaluta zbudowane od zera w Javie, żeby zrozumieć, jak to naprawdę działa.",
        "overview": "To nie jest łańcuch z tutoriala. BlockSmith to działająca kryptowaluta: kopanie Proof-of-Work z regulacją trudności, transakcje podpisywane kluczami, które nigdy nie opuszczają przeglądarki, sieć peer-to-peer z wyborem najcięższego łańcucha, opłaty i rynek opłat, mała maszyna wirtualna kontraktów, baza H2 i panel z eksploratorem bloków. Strona projektu ma kopanie bloku w przeglądarce i nagrane demo prawdziwego węzła.",
        "stats": [
          { "value": "483", "label": "testy JUnit, wszystkie zielone" },
          { "value": "28", "label": "sprintów" },
          { "value": "~10.9k", "label": "linii Javy (+13.3k w testach)" },
          { "value": "0", "label": "bibliotek blockchain" }
        ],
        "features": [
          { "title": "Proof-of-Work", "text": "Kopanie SHA-256 z 256-bitowym targetem i regulacją trudności co 10 bloków." },
          { "title": "Portfele i podpisy", "text": "Klucze ECDSA tworzone i szyfrowane w przeglądarce (PBKDF2 + AES-GCM); węzeł nigdy nie trzyma klucza prywatnego." },
          { "title": "Wybór łańcucha", "text": "Bloki konkurencyjne na bocznych gałęziach, reorganizacja na łańcuch z największą pracą, cofnięte transakcje wracają do mempoola." },
          { "title": "Opłaty", "text": "Bloki wypełniane według opłaty za bajt, replace-by-fee i szacowanie opłat." },
          { "title": "Sieć P2P", "text": "Gniazda TCP, wykrywanie węzłów, rozgłaszanie bloków i transakcji, synchronizacja przez block locator." },
          { "title": "Kontrakty", "text": "Stosowa VM skryptów: hashlock, timelock, multisig M-z-N podpisywany w przeglądarkach członków." }
        ],
        "decisions": [
          "Bez bibliotek blockchain, tylko kryptografia z JDK.",
          "Po restarcie każdy blok przechodzi pełną walidację, zanim trafi do łańcucha.",
          "Kopanie poza blokadą łańcucha: API i węzły nie czekają na koparkę.",
          "Nagrane demo ma test, który nie przejdzie, gdy demo zostanie w tyle za API."
        ],
        "gallery": [
          { "src": "assets/blocksmith/dashboard.png", "title": "Panel węzła", "caption": "Łańcuch, akcje, saldo i węzły; nagranie prawdziwej sesji." },
          { "src": "assets/blocksmith/site.png", "title": "Strona projektu", "caption": "Kopanie bloku w przeglądarce tą samą pętlą Proof-of-Work co węzeł." }
        ]
      },
      kind: 'Blockchain node + P2P network', status: 'All 4 phases complete', core: 'Java 20 · Javalin · H2 · JUnit 5',
      tech: ['Java', 'Javalin'],
      short: 'A blockchain and cryptocurrency built from scratch in Java.',
      tagline: 'A blockchain and cryptocurrency built from scratch in Java, to understand how it really works.',
      overview: 'Not a tutorial chain. BlockSmith is a working cryptocurrency: Proof-of-Work mining with difficulty retargeting, transactions signed with keys that never leave the browser, a peer-to-peer network that follows the chain with the most work, fees and a fee market, a small contract VM, an H2 store and a dashboard with a block explorer. The project page lets you mine a block in your browser and replay a recorded session of a real node.',
      stats: [{ value: '483', label: 'JUnit tests, all green' }, { value: '28', label: 'sprints' }, { value: '~10.9k', label: 'lines of Java (+13.3k in tests)' }, { value: '0', label: 'blockchain libraries' }],
      features: [
        { title: 'Proof-of-Work', text: 'SHA-256 mining with a 256-bit target, retargeted every 10 blocks.' },
        { title: 'Wallets and signatures', text: 'ECDSA keys created and encrypted in the browser (PBKDF2 + AES-GCM); the node never holds a private key.' },
        { title: 'Fork choice', text: 'Competing blocks kept on side branches, reorganisation onto the chain with the most work, undone transactions back to the mempool.' },
        { title: 'Fees', text: 'Blocks filled by fee per byte, replace-by-fee and fee estimation.' },
        { title: 'P2P network', text: 'TCP sockets, peer discovery, block and transaction gossip, block-locator sync.' },
        { title: 'Contracts', text: 'Stack-based script VM: hashlock, timelock, M-of-N multisig signed in the members\' browsers.' }
      ],
      gallery: [
        { src: 'assets/blocksmith/dashboard.png', title: 'Node dashboard', caption: 'Chain, actions, balance and peers; a recording of a real session.' },
        { src: 'assets/blocksmith/site.png', title: 'Project page', caption: 'Mine a block in your browser with the same Proof-of-Work loop as the node.' }
      ],
      layers: [
        { name: 'core', text: 'Block, Blockchain, Transaction, Wallet, fork choice.' },
        { name: 'network', text: 'Node, Peer, PeerManager, JSON message protocol.' },
        { name: 'api', text: 'Javalin REST API, dashboard and block explorer.' },
        { name: 'storage', text: 'Embedded H2; every block revalidated on restart.' },
        { name: 'contract', text: 'ScriptVM, Contract, MultiSigWallet.' }
      ],
      decisions: [
        "No blockchain libraries, only the JDK's own cryptography.",
        'On restart every block is replayed through full validation before it joins the chain.',
        'Mining runs outside the chain lock, so the API and peers never wait for it.',
        'The recorded demo has a test that fails when it falls behind the API.'
      ],
      stack: [
        { group: 'Language', items: ['Java 20', 'Maven'] },
        { group: 'Crypto', items: ['JCA', 'SHA-256', 'ECDSA', 'Web Crypto'] },
        { group: 'Network & API', items: ['TCP sockets', 'Gson', 'Javalin'] },
        { group: 'Data & testing', items: ['H2', 'JUnit 5'] }
      ]
    },
    {
      slug: 'lotterylab', name: 'Lottery Lab', repo: 'bartoszclapinski/LotteryLAB', demo: '', image: '',
      pl: {
        "kind": "Aplikacja webowa + REST API",
        "status": "Open source · MIT",
        "short": "Analiza statystyczna losowań: testowanie losowości, nie przewidywanie.",
        "tagline": "Analiza statystyczna losowań: testowanie losowości, a nie przewidywanie wyników.",
        "overview": "Lottery Lab to platforma badawczo-edukacyjna. Importuje historyczne losowania Lotto i przeprowadza na nich prawdziwe testy statystyczne. Nie chodzi o przewidywanie liczb, tylko o pokazanie na danych, że się nie da.",
        "stats": [
          {
            "value": "78",
            "label": "testów automatycznych"
          },
          {
            "value": "~9.4k",
            "label": "zaimportowanych losowań"
          },
          {
            "value": "5",
            "label": "metod statystycznych"
          },
          {
            "value": "PL/EN",
            "label": "dwa języki"
          }
        ],
        "features": [
          {
            "title": "Analiza częstości",
            "text": "Gorące i zimne liczby na tle rozkładu oczekiwanego."
          },
          {
            "title": "Testy losowości",
            "text": "Chi-kwadrat, Kołmogorow-Smirnow, test serii, autokorelacja."
          },
          {
            "title": "Wykrywanie wzorców",
            "text": "Kolejne liczby, sekwencje i analiza cyfr."
          },
          {
            "title": "Mapy korelacji",
            "text": "Które liczby wypadają razem i jak często."
          },
          {
            "title": "Entropia Shannona",
            "text": "Jedna miara nieprzewidywalności."
          },
          {
            "title": "REST API",
            "text": "Każda analiza dostępna przez HTTP, z dokumentacją OpenAPI."
          }
        ],
        "decisions": [
          "Jasne zastrzeżenie: narzędzie edukacyjne, nie predyktor.",
          "HTMX do aktualizacji na żywo bez aplikacji SPA.",
          "SQLite z migracjami Alembic.",
          "Dwujęzyczny interfejs od pierwszego dnia."
        ]
      },
      kind: 'Web app + REST API', status: 'Open source · MIT', core: 'Python · FastAPI · SciPy',
      tech: ['Python', 'FastAPI', 'HTMX', 'SQLite'],
      short: 'Statistical analysis of lottery draws: testing randomness, not predicting it.',
      tagline: 'Statistical analysis of lottery draws: testing randomness, not predicting it.',
      overview: "Lottery Lab is a research and teaching platform. It imports historical Polish Lotto draws and runs real statistical tests on them. The point isn't to predict numbers. It's to show, with data, that you can't.",
      stats: [{ value: '78', label: 'automated tests' }, { value: '~9.4k', label: 'draws imported' }, { value: '5', label: 'statistical methods' }, { value: 'PL/EN', label: 'two languages' }],
      features: [
        { title: 'Frequency analysis', text: 'Hot and cold numbers against the expected distribution.' },
        { title: 'Randomness tests', text: 'Chi-square, Kolmogorov-Smirnov, runs test, autocorrelation.' },
        { title: 'Pattern detection', text: 'Consecutive numbers, sequences and digit analysis.' },
        { title: 'Correlation heatmaps', text: 'Which numbers appear together, and how often.' },
        { title: 'Shannon entropy', text: 'A single measure of unpredictability.' },
        { title: 'REST API', text: 'Every analysis available over HTTP, with OpenAPI docs.' }
      ],
      layers: [
        { name: 'data_acquisition', text: 'Automatic imports of historical draws.' },
        { name: 'analysis', text: 'NumPy, Pandas and SciPy modules.' },
        { name: 'api', text: 'FastAPI endpoints with OpenAPI.' },
        { name: 'templates', text: 'Jinja2 + HTMX + Plotly.js.' }
      ],
      decisions: [
        'A clear disclaimer: a teaching tool, not a predictor.',
        'HTMX for live updates without a single-page app.',
        'SQLite with Alembic migrations.',
        'Bilingual interface from day one.'
      ],
      stack: [
        { group: 'Backend', items: ['Python 3.11', 'FastAPI', 'SQLAlchemy'] },
        { group: 'Analysis', items: ['NumPy', 'Pandas', 'SciPy'] },
        { group: 'Frontend', items: ['Jinja2', 'HTMX', 'Plotly.js'] },
        { group: 'Testing', items: ['pytest', 'pytest-cov'] }
      ]
    }
  ]
};
