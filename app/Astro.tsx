import { View,Text, ScrollView, StyleSheet } from "react-native";
import { WeatherAPI } from "./type";
function Astro(props: { weatherAPI: WeatherAPI | null }) {
  return (
    <View>
        <Text style={styles.fontWhite}>Sun Rise: {props.weatherAPI?.sunrise}</Text>
        <Text style={styles.fontWhite}>Sun Set: {props.weatherAPI?.sunset}</Text>
        <Text style={styles.fontWhite}>Moon Rise: {props.weatherAPI?.moonrise}</Text>
        <Text style={styles.fontWhite}>Moon Phase: {props.weatherAPI?.moon_phase}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    fontWhite: {
        color: 'white',
        fontSize: 30
    }
})
export default Astro;