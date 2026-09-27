import { ScrollView, View } from "react-native";
import Header from "../components/layout/Header";
import TeamMember from "../components/team/TeamMember";
import StudyPlanSection from "../components/layout/StudyPlanSection";

const team = [
  { name: "Hannah", image: require("../../assets/images/team/hannah.jpg") },
  { name: "Rikke", image: require("../../assets/images/team/rikke.jpg") },
  { name: "Robyn", image: require("../../assets/images/team/robyn.jpg") },
  { name: "Sunniva", image: require("../../assets/images/team/sunniva.jpg") },
  { name: "Tora", image: require("../../assets/images/team/tora.jpg") },
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
      <StudyPlanSection />
    </ScrollView>
  );
}
