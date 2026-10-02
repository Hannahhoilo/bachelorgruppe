import { View, Text, Pressable, Linking } from "react-native";

const PROGRAM_DESCRIPTION_URL =
  "https://www.kristiania.no/globalassets/programbeskrivelser/hoyskole/2024/seit/bachelor-i-informasjonsteknologi-frontend-og-mobilutvikling-kull-2024.pdf";

const BACHELOR_PROJECT_URL = "https://www.kristiania.no/bachelorprosjekt/";

type Item = { label?: string; text: string };
type InfoSection = { title: string; items: Item[] };

const sections: InfoSection[] = [
  {
    title: "Hva er bachelorprosjektet?",
    items: [
      { text: "Avsluttende prosjekt for sisteårsstudenter i IT" },
      {
        text: "Studentene løser en reell IT-utfordring for en bedrift eller oppdragsgiver",
      },
      {
        text: "Formålet er praktisk erfaring og bruk av teoretisk kunnskap, og at oppdragsgiver får en verdifull løsning",
      },
    ],
  },
  {
    title: "Nøkkelfakta",
    items: [
      {
        label: "Omfang:",
        text: "22,5 studiepoeng, tilsvarende 3-4 dagers arbeid i uken",
      },
      { label: "Periode:", text: "Januar til mai" },
      {
        label: "Oppdrag:",
        text: "Oppdragsgiver gir studentene en oppgave, og målene utformes sammen",
      },
      {
        label: "Ansvar:",
        text: "Studentene har ikke økonomisk, juridisk eller produktmessig ansvar, og får ikke betaling",
      },
    ],
  },
  {
    title: "Oppdragsgivers rolle",
    items: [
      {
        text: "Stiller med en ekstern veileder som følger opp og gir faglige råd",
      },
      {
        text: "Frigjør arbeidsplass 3-4 dager i uken, med nødvendig maskin- og programvare",
      },
      {
        text: "Eier sluttproduktet, mens studentene beholder rettighetene til bachelorrapporten",
      },
    ],
  },
  {
    title: "Kristianias rolle",
    items: [
      { text: "Stiller med en intern veileder som støtter metode og teori" },
      {
        text: "Evaluering skjer på grunnlag av prosjektrapport, teknisk leveranse og muntlig presentasjon",
      },
    ],
  },
  {
    title: "Praktisk",
    items: [
      {
        text: "Studenter og oppdragsgiver må signere en digital kontrakt fra Kristiania, så snart som mulig",
      },
      {
        text: "Prosjektet følges opp av både intern og ekstern veileder gjennom hele perioden",
      },
    ],
  },
];

function Bullet({ label, text }: Item) {
  return (
    <View className="flex-row mb-2">
      <Text className="text-brand font-bold mr-2 leading-6">•</Text>
      <Text className="flex-1 text-gray-700 leading-6">
        {label ? (
          <Text className="font-bold text-primary">{label} </Text>
        ) : null}
        {text}
      </Text>
    </View>
  );
}

export default function ProgramInfoSection() {
  return (
    <View className="p-6 bg-soft">
      <View className="w-full max-w-4xl self-center">
        <Text className="text-xl font-bold text-center mb-3 text-primary">
          Om studieprogrammet
        </Text>
        <Text className="text-gray-700 text-center leading-6 mb-6">
          Bachelor i Informasjonsteknologi– frontend- og mobilutvikling er et
          180 studiepoengs studium ved Høyskolen Kristiania. Studiet gir bred
          kunnskap innen webutvikling, mobilapputvikling, design og
          programmering, og avsluttes med et bachelorprosjekt i samarbeid med en
          ekstern bedrift.
        </Text>

        <View className="flex-row flex-wrap -mx-3 mb-4">
          {sections.map((section) => (
            <View key={section.title} className="w-1/2 px-3 mb-6">
              <Text className="text-lg font-bold text-primary mb-3">
                {section.title}
              </Text>
              {section.items.map((item) => (
                <Bullet key={item.text} label={item.label} text={item.text} />
              ))}
            </View>
          ))}
        </View>

        <View className="gap-3 items-center">
          <Pressable
            onPress={() => Linking.openURL(PROGRAM_DESCRIPTION_URL)}
            className="bg-primary rounded-lg px-6 py-3 transition-transform duration-150 ease-out hover:scale-105 active:opacity-80 w-full max-w-xs"
          >
            <Text className="text-lime-200 font-semibold text-center">
              Les hele programbeskrivelsen
            </Text>
          </Pressable>

          <Pressable
            onPress={() => Linking.openURL(BACHELOR_PROJECT_URL)}
            className="bg-primary rounded-lg px-6 py-3 transition-transform duration-150 ease-out hover:scale-105 active:opacity-80 w-full max-w-xs"
          >
            <Text className="text-lime-200 font-semibold text-center">
              Om bachelorprosjektet
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
