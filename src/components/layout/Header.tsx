import { View, Text, Pressable } from "react-native";

export default function Header() {
  return (
    <View className="p-8 items-center bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-3">
        Hei sveis! 
      </Text>
      <Text className="text-base text-center text-gray-700 leading-6">
        Vi er fem studenter ved Høyskolen Kristiania som tar bachelor i
        frontend- og mobilutvikling. Våren 2027 skal vi gjennomføre
        bachelorprosjektet vårt, og ser etter en bedrift med en reell utfordring
        vi kan jobbe med. Vi liker en 
      </Text>
      <Pressable className="mt-5 bg-black rounded-lg px-6 py-3 active:bg-gray-800">
        <Text className="text-white font-semibold">Ta kontakt! </Text>
      </Pressable>
    </View>
  );
}
