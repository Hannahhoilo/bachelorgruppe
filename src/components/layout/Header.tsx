import { View, Text, Pressable } from "react-native";

export default function Header() {
  return (
    <View className="p-8 items-center bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-3">
        La oss bygge noe sammen!
      </Text>
      <Text className="text-base text-center text-gray-700 leading-6">
        Vi er fem bachelorstudenter i frontend- og mobilutvikling ved Høyskolen
        Kristiania. Våren 2027 skal vi jobbe med et avsluttende prosjekt der vi
        går i dybden på fagområdet vårt og bruker det vi har lært til å løse en
        reell utfordring for en bedrift. Vi er sultne på kunnskap, og ønsker 
		å benytte oss av denne muligheten til å lære så mye som mulig! 
		Har dere en idé dere ikke har hatt tid
        til å realisere, en manuell prosess som burde vært digital, eller et
        verktøy dere skulle ønske fantes?
      </Text>
      <Pressable className="mt-5 bg-black rounded-lg px-6 py-3 active:bg-gray-800">
        <Text className="text-white font-semibold">Ta kontakt! </Text>
      </Pressable>
    </View>
  );
}
