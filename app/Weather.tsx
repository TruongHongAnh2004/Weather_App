import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { WeatherAPI } from "./type";
import CurrentLocationWeatherComponent from "./CurrentLocationWeatherComponent";
import ForecastHourComponent from "./ForecastHourComponent";
import Astro from "./Astro";
import Wind from "./Wind";
import UV from "./UV";
export default function Weather() {
  const [weather, setWeather] = useState<WeatherAPI | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=bcee342ca3ac483a962151415252111&q=Ho Chi Minh&lang=vi"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          name: String(data.location.name),
          tempC: Number(data.current.temp_c),
          text: String(data.current.condition.text),
          icon: String(data.current.condition.icon),
          last_updated: String(data.current.last_updated.slice(0, 10)),
          sunrise: String(data.forecast.forecastday[0].astro.sunrise),
          sunset: String(data.forecast.forecastday[0].astro.sunset),
          moonrise: String(data.forecast.forecastday[0].astro.moonrise),
          moon_phase: String(data.forecast.forecastday[0].astro.moon_phase),
          windMph: Number(data.current.wind_mph),
          windKph: Number(data.current.wind_kph),
          windDir: String(data.current.wind_dir),
          windDegree: Number(data.current.wind_degree),
          uv: Number(data.current.uv),
          forecast: data.forecast.forecastday[0].hour.map(function (hour: any) {
            return {
              time: hour.time.slice(11),
              tempC: hour.temp_c,
              text: hour.condition.text,
              icon: hour.condition.icon,
            };
          }),
        });

        switch (String(data.current.condition.text)) {
          case "Sunny":
            setBackgroundColor(backgroundColorTheme.sunny);
            break;
          case "Overcast":
            setBackgroundColor(backgroundColorTheme.cloudy);
            break;
          case "Patchy rain possible":
          case "Moderate rain at times":
          case "Heavy rain at times":
          case "Light rain shower":
          case "Moderate or heavy rain shower":
          case "Torrential rain shower":
          case "Patchy light rain with thunder":
          case "Moderate or heavy rain with thunder":
            setBackgroundColor(backgroundColorTheme.rainy);
            break;
          case "Mist":
          case "Fog":
          case "Freezing fog":
            setBackgroundColor(backgroundColorTheme.fog);
            break;
          case "Thundery outbreaks possible":
            setBackgroundColor(backgroundColorTheme.storm);
            break;
          case "Clear":
          case "Partly Cloudy":
          case "Cloudy":
            setBackgroundColor(backgroundColorTheme.night);
            break;
          default:
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const backgroundColorTheme = {
    sunny: "#48cbff",
    cloudy: "#48aeff",
    rainy: "#3f7cd7",
    fog: "#2cb6da",
    storm: "#6840a3",
    night: "#1c1d4b",
    snow: "#37b8fc",
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor
        ? backgroundColor
        : backgroundColorTheme.sunny,
    },

    astro: {
      padding: 20,
      flexDirection: "row",
      columnGap: 25,
    },

    wind: {
      padding: 20,
      
    },
    
    uv: {
      padding: 20,
      flexDirection: "row",
      columnGap: 30,
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <CurrentLocationWeatherComponent weatherAPI={weather} />
      <ForecastHourComponent weatherAPI={weather} />
      <View style={styles.astro}>
        <Astro weatherAPI={weather} />
      </View>
      <View style={styles.wind}>
        <Wind weatherAPI={weather} />
      </View>

      <View style={styles.uv}>
        <UV weatherAPI={weather}/>
      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}
