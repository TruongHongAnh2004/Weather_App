import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
import { useState } from "react";
function Vision(props: { weatherAPI: WeatherAPI | null }) {
  const screenWidth = Dimensions.get("window").width;
  const [calculatedWidth, setCalculatedWidth] = useState(
    screenWidth * 0.5 - 30
  );

  Dimensions.addEventListener("change", ({ window, screen }) => {
    const { width, height } = window;
    setCalculatedWidth(width * 0.5 - 30);
  });
  const styles = StyleSheet.create({
    container: {
      flexBasis: calculatedWidth,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },

    viskm: {
      color: "white",
      fontSize: 30,
    },

    visionTittle: {
      color: "white",
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.visionTittle}>TẦM NHÌN</Text>
      <Text style={styles.viskm}>{props.weatherAPI?.visKm} km</Text>
    </View>
  );
}

export default Vision;
