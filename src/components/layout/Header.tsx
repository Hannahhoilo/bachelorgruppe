import { LinearGradient } from "expo-linear-gradient";
import { Linking, Pressable, Text, View } from "react-native";

export default function Header() {
  return (
    <LinearGradient
      colors={["#35366b", "#00B4D8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="px-8 py-12 md:py-16 items-start w-full max-w-3xl self-center">
        <Text className="w-full text-4xl md:text-5xl font-bold text-left md:text-center mb-5 text-lime-200">
          Bachelorgruppe 2027
        </Text>
        <Text className="w-full text-lg text-left md:text-center text-lime-200 leading-7">
          Vi er fem engasjerte studenter på siste året av Frontend- og
          mobilutvikling ved Høyskolen Kristiania, og ser nå etter en bedrift å
          samarbeide med gjennom bachelorprosjektet vårt.
        </Text>

        <View className="mt-8 mb-2 items-start md:items-center self-start md:self-center">
          <Text className="text-2xl font-extrabold text-left md:text-center text-lime-200 mb-2">
            Kontakt oss
          </Text>

          <Text className="text-lg text-left md:text-center text-lime-200 leading-7">
            Robyn Kristoffersen
          </Text>

          <Text className="text-lg text-left md:text-center text-lime-200 leading-7">
            +47 45 77 83 16
          </Text>

          <Pressable
            onPress={() => Linking.openURL("mailto:robyn-em@hotmail.com")}
          >
            <Text className="text-lg text-left md:text-center text-lime-200 leading-7">
              robyn-em@hotmail.com
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
