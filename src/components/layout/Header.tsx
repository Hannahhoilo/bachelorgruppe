import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <LinearGradient
      colors={["#35366b", "#00B4D8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="px-6 py-8 items-center w-full max-w-3xl self-center">
        <Text className="text-2xl font-bold text-center mb-3 text-white">
          Vår Bachelorgruppe
        </Text>
        <Text className="text-base text-center text-soft leading-6">
          Vi er fem bachelorstudenter i frontend- og mobilutvikling ved
          Høyskolen Kristiania. Våren 2027 skal vi jobbe med et avsluttende
          prosjekt der vi går i dybden på fagområdet vårt og bruker det vi har
          lært til å løse en reell utfordring for en bedrift. Vi er sultne på
          kunnskap, og ønsker å benytte oss av denne muligheten til å lære så
          mye som mulig! Har dere en idé dere ikke har hatt tid til å realisere,
          en manuell prosess som burde vært digital, eller et verktøy dere
          skulle ønske fantes?
        </Text>
        <Pressable className="mt-5 mb-4 self-center bg-cta rounded-lg px-6 py-3 active:opacity-80">
          <Text className="text-primary font-semibold">Ta kontakt!</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
