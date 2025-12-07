import { Text, View, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

function UV(props: { weatherAPI: WeatherAPI | null }) {
  const screenWidth = Dimensions.get("window").width;
    const [calculatedWidth, setCalculatedWidth] = useState(screenWidth * 0.5 - 30);
  
    Dimensions.addEventListener("change", ({ window, screen }) => {
      const { width, height } = window;
      setCalculatedWidth(width * 0.5 - 30 )
    });

  const scaleUV = (index: number | undefined) => {
    if (index === undefined) {
      return "";
    }

    if (index <= 2) {
      return "Low";
    } else if (index <= 5) {
      return "Moderate";
    } else if (index <= 7) {
      return "High";
    } else if (index <= 10) {
      return "Very High";
    } else {
      return "Extremely";
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexBasis: calculatedWidth,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },
    uvTittle: {
      color: "white",
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 5,
    },

    uvNum: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
    },

    scaleText: {
      color: "white",
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 20,
    },

    linearGradient: {
      borderRadius: 20,
      height: 5,
      justifyContent: "center",
    },

    brightThumb: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 10,
      borderWidth: 5,
      height: 10,
      width: 10,
    },

    slider: {
      height: 5,

    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.uvTittle}>CHỈ SỐ UV</Text>
      <Text style={styles.uvNum}>{props.weatherAPI?.uv}</Text>
      <Text style={styles.scaleText}>{scaleUV(props.weatherAPI?.uv)}</Text>
      <LinearGradient

        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#00FF00", "#800080"]}
        style={styles.linearGradient}
      >
        <Slider 
          style={styles.slider}
          minimumTrackTintColor={"transparent"}
          maximumTrackTintColor={"transparent"}
          maximumValue={11}
          minimumValue={0}
          step={1}
          value={props.weatherAPI?.uv}
          disabled={true}
          thumbStyle={styles.brightThumb}
        />
      </LinearGradient>
    </View>
  );
}
export default UV;
