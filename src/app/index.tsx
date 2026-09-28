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
    description: "Hannah har før hun begynte på bacheloren allerede gått et år på Kristianias Fagskole, på et årsstudium innen Frontend. På 4. tok hun valgfagene C i Linux, Python, Algorithms and Data Structures og IT- og prosjektledelse. Hannah har gjennom skolegangen jobbet som studentassistend, der hun veileder studenter i emner hun har hatt tidligere. På fritiden har hun som regel godt plantet foran PlayStation eller på treningssenteret.",
  },
  {
    name: "Rikke Christensen Foyn",
    image: require("../../assets/images/team/rikke.jpg"),
    description: "Skriv en kort presentasjon av Rikke her.",
  },
  {
    name: "Robyn Kristoffersen",
    image: require("../../assets/images/team/robyn.jpg"),
    description:
      "Robyn er en positiv og nysgjerrig person som liker å være kreativ og finne gode løsninger. Hun trives godt med å jobbe sammen med andre, men liker også å fordype meg i ting og lære nye teknologier. På fritiden er Robyn glad i hunder, gaming og kreative prosjekter. Kartbaserte websystemer, Innovasjon og prototyping og Unity utvikling",
  },
  {
    name: "Sunniva Eide Martin",
    image: require("../../assets/images/team/sunniva.jpg"),
    description:
      "Sunniva liker å jobbe med prosjekter hvor hun kan være kreativ og samtidig se et konkret resultat av det hun lager. Hun trives med å jobbe sammen med andre og bidra med nye ideer. På fritiden finner du ofte Sunniva med nesen i en bok, ute å spiser god mat eller ute på reise.",
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
