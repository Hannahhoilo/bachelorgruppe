import { ScrollView, View } from "react-native";
import Header from "../components/layout/Header";
import TeamMember from "../components/team/TeamMember";
import StudyPlanSection from "../components/layout/StudyPlanSection";
import Info from "../components/layout/Info";
import Footer from "@/components/layout/Footer";

const team = [
  {
    name: "Hannah Høilo",
    image: require("../../assets/images/team/hannah.jpg"),
    description:
      "Hannah har før hun begynte på bacheloren allerede gått et år på Kristianias Fagskole, på et årsstudium innen Frontend. På hennes 4. semester tok hun valgfagene C i Linux, Python, Algorithms and Data Structures og IT- og prosjektledelse. Hannah har gjennom skolegangen jobbet som studentassistent, der hun veileder studenter i emner hun har hatt tidligere. På fritiden har hun som regel godt plantet foran PlayStation eller på treningssenteret.",
  },
  {
    name: "Rikke Christensen Foyn",
    image: require("../../assets/images/team/rikke.jpg"),
    description:
      "Rikke har allerede en bachelorgrad i økonomi og administrasjon, og har derfor en ekstra interesse for skjæringspunktet mellom forretning og teknologi. Hun er engasjert og nysgjerrig, og trives i team hvor det er rom for å være kreativ. På fritiden sier hun sjelden nei til en filmkveld, eller en tur til utlandet.",
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
    description:
      "Tora er en nysgjerrig person som liker å utfordre seg selv og prøve nye ting. Hun liker også å engasjere seg utenfor studiene og har de siste to årene sittet i styret i studentforeningen Kvinner & IT. Hun trives best sammen med andre og bruker mye av fritiden på venner og trening, spesielt løping. Hun er også glad i å reise og setter pris på de små gledene i hverdagen.",
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
      <Footer>
        <StudyPlanSection />
      </Footer>
    </ScrollView>
  );
}
