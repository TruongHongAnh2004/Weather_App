import { View, ScrollView, StyleSheet, Text } from "react-native";
import { WeatherAPI } from "./type";
import ForecastItemHourComponent from "./ForecastHourItemComponent";
function ForecastHourComponent(props: { weatherAPI: WeatherAPI | null }) {
  return (
    <View style={styles.parentContainer}> 
      <Text style={styles.textColor}>Dự báo thời tiết hôm nay</Text>
      <ScrollView
        contentContainerStyle={styles.container}
        // style={styles.parentContainer}
      >
        
        {props.weatherAPI?.forecast.map((fhour, i) => (
          <ForecastItemHourComponent key={i} forecast={fhour} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 25,
    
    overflowY: "hidden",
    width: "100%",
    
  },

  parentContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 20,
    margin: 20,

  },

  textColor: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10
  }
});

export default ForecastHourComponent;
