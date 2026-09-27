import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";

type Props = {
  name: string;
  image: ImageSourcePropType;
  onPressProfile?: () => void;
};

export default function TeamMember({ name, image, onPressProfile }: Props) {
  return (
    <View className="items-center mb-6" style={{ width: 140 }}>
      <Image
        source={image}
        className="rounded-xl mb-2"
        style={{ width: 128, height: 128 }}
        resizeMode="cover"
      />
      <Text className="font-semibold text-base mb-1">{name}</Text>
      <Pressable onPress={onPressProfile}>
        <Text className="text-gray-600">Se profil ❯</Text>
      </Pressable>
    </View>
  );
}
