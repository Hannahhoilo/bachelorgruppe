import { LinearGradient } from "expo-linear-gradient";
import { Linking, Pressable, Text, View } from "react-native";

export default function Header() {
  return (
    <LinearGradient
      colors={["#35366b", "#00B4D8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="px-6 py-8 items-start w-full max-w-3xl self-center">
        <Text className="text-2xl font-bold text-left mb-3 text-lime-200">
          Vår Bachelorgruppe
        </Text>
        <Text className="text-base text-left text-lime-200 leading-6">
          Vi er fem engasjerte studenter på siste året av Frontend- og
          mobilutvikling ved Høyskolen Kristiania, og ser nå etter en bedrift å
          samarbeide med gjennom bachelorprosjektet vårt.
        </Text>

        <View className="mt-6 mb-2 items-start">
          <Text className="text-xl font-extrabold text-lime-200 mb-2">
            Ta kontakt
          </Text>

          <Pressable onPress={() => Linking.openURL("tel:+4745778316")}>
            <Text className="text-base text-lime-200 leading-7">
              +47 45 77 83 16
            </Text>
          </Pressable>

          <Pressable
            onPress={() => Linking.openURL("mailto:robyn-em@hotmail.com")}
          >
            <Text className="text-base text-lime-200 leading-7">
              robyn-em@hotmail.com
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
