export type Course = {
  name: string;
  credits: number;
  description: string;
  url: string;
};

export type Semester = {
  number: number;
  courses: Course[];
};

export const studyPlan: Semester[] = [
  {
    number: 1,
    courses: [
      {
        name: "Introduksjon til programmering",
        credits: 7.5,
        description:
          "Grunnleggende programmeringskonsepter som variabler, løkker, funksjoner og betingelser, med praktisk trening i et programmeringsspråk.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pgr102/introduksjon-til-programmering?year=2025&period=Fall&_gl=1*1trxqsx*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Databaser",
        credits: 7.5,
        description:
          "Design og bruk av relasjonsdatabaser, SQL-spørringer, normalisering og datamodellering.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/db1102/databaser?year=2025&period=Fall&_gl=1*q5h2o9*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Digital teknologi",
        credits: 7.5,
        description:
          "Oversikt over sentrale digitale teknologier og hvordan de påvirker samfunn og næringsliv.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/tk1104/digital-teknologi?year=2025&period=Fall&_gl=1*y883op*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Kreativt webprosjekt",
        credits: 7.5,
        description:
          "Praktisk prosjektarbeid der grunnleggende webteknologier (HTML, CSS, JavaScript) brukes til å bygge en enkel nettside.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pro105/kreativt-webprosjekt?year=2025&period=Fall&_gl=1*y883op*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
    ],
  },
  {
    number: 2,
    courses: [
      {
        name: "Objektorientert programmering",
        credits: 15,
        description:
          "Videregående programmering med fokus på objektorienterte prinsipper som klasser, arv, polymorfi og innkapsling.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pgr112/objektorientert-programmering?year=2026&period=Spring&_gl=1*y883op*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Informasjonssikkerhet",
        credits: 7.5,
        description:
          "Grunnleggende prinsipper for sikker systemutvikling, trusselbilder og personvern.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/tk2100/informasjonssikkerhet?year=2026&period=Spring&_gl=1*y883op*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Etikk, samfunnsansvar og bærekraft",
        credits: 7.5,
        description:
          "Etiske problemstillinger knyttet til teknologiutvikling, samfunnsansvar og bærekraftig praksis i IT-bransjen.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-ledelse-og-okonomi/bachelorniva/esb1100/etikk-samfunnsansvar-og-barekraft?year=2026&period=Spring&_gl=1*y883op*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
    ],
  },
  {
    number: 3,
    courses: [
      {
        name: "Webutvikling",
        credits: 15,
        description:
          "Videregående frontend- og backend-webutvikling, inkludert moderne rammeverk, API-er og fullstack-arkitektur.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/ds3103/webutvikling?year=2026&period=Fall&_gl=1*xnyzcd*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Interaksjonsdesign",
        credits: 7.5,
        description:
          "Prinsipper for brukersentrert design, prototyping, brukertesting og god UX-praksis.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/ds3302/interaksjonsdesign?year=2026&period=Fall&_gl=1*xnyzcd*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Android programmering",
        credits: 7.5,
        description:
          "Utvikling av native Android-applikasjoner, med fokus på Kotlin/Java og Android sitt utviklingsrammeverk.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pgr208/android-programmering?year=2026&period=Fall&_gl=1*xnyzcd*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        name: "Valgemne eller utveksling",
        credits: 30,
        description:
          "Studenter kan velge fordypningsemner eller reise på utveksling til en av høyskolens partnerinstitusjoner.",
        url: "LENKE_HER",
      },
    ],
  },
  {
    number: 5,
    courses: [
      {
        name: "iOS programmering",
        credits: 15,
        description:
          "Utvikling av native iOS-applikasjoner med Swift og Apple sitt utviklingsrammeverk.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pg5602/ios-programmering?year=2026&period=Fall&_gl=1*1k62s12*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Kryssplattform",
        credits: 7.5,
        description:
          "Utvikling av mobilapplikasjoner som kjører på både iOS og Android med samme kodebase, ved bruk av React Native og Expo.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/tds200/kryssplattform?year=2026&period=Fall&_gl=1*yrdxwl*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
      {
        name: "Smidig prosjekt",
        credits: 7.5,
        description:
          "Praktisk gruppeprosjekt der smidige metoder som Scrum benyttes gjennom hele utviklingsprosessen.",
        url: "https://www.kristiania.no/studieportal/fakultet-for-helse-og-teknologi/bachelorniva/pro203/smidig-prosjekt?year=2026&period=Fall&_gl=1*1k62s12*_up*MQ..*_ga*MzMwMDMyNzM5LjE3OTA1MTc1MjA.*_ga_QT9WL23P1M*czE3OTA1MTc1MTQkbzEkZzAkdDE3OTA1MTc1MTQkajYwJGwwJGgyMDMwOTAyOTk4",
      },
    ],
  },
  {
    number: 6,
    courses: [
      {
        name: "Bachelorprosjekt",
        credits: 22.5,
        description:
          "Avsluttende, selvstendig prosjekt der studentene anvender kunnskap fra hele studiet på en reell problemstilling, ofte i samarbeid med en ekstern bedrift.",
        url: "LENKE_HER",
      },
      {
        name: "Undersøkelsesmetoder",
        credits: 7.5,
        description:
          "Metoder for datainnsamling og analyse relevant for gjennomføring av bachelorprosjektet.",
        url: "LENKE_HER",
      },
    ],
  },
];
