import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { WeatherAPI } from "./type";

function CurrentLocationWeatherComponent(props: {
  weatherAPI: WeatherAPI | null;
}) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.updatedTittle}>{props.weatherAPI?.last_updated}</Text>
        <Text style={styles.nameTittle}>{props.weatherAPI?.name}</Text>
        <Text style={styles.tempCTittle}>{props.weatherAPI?.tempC}{'\u00B0'}C</Text>
        <Text style={styles.textTittle}>{props.weatherAPI?.text}</Text>
        <Image
          style={styles.icon}
          source={{
            uri: "https:" + props.weatherAPI?.icon,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 90,
    height: 90,
    marginTop: 5
  },
  container: {
    alignItems: "center",
    justifyContent: 'center',
    margin: 20
  },
  nameTittle: {
    fontSize: 30,
    color: "white",
  },
  tempCTittle: {
    fontSize: 60,
    color: "white",
    margin: 5
  },
  textTittle: {
    fontSize: 20,
    color: "white",
  },
  updatedTittle: {
    fontSize: 20,
    color: "white",
  }
});
export default CurrentLocationWeatherComponent;
