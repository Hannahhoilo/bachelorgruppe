import { ScrollView, View } from "react-native";
import Header from "../components/layout/Header";
import TeamMember from "../components/team/TeamMember";
import StudyPlanSection from "../components/layout/StudyPlanSection";
import ProgramInfoSection from "../components/layout/Info";
import Info from "../components/layout/Info";

const team = [
  {
    name: "Hannah Høilo",
    image: require("../../assets/images/team/hannah.jpg"),
    description: "Hannah har før hun begynte på bacheloren allerete gått et år på Kristianias Fagskole, på et årstudium innen Frontend. På hennes 4. semester falgte hun fargfagene C i Linux, Python, Algorytm and Datastructures, og IT prosjektledelse",
  },
  {
    name: "Rikke Christensen Foyn",
    image: require("../../assets/images/team/rikke.jpg"),
    description: "Skriv en kort presentasjon av Rikke her.",
  },
  {
    name: "Robyn Kristoffersen",
    image: require("../../assets/images/team/robyn.jpg"),
    description: "Skriv en kort presentasjon av Robyn her.",
  },
  {
    name: "Sunniva Eide Martin",
    image: require("../../assets/images/team/sunniva.jpg"),
    description: "Skriv en kort presentasjon av Sunniva her.",
  },
  {
    name: "Tora Nordhagen Vang",
    image: require("../../assets/images/team/tora.jpg"),
    description: "Skriv en kort presentasjon av Tora her.",
  },
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
      <Info />
      <StudyPlanSection />
    </ScrollView>
  );
}
