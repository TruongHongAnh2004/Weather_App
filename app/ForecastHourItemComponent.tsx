import { View, ScrollView,Text , Image,StyleSheet} from "react-native";
import { Forecast } from "./type";

function ForecastItemHourComponent(props: {
  forecast: Forecast;// item ko bao gio null    
})
{
    return (
        <View style={styles.container}>
            <Text style= {styles.fontColor}>{props.forecast.time}</Text>
            {/* <Text style= {styles.fontColor}>{props.forecast.text}</Text> */}
            <Image style={styles.icon}
            source={{
                uri:"https:"+ props.forecast.icon,
            }}/>
            <Text style= {styles.fontColor}>{props.forecast.tempC}{'\u00B0'}C</Text>
        </View>
      );
}
const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  container: {
    alignItems:'center',
    textAlign: 'center',
  },
  fontColor: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default ForecastItemHourComponent;