import { ReactNode } from "react";
import { Image, useWindowDimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PHOTO_RATIO = 16 / 9; // bredde / høyde
const MAX_PHOTO_HEIGHT = 600; // px: bildet blir aldri høyere enn dette (gjelder store skjermer)
const BREAKPOINT = 768; // px: under denne bredden regnes skjermen som mobil
const OVERLAP = { desktop: 0.15, mobile: 0.2 }; // hvor mye av bildet som ligger bak bunnen av studieløpet
const FADE = { desktop: 0.8, mobile: 0.6 }; // hvor langt ned faden rekker
const TOP_OPACITY = 1; // 1 = helt hvit i toppen lavere = bildet synes tidligere
const CROP_BOTTOM = { desktop: 0.15, mobile: 0.15 }; // hvor mye av bildets bunn som croppes
// ----------------------

export default function Footer({ children }: { children: ReactNode }) {
  const { width } = useWindowDimensions();
  const size = width < BREAKPOINT ? "mobile" : "desktop";

  const photoHeight = Math.min(width / PHOTO_RATIO, MAX_PHOTO_HEIGHT);
  const overlap = photoHeight * OVERLAP[size];
  const fadeHeight = photoHeight * FADE[size];
  const crop = photoHeight * CROP_BOTTOM[size]; 

  return (
    <View style={{ position: "relative", overflow: "hidden" }}>
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -crop, 
          height: photoHeight,
          zIndex: 0,
        }}
      >
        <Image
          source={require("../../../assets/images/team/team.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: photoHeight }}
        />
        <LinearGradient
          colors={[
            `rgba(255,255,255,${TOP_OPACITY})`,
            `rgba(255,255,255,${TOP_OPACITY * 0.5})`,
            "rgba(255,255,255,0)",
          ]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: fadeHeight,
          }}
        />
      </View>

      <View style={{ paddingBottom: photoHeight - overlap - crop, zIndex: 1 }}>
        {children}
      </View>
    </View>
  );
}
