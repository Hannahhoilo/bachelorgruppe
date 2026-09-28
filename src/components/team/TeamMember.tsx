import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  ScrollView,
  ImageSourcePropType,
} from "react-native";

type Props = {
  name: string;
  image: ImageSourcePropType;
  description: string;
};

export default function TeamMember({ name, image, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="items-center mb-6" style={{ width: 140 }}>
      <Image
        source={image}
        className="rounded-xl mb-2 border-2 border-highlight"
        style={{ width: 128, height: 128 }}
        resizeMode="cover"
      />
      <Text className="font-semibold text-base mb-1 text-primary">{name}</Text>

      <Pressable
        onPress={() => setIsOpen(true)}
        className="px-3 py-1 rounded-full hover:bg-soft active:bg-soft"
      >
        <Text className="text-brand font-medium">Se profil ❯</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setIsOpen(false)}
      >
        <View className="flex-1 items-center justify-center p-6">
          {/* Mørk bakgrunn trykk utenfor kortet for å lukke */}
          <Pressable
            className="absolute inset-0 bg-black/60"
            onPress={() => setIsOpen(false)}
          />

          {/* Selve popup-kortet */}
          <View
            className="bg-white rounded-2xl w-full max-w-sm overflow-hidden"
            style={{ maxHeight: "85%" }}
          >
            <ScrollView
              contentContainerStyle={{ alignItems: "center", padding: 24 }}
            >
              <Image
                source={image}
                className="rounded-2xl border-4 border-highlight mb-4"
                style={{ width: 240, height: 240 }}
                resizeMode="cover"
              />
              <Text className="text-2xl font-bold text-primary mb-2">
                {name}
              </Text>
              <Text className="text-gray-700 text-center leading-6 mb-5">
                {description}
              </Text>
              <Pressable
                onPress={() => setIsOpen(false)}
                className="bg-cta rounded-lg px-6 py-3 hover:opacity-90 active:opacity-80"
              >
                <Text className="text-primary font-semibold">Lukk</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
