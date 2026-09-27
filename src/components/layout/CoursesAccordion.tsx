import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Linking,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  name: string;
  credits: number;
  description: string;
  url: string;
  flexGrow: number;
};

export default function CourseAccordion({
  name,
  credits,
  description,
  url,
  flexGrow,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <Pressable
      onPress={toggle}
      style={{ flexGrow, flexBasis: 140 }}
      className="bg-blue-50 border border-gray-300 active:bg-blue-100"
    >
      <View className="p-3">
        <Text className="font-semibold text-center">{name}</Text>
        <Text className="text-gray-500 text-center text-xs mt-1">
          {credits} sp
        </Text>
      </View>
      {isOpen && (
        <View className="px-3 pb-3 border-t border-gray-300 pt-2">
          <Text className="text-gray-700 text-sm leading-5">{description}</Text>
          <Pressable onPress={() => Linking.openURL(url)} className="mt-2">
            <Text className="font-bold text-blue-600">Gå til emneside</Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  );
}
