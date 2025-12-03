import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
function Astro(props: { weatherAPI: WeatherAPI | null }) {
  const screenWidth = Dimensions.get("window").width;
  const calculatedWidth = screenWidth * 0.5 - 10;
  const styles = StyleSheet.create({
    container: {
      flexBasis: calculatedWidth,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },

    sunrise: {
      color: "white",
      fontSize: 30,
    },

    sunriseTittle: {
      color: 'white',
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 5
    },

    sunset: {
      color: 'white',
      fontSize: 15

    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.sunriseTittle}>MẶT TRỜI MỌC</Text>
      <Text style={styles.sunrise}>{props.weatherAPI?.sunrise}</Text>
      <Text style={styles.sunset}>Mặt trời lặn: {props.weatherAPI?.sunset}</Text>
      {/* <Text style={styles.fontWhite}>Moon Rise: {props.weatherAPI?.moonrise}</Text> */}
      {/* <Text style={styles.fontWhite}>Moon Phase: {props.weatherAPI?.moon_phase}</Text> */}
    </View>
  );
}

export default Astro;
