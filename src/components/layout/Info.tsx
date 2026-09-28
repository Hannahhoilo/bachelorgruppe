import { View, Text, Pressable, Linking } from "react-native";

const PROGRAM_DESCRIPTION_URL =
  "https://www.kristiania.no/globalassets/programbeskrivelser/hoyskole/2024/seit/bachelor-i-informasjonsteknologi-frontend-og-mobilutvikling-kull-2024.pdf";

const BACHELOR_PROJECT_URL = "https://www.kristiania.no/bachelorprosjekt/";

export default function ProgramInfoSection() {
  return (
    <View className="p-6 bg-soft">
      <Text className="text-xl font-bold text-center mb-3 text-primary">
        Om studieprogrammet
      </Text>
      <Text className="text-gray-700 text-center leading-6 mb-4">
        Bachelor i informasjonsteknologi – frontend- og mobilutvikling er et 180
        studiepoengs studium ved Høyskolen Kristiania. Studiet gir bred kunnskap
        innen webutvikling, mobilapputvikling, design og programmering, og
        avsluttes med et bachelorprosjekt i samarbeid med en ekstern bedrift.
      </Text>

      <View className="gap-3 items-center">
        <Pressable
          onPress={() => Linking.openURL(PROGRAM_DESCRIPTION_URL)}
          className="bg-primary rounded-lg px-6 py-3 active:opacity-80 w-full max-w-xs"
        >
          <Text className="text-white font-semibold text-center">
            Les hele programbeskrivelsen
          </Text>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL(BACHELOR_PROJECT_URL)}
          className="border-2 border-brand rounded-lg px-6 py-3 active:bg-white w-full max-w-xs"
        >
          <Text className="text-brand font-semibold text-center">
            Om bachelorprosjektet
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
