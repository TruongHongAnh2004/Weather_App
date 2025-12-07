import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
function Humidity(props: { weatherAPI: WeatherAPI | null }) {
  const screenWidth = Dimensions.get("window").width;
  const calculatedWidth = screenWidth * 0.5 - 37.5;
  const styles = StyleSheet.create({
    container: {
      flexBasis: calculatedWidth,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },

    humidity: {
      color: "white",
      fontSize: 30,
    },

    humidityTittle: {
      color: 'white',
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 5
    },
    
  });

  return (
    <View style={styles.container}>
      <Text style={styles.humidityTittle}>ĐỘ ẨM</Text>
      <Text style={styles.humidity}>{props.weatherAPI?.humidity} %</Text>
    </View>
  );
}

export default Humidity;
