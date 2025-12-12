import { Text, View, StyleSheet, Dimensions } from "react-native";
import { WeatherAPI } from "./type";
function Wind(props: { weatherAPI: WeatherAPI | null }) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
    },

    windTittle: {
      color: "white",
      fontSize: 15,
      opacity: 0.5,
      paddingBottom: 10
    },

    windText: {
      color: "white",
      fontSize: 15,
    },

    childContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    line: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "white",
      marginBottom: 10,
      
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.windTittle}>GIÓ</Text>

      <View style={[styles.childContainer, styles.line]}>
        <Text style={styles.windText}>Gió</Text>
        <Text style={styles.windText}>
          {props.weatherAPI?.windMph} km/h</Text>
      </View>

      <View style={[styles.childContainer, styles.line]}>
        <Text style={styles.windText}>Gió giật</Text>
        <Text style={styles.windText}>{props.weatherAPI?.windKph} km/h</Text>
      </View>

      <View style={styles.childContainer}>
        <Text style={styles.windText}>Hướng</Text>
        <Text style={styles.windText}>
          {props.weatherAPI?.windDegree}
          {"\u00B0"} {props.weatherAPI?.windDir}
        </Text>
      </View>
    </View>
  );
}
export default Wind;