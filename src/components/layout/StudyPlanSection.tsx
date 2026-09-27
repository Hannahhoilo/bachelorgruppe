import { View, Text } from "react-native";
import { studyPlan } from "../../data/studyPlan";
import CoursesAccordion from "./CoursesAccordion";

export default function StudyPlanSection() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold text-center mb-1">
        Bachelor i informasjonsteknologi:
      </Text>
      <Text className="text-gray-500 text-center mb-6">
        Frontend- og mobilutvikling: trykk på et emne for å lese mer 
      </Text>

      {studyPlan.map((semester) => (
        <View key={semester.number} className="flex-row mb-1">
          <View className="w-20 bg-gray-300 items-center justify-center border border-gray-400 p-2">
            <Text className="font-bold text-center text-xs">
              {semester.number}. semester
            </Text>
          </View>

          <View className="flex-1 flex-row flex-wrap">
            {semester.courses.map((course) => (
              <CoursesAccordion
                key={course.name}
                name={course.name}
                credits={course.credits}
                description={course.description}
                url={course.url}
                flexGrow={course.credits}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
