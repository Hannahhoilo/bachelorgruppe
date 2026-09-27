import { ScrollView, View } from "react-native";
import Header from "../components/layout/Header";
import TeamMember from "../components/team/TeamMember";

const team = [
  { name: "Rikke", imageUrl: "https://via.placeholder.com/150" },
  { name: "Hannah", imageUrl: "https://via.placeholder.com/150" },
  { name: "Robyn", imageUrl: "https://via.placeholder.com/150" },
  { name: "Sunniva", imageUrl: "https://via.placeholder.com/150" },
  { name: "Tora", imageUrl: "https://via.placeholder.com/150" },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <Header />
      <View className="flex-row flex-wrap justify-center gap-4 p-6">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </View>
    </ScrollView>
  );
}
