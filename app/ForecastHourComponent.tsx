import { View, ScrollView, StyleSheet } from "react-native";
import { WeatherAPI } from "./type";
import ForecastItemHourComponent from "./ForecastHourItemComponent";
function ForecastHourComponent(props: { weatherAPI: WeatherAPI | null }) {
  
  console.log(props)
  return (
   
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      {props.weatherAPI?.forecast.map((fhour, i) => (
        <ForecastItemHourComponent
          key={i}
          forecast={fhour}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
container: {
  flexDirection: 'row', 
    columnGap: 20,
}
});

export default ForecastHourComponent;