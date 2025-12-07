import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
function Pressure(props: { weatherAPI: WeatherAPI | null }) {
  const screenWidth = Dimensions.get("window").width;
  const calculatedWidth = screenWidth * 0.5 - 37.5;
  const styles = StyleSheet.create({
    container: {
      flexBasis: calculatedWidth,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },

    pressuremb: {
      color: "white",
      fontSize: 30,
    },

    pressureTittle: {
      color: 'white',
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 5
    },
    
  });

  return (
    <View style={styles.container}>
      <Text style={styles.pressureTittle}>ÁP SUẤT</Text>
      <Text style={styles.pressuremb}>{props.weatherAPI?.pressureMb} hPa</Text>
    </View>
  );
}

export default Pressure;
