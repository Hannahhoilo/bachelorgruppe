import { View, Text, Image, Pressable } from "react-native";

type Props = {
  name: string;
  imageUrl: string;
  onPressProfile?: () => void;
};

export default function TeamMember({ name, imageUrl, onPressProfile }: Props) {
  return (
    <View className="items-center w-36 mb-5">
      <Image
        source={{ uri: imageUrl }}
        className="w-32 h-32 rounded-xl mb-2 shadow-md"
      />
      <Text className="font-semibold text-base mb-1">{name}</Text>
      <Pressable onPress={onPressProfile}>
        <Text className="text-gray-600">Se profil ❯</Text>
      </Pressable>
    </View>
  );
}
